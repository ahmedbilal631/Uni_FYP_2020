import React, { Component } from "react";
import {
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Modal,
  Share
} from "react-native";
import {
  Spinner,
  View,
  Text,
  Icon,
  Card,
  CardItem,
  Body,
  Container,
} from "native-base";

import {getActivePost} from '../../redux/actions/missingPersonAction';

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
                // uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
                uri: "../../media/naveed.jpg",
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


  componentWillReceiveProps(newProp) {
    
    this.setState({
      appColor:newProp.clr,
      fakeArray: newProp.missingPersons,
      loader:false
    });
    this.setState({
      appColor:newProp.clr,
      bgClr: appColor == '#fe3563'?'#272324':appColor == '#009701'? '#272324': '#fefbfb',
    });
  }


  componentDidMount() {
    this.props.getActivePost(this.props.cell);
    // this.setState({ fakeArray: this.props.missingPersons,appColor:this.props.clr });
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


  onSubmit = () => {
  };


  onStatusChange(value) {
    this.setState({
      selectedStatus: value
    });
  }


  onDisabilityChange(value) {
    this.setState({
      selectedDisability: value
    });
  }


  onGenderChange(value) {
    this.setState({
      selectedGender: value
    });
  }


  onAgeGroupChange(value) {
    this.setState({
      selectedAgeGroup: value
    });
  }

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };
  render() {

    const { navigation } = this.props;
    const {isImageViewVisible,currentImage,appColor, bgClr} = this.state;
    //my style
    const contrastClr = bgClr == '#272324'?'#fefbfb':'black';

    return (
      <Container>
        {/* <View style={styles.searchContainer}> */}

        <View>
          <StatusBar backgroundColor={'#E6DBDD'} barStyle="dark-content" />
        </View>


        <View style={[styles.header,{backgroundColor:appColor}]}>
          <Icon
            onPress={() => navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>Active Post</Text>
          
          <Text></Text>
          
        </View>
        <View><Text>{bgClr} + bgClrx is</Text></View>
        <View style={{backgroundColor:bgClr, height:'100%'}}>

        {this.state.loader ? 
        
        <Spinner style={{marginTop:30}} color={appColor} />
        
        :
        this.state.fakeArray.length >=1?
        <ScrollView>
          {this.state.fakeArray.map((data, index) => {
            console.log("Fake Data", data)
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
                                          // uri:`${EndPoint}/data/${data.status}/${data.image}`,
                                          uri: "../../media/naveed.jpg",
                                      },
                                    },
                              ]
                              })
                              // As for my openion, I agree with both. Beacuse tV has bothe + and - impacts on society
                              // i.e as corona is trending now a days. we are getting latest useful info..
                              // but on other hand tv is creating stressful conditions/ dipression..
                              
                            }
                          >
                            <Image
                              style={styles.filterImage}
                              source={require("../../media/naveed.jpg")}
                              // source={{uri:`${EndPoint}/data/${data.status}/${data.image}`}}
                            />
                          </TouchableOpacity>
                        </View>

                        <View style={styles.textContainer}>
                          <TouchableOpacity
                            style={{ width: "100%" }}
                            onPress={() =>
                              navigation.navigate("EditPost", {
                                data: {
                                  name: data.name,
                                  status: data.status,
                                  age: data.age,
                                  gender: data.gender,
                                  disability: data.disability,
                                  description: data.description,
                                  location: data.location,
                                  id: data.id,
                                  image: data.image
                                }
                              })
                            }
                          >
                            <View style={styles.cardHeader}>
                              <Text style={{fontWeight: 'bold'}}>{data.name}</Text>

                              <Text style={{color:appColor, fontWeight: 'bold'}}>
                                {data.status}
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
                                <Icon
                                  style={{ fontSize: 20 }}
                                  type="AntDesign"
                                  name="edit"
                                />
                                <Text
                                  style={styles.readMore}
                                  onPress={() =>
                                    navigation.navigate("EditPost", {
                                      data: {
                                        name: data.name,
                                        status: data.status,
                                        age: data.age,
                                        gender: data.gender,
                                        disability: data.disability,
                                        description: data.description,
                                        location: data.location,
                                        id: data.id,
                                        image: data.image
                                      }
                                    })
                                  }
                                >
                                  Edit
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
        
        <Text 
        onPress={() => this.props.navigation.navigate("AddPerson")} 
        style={{paddingHorizontal:5,textAlign:'center',fontWeight:'bold',marginTop:30, color: contrastClr}}
        >
        No Case Yet, Please add your case!
        </Text>
        
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
    missingPersons: state.missingPersons.UserPosts,
    clr:state.colorReducer.color,
    cell:state.userReducer.user.cell,
  };
};

export default connect(
  mapStateToProps,
  {
    getActivePost
  }
)(SearchScreen);
