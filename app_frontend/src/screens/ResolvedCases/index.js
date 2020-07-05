import React, { Component } from "react";
import {
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Share
} from "react-native";
import {
  View,
  Text,
  Icon,
  Card,
  CardItem,
  Body,
  Spinner,
  Container,
} from "native-base";

import {getResolvedPost,getHomeStories} from '../../redux/actions/missingPersonAction';
import ImagePicker from "react-native-image-picker";
import styles from "./style";
import ImageView from 'react-native-image-view';

import { connect } from "react-redux";

const options = {
  title: "Select Option",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loader:true,
      loader:false,
      selectedStatus: "",
      selectedDisability: "",
      selectedGender: "",
      selectedAgeGroup: "",
      location: "",
      appColor :'green',
      bgClr: '#fefbfb',
      // isImageViewVisible: false,
      isImageViewVisible: true,
      currentImage:[
        {
            source: {
                uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
            },
        },
    ],
    fakeArray: [
      {
        id: "1",
        // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyXov49V0vl3zSQGocwgBiOhf-I_iZqlf04-3FDfWnxNG91D64A",
        image:  '../../media/Profile/m1.jpg',
        // status: "Missing",
        status: "Found",
        name: "Naveed Rana",
        age: "21 to 25",
        gender: "Male",
        location: "Faisalabad",
        description:
          "Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.",
        disability: "Mentally Disable",
        mobile: "+92 303 4766669",
        post_By: "Asif"
      }
    ],
      // modalVisible: false
      modalVisible: true
    };
  }
  uploadImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        this.setState({
          image: source
        });
      }
    });
  };

  componentDidMount() {

    this.props.getResolvedPost(this.props.user.email);
    // this.setState({ fakeArray: this.props.ResolvedCases,appColor:this.props.clr  });
    // this.setState({appColor:this.props.clr  });
    this.setState({ appColor:this.props.clr });
    if(this.props.clr == '#009700'){
      this.setState({appLogoClr: 'green'});
    }
    else if(this.props.clr == "#fe3563"){
      this.setState({themeClr: 'darkPink', bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
    }
  }

componentWillReceiveProps(newProp) {
    
    this.setState({
      appColor:newProp.clr,
      // fakeArray: newProp.ResolvedCases,  this should be active
      loader:false
    });

  }
  
  
  componentWillUnmount() {
    // this.props.getHomeStories();
  }
  

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {

    const { navigation } = this.props;
    const {isImageViewVisible,currentImage,appColor, bgClr} = this.state;

    return (
      <Container>
        {/* <View style={styles.searchContainer}> */}

        <View>
          <StatusBar backgroundColor={'#E6DBDD'} barStyle="dark-content" />
        </View>
        <View style={[styles.header,{backgroundColor:appColor}]}>
          <Icon
            onPress={() => navigation.navigate('Homes')}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>Resolved Cases</Text>
          
          <Text></Text>
          
        </View>
        <View style={{backgroundColor: bgClr, height: '100%'}}>

        {this.state.loader ? 
        
        
        <Spinner style={{marginTop:100}} color={appColor} />
        
        :
        
this.state.fakeArray.length >=1?
        <ScrollView>
          {this.state.fakeArray.map((data, index) => {
            return (
              <View key={index} style={styles.cardContainer}>
                <Card>
                  <CardItem>
                    <Body>
                      <View style={styles.cardInnerContainer}>
                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              this.setState({ isImageViewVisible: true,
                                currentImage:
                                [
                                  {
                                  source: {
                                          uri:`${EndPoint}/data/${data.status}/${data.image}`,
                                      },
                                  },
                              ]
                              })
                            }
                          >
                            <Image
                              style={styles.filterImage}
                              // source={{uri:`${EndPoint}/data/${data.status}/${data.image}`}}
                              source={require("../../media/naveed.jpg")}
                            />
                          </TouchableOpacity>
                        </View>

                        <View style={styles.textContainer}>
                          <TouchableOpacity
                            style={{ width: "100%" }}
                            onPress={() =>
                              navigation.navigate("ResolvedCaseDetail", {
                                data: {
                                  name: data.name,
                                  status: data.status,
                                  age: data.age,
                                  gender: data.gender,
                                  disability: data.disability,
                                  description: data.description,
                                  location: data.location,
                                  image: data.image
                                }
                              })
                            }
                          >
                            <View style={styles.cardHeader}>
                              <Text style={{fontWeight: 'bold'}}>{data.name}</Text>

                              <Text style={{color:appColor, fontWeight: 'bold'}}>
                                {/* {data.status} */}
                                Resolved
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: "row",
                                paddingTop: 2
                              }}
                            >
                              <Icon
                                style={{ marginLeft: -5 }}
                                type="EvilIcons"
                                name="location"
                              />
                              <Text style={{ fontSize: 13 }}>
                                {data.location}
                              </Text>
                            <Icon  style={{fontSize: 14,marginLeft:8,marginTop:1,marginRight:2, }} name="md-time" type="Ionicons"/>
                              
                              {/* <Text style={{ fontSize: 12 }}>{data.createdat}</Text> */}
                              <Text style={{ fontSize: 12 }}>Mar/2020</Text>
                              
                              
                            </View>


                            <View style={styles.cardHeader}>
                              <View style={{ flexDirection: "row" }}>
                                <Text
                                  style={styles.readMore}
                                  onPress={() =>
                                    navigation.navigate("ResolvedCaseDetail", {
                                      data: {
                                        name: data.name,
                                        status: data.status,
                                        age: data.age,
                                        gender: data.gender,
                                        disability: data.disability,
                                        description: data.description,
                                        location: data.location,
                                        image: data.image
                                      }
                                    })
                                  }
                                >
                                  Read More
                                </Text>
                              </View>

                              <Icon
                                onPress={() => {
                                  Share.share({
                                    message: `*Missing Person Alert* \n Name: *${
                                      data.name
                                    }* \n Age: *${data.age}* \n Gender: *${
                                      data.gender
                                    }* \n Disability: *${
                                      data.disability
                                    }* \n Location: *${
                                      data.location
                                    }* \n Contact No.: *${data.mobile}*`,
                                    url:
                                      "http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg",
                                    title: "Wow, did you see that?"
                                  });
                                }}
                                style={{
                                  marginTop: -5,
                                  fontSize: 25,
                                  color: "gray"
                                }}
                                type="AntDesign"
                                name="sharealt"
                              />
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            );
          })}
        </ScrollView>
        :
        
        <Text style={{textAlign:'center',fontWeight:'bold',marginTop:30}}>No Case Yet!</Text>
      }
      </View>


        <ImageView
          images={currentImage}
          imageIndex={0}
          onClose={() => this.setState({isImageViewVisible: false})}
          isVisible={isImageViewVisible}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ResolvedCases: state.missingPersons.ResolvedCases,
    user:state.userReducer.user,
    userResolvedError:state.missingPersons.userResolvedError,
    clr:state.colorReducer.color
  };
};

export default connect(
  mapStateToProps,
  {getResolvedPost,getHomeStories}
)(SearchScreen);

// missingPersons
