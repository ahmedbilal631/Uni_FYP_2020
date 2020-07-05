import React, { Component } from "react";
import { StatusBar, Alert } from "react-native";
import {
  View,
  Text,
  Container,
  Content,
  Thumbnail,
  Button,
  Left,
  Right,
  Item,
  Icon,
  Body,
  Picker,
  Toast,
  ListItem,
  CheckBox,
  Input,
  Textarea,
} from "native-base";
import EndPoint from '../../endpoint';
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";
import { modifyPerson } from "../../redux/actions/missingPersonAction";
import styles from "./style";
import FloatingLabelInput from "../AddForm/floatingLabelInput";
import { resolvedCases } from "../../redux/actions/missingPersonAction";

const options = {
  title: "Select Option",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      gender: "Male",
      disability: "",
      location: "",
      description: "",
      status: "Found",
      currentStatus:"",
      age: "",
      image:'https://static.thenounproject.com/png/396915-200.png',
      value: "",
      MistabBtnCls: this.tabBtn,
      FndtabBtnCls: this.tabBtn,
      resolvedCase: false,
      appColor :'green',
            //myStates
            appLogoClr: 'pink',
            themeClr: 'light',
            bgClr: '#fefbfb',
            logoClr : 'pink',
            ///////////
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

        this.setState({
          image: response.uri 
        });
      }
    });
  };

  onValueChange(value) {
    this.setState({
      age: value
    });
  }

  onGenderChange(value) {
    this.setState({
      gender: value
    });
  }

  DisabilityHandler(value) {
    this.setState({
      disability: value
    });
  }

  
  confirmation = false;
  resolvedCaseHandler = () => {
    this.state.resolvedCase
      ? this.setState({
          resolvedCase: false
        })
      : Alert.alert(
          this.data.name + "'s Case Resolution",
          "Are your sure to resolve this case",
          [
            {
              text: "Ask me later",
              onPress: () => console.log("Ask me later pressed")
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {
              text: "OK",
              onPress: () =>
                this.setState({
                  resolvedCase: true,
                  status: "resolved"
                })
            }
          ],
          { cancelable: true }
        );
  };

  data = this.props.navigation.getParam("data", "NO-Data");


  componentWillReceiveProps(newProp) {
      this.setState({
        appColor:newProp.clr
      });
    }

  componentDidMount() {
    //here is the code to get the data of post.....
    this.setState({
      appColor:this.props.clr,
      name: this.data.name,
      gender: this.data.gender,
      disability: this.data.disability,
      location: this.data.location,
      description: this.data.description,
      status: this.data.status,
      currentStatus:this.data.status,
      age: this.data.age,
      id: this.data.id,
      image: this.data.image
    });
    // this.setState({appColor:this.props.clr });
    //this is the code to manage the colors or theme of app
    if(this.props.clr == '#009700'){
      this.setState({logoClr: 'green'});
    }
    else if(this.props.clr == "#fe3563"){
      this.setState({logoClr: 'pink', bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({logoClr: 'green', bgClr: '#272324'})
    }
    //the below code is to set status of the case
    if (this.data.status == "Missing") {
      this.setState({
        MistabBtnCls: this.tabBtnColored
      });
    } else {
      this.setState({
        FndtabBtnCls: this.tabBtnColored
      });
    }
  }

  onSubmit = () => {
    const data = {
      email:this.props.user.email,
      name: this.state.name,
      gender: this.state.gender,
      disability: this.state.disability,
      location: this.state.location,
      description: this.state.description,
      status: this.state.status,
      age: this.state.age,
      image: this.state.image,
      currentStatus:this.state.currentStatus
    };

    if (this.state.age == "" || this.state.age == "Select an age group") {
      Toast.show({
        text: "Select an age group",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.gender == "" || this.state.gender == "Gender") {
      Toast.show({
        text: "Select Gender",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.disability == "Select a Disability if any") {
      Toast.show({
        text: "Select a Disability",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.location == "") {
      Toast.show({
        text: "Select the Location",
        type: "warning",
        duration: 3000
      });
    }
     else if (this.state.image == 'https://static.thenounproject.com/png/396915-200.png') {
      Toast.show({
        text: "Image is mendatory",
        type: "warning",
        duration: 3000
      });
    }
    else {
      if(this.state.resolvedCase){

        console.log("From react Component: ", data);
        this.props.resolvedCases(data);
        this.props.navigation.navigate("ResolvedCases");
      }else{
        console.log("From react Component: ", data);
        this.props.modifyPerson(data);
        this.props.navigation.navigate("ActiveCases");
        Toast.show({
          text: "Successfully Updated",
          type: "success",
          duration: 3000
        });
      }
    }
  };

  //some state handlers are defined by me here
  StatusHandler(value) {
    this.setState({
      status: value
    });
  }

  // styles for status buttons

  clr = this.props.clr

  tabBtn= {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    color: this.clr
  }
  
  tabBtnColored= {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: this.clr,
    color: "white"
  }



  render() {

    

    const {appColor, bgClr} = this.state;
    const { navigation } = this.props;

    //my styling code is here....................
    const myTxtItem = {flexGrow: 1,  justifyContent: 'center', flexDirection: 'row',borderBottomColor: bgClr == '#fefbfb'?'black':'white', borderBottomWidth: 2 };
    //............................
    const myLable = {
      // marginLeft: 3,
      fontWeight: 'bold',
      marginBottom:7,
      color: appColor,
    }






    return (
      <Container>
        <StatusBar backgroundColor={'#E6DBDD'} barStyle="dark-content" />
        <View>
          <View style={[styles.header,{backgroundColor:appColor}]}>
            <Icon
              onPress={() => navigation.goBack()}
              style={{ fontSize: 30, color: "white" }}
              type="MaterialCommunityIcons"
              name="keyboard-backspace"
            />
            <Text style={styles.heading}>Modify a Post</Text>
            <Text></Text>
          </View>
        </View>
        <Content style={{backgroundColor: bgClr, paddingLeft: 20, paddingRight:20,}}>
            <View style={{marginTop: 12, borderWidth: 1, borderColor: '#9C9499', padding: 4}}>
          <View>
            <ListItem
              style={{marginLeft: 0, paddingLeft: 20}}
              onPress={this.resolvedCaseHandler}
            >
              <CheckBox checked={this.state.resolvedCase} color={appColor} onPress={this.resolvedCaseHandler}/>
              <Body>
                <Text style={{color:'#9C9495'}}>Mark this case as resolved</Text>
              </Body>
            </ListItem>
          </View>
{/* heres my code starts */}

              <Item  style={myTxtItem}>
            <Icon
                style={{color: appColor}}
                type="MaterialCommunityIcons"
                // type="AntDesign"
                active
                name="check"
              />
              <Picker
                mode="dropdown"
                // placeholder={'Subject'}
                style={{ borderRadius: 20, paddingRight: 100, color:appColor }}
                selectedValue={this.state.status}
                onValueChange={this.StatusHandler.bind(this)}
                >
                {/* <Picker.Item
                // style={{color:appColor}}
                  label="Subject"
                  value="Subject"
                  /> */}
                <Picker.Item
                  label="MISSING"
                  value="Missing"
                  />
                <Picker.Item
                  label="FOUND"
                  value="Found"
                  />
                {/* <Picker.Item label="OTHER" value="OTHER" /> */}
              </Picker>
            </Item>

            <Item style={myTxtItem}>
              <Icon
                type="AntDesign"
                active
                name="user"
                style={{color: appColor}}
              />
              <Input
                  value={this.state.name}
                  onChangeText={name => this.setState({ name: name })}
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="FULL NAME"
              />
            </Item>

            <Item style={myTxtItem}>
              <Icon
                type='Ionicons'
                active
                name='globe'
                style={{color: appColor}}
              />
              <Input
                value={this.state.location}
                onChangeText={location => this.setState({ location: location })}
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="LOCATION"
              />
            </Item>

            <Item style={myTxtItem}>
            <Icon
                style={{color: appColor}}
                // type="MaterialCommunityIcons"
                type="AntDesign"
                active
                name="user"
              />
              <Picker
                mode="dropdown"
                style={{color: appColor }}
                selectedValue={this.state.gender}
                onValueChange={this.onGenderChange.bind(this)}
                >
                <Picker.Item label={this.state.gender == "Male"? "MALE": "FEMALE"} value={this.state.gender} />
                <Picker.Item label="SELECT GENDER" value="Gender" />
                <Picker.Item label="MALE" value="Male" />
                <Picker.Item label="FEMALE" value="Female" />
                <Picker.Item label="OTHER" value="Other" />
              </Picker>
            </Item>

            <Item style={myTxtItem}>
            <Icon
                style={{color: appColor}}
                active
                name="calendar"
              />
              <Picker
                mode="dropdown"
                style={{
                  // borderWidth: 1,
                  // borderWidth: 1,
                  // borderColor: "#dadce0",
                  color:appColor
                }}
                selectedValue={this.state.age}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item
                  label={this.state.age}
                  value={this.state.age}
                />
                <Picker.Item
                  label="SELECT AGE GROUP"
                  value="SELECT AGE GROUP"
                />
                <Picker.Item label="1 to 5" value="1 to 5" />
                <Picker.Item label="6 to 10" value="6 to 10" />
                <Picker.Item label="11 to 15" value="11 to 15" />
                <Picker.Item label="16 to 20" value="16 to 20" />
                <Picker.Item label="21 to 25" value="21 to 25" />
                <Picker.Item label="26 to 30" value="26 to 30" />
                <Picker.Item label="31 to 35" value="31 to 35" />
                <Picker.Item label="36 to 40" value="36 to 40" />
                <Picker.Item label="41 to 45" value="41 to 45" />
                <Picker.Item label="46 or older" value="46 or older" />
              </Picker>
            </Item>

            <Item style={myTxtItem}>
            <Icon
                style={{color: appColor}}
                type="MaterialCommunityIcons"
                // type="AntDesign"
                active
                name="heart"
              />
              <Picker
                mode="dropdown"
                style={{color:appColor }}
                selectedValue={this.state.disability}
                onValueChange={this.DisabilityHandler.bind(this)}
                >
                <Picker.Item
                  label="SELECT DISABILITY IF ANY"
                  value="SELECT DISABILITY IF ANY"
                  />
                <Picker.Item
                  label="Mentally Disable"
                  value="Mentally Disable"
                  />
                <Picker.Item
                  label="Hearing Loss and Deafness"
                  value="Hearing Loss and Deafness"
                  />
                <Picker.Item label="Memory Loss" value="Memory Loss" />
                <Picker.Item
                  label="Speech and Language Disorder"
                  value="Speech and Language Disorder"
                  />
                <Picker.Item
                  label="Vision Loss and Blindness"
                  value="Vision Loss and Blindness"
                />
                <Picker.Item
                  label="Any Physical Disability"
                  value="Any Physical Disability"
                  />
                <Picker.Item label="Others" value="Others" />
                <Picker.Item label="Not Disabled" value="Not Disabled" />
              </Picker>
            </Item>

            <Item style={styles.phonenumberWrapper}>
              {/* <Label style={myLable}>Description:-</Label> */}
                <Textarea
                rowSpan={5}
                placeholder="Write here any other details about the case if you know. Thank You!!"
                name="Description"
                placeholderTextColor={'#9C9499'}
                style={{color: appColor, borderColor: bgClr == '#fefbfb'?'black':'white', borderWidth: 2}}
                // placeholder="Description"
                value={this.state.description}
                onChangeText={description =>
                  this.setState({ description: description })
                }
              />
            </Item>

            <Item style={{backgroundColor:bgClr }}>

<Button style={styles.imageInputStyle,{
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: "center",
      flex: 1,
      padding: 30,
      width: "100%",
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: bgClr,
      height: 220,
      // borderWidth: 0,
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0,
      elevation: 0
}} onPress={this.uploadImage}>
  <View style={{ width: "100%", marginVertical: 20, backgroundColor: bgClr }}>
    <Text style={styles.uploadTextStyle, {
          textAlign: "left",
          fontSize: 18,
          marginVertical: 20,
          alignSelf: "center",
          color:appColor,
          fontWeight:"bold"
    }}>Upload Photo</Text>
    <View style={styles.bottomStyle}>
      {this.state.image == "" ? (
        // <Image
        //   source={this.state.image}
        //   style={{width: '75%', height: 75, zIndex: 1, marginTop: '5%'}}
        //  />
         
        <Thumbnail
        style={styles.bottomImageStyle}
        source={this.state.logoClr == 'pink' ? this.state.imagePink: this.state.imageGreen}
        />
        ) : (
          <Thumbnail
          style={styles.bottomFullImg}
          source={{uri:this.state.image}}
          />
          )}
      </View>
      </View>
      </Button>
      </Item>



</View>








          {/* <View style={styles.btnViewStyle}>
            <Left>
              <Button
                bordered
                success
                style={this.state.MistabBtnCls}
                onPress={() =>
                  this.setState({
                    status: "Missing",
                    MistabBtnCls: this.tabBtnColored,
                    FndtabBtnCls: this.tabBtn
                  })
                }
              >
                {this.state.MistabBtnCls == this.tabBtn ? (
                  <Text style={styles.tab}>Missing</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Missing</Text>
                )}
              </Button>
            </Left>
            <Right>
              <Button
                bordered
                onPress={() =>
                  this.setState({
                    status: "Found",
                    FndtabBtnCls: this.tabBtnColored,
                    MistabBtnCls: this.tabBtn
                  })
                }
                success
                style={this.state.FndtabBtnCls}
              >
                {this.state.FndtabBtnCls == this.tabBtn ? (
                  <Text style={styles.tab}>Found</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Found</Text>
                )}
              </Button>
            </Right>
          </View> */}


          {/* <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Name"
              value={this.state.name}
              onChangeText={name => this.setState({ name: name })}
            />
          </View>

          <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Location"
              value={this.state.location}
              onChangeText={location => this.setState({ location: location })}
            />
          </View>

          <View style={styles.inputViewStyle}>
            <FloatingLabelInput
              label="Description"
              value={this.state.description}
              onChangeText={description =>
                this.setState({ description: description })
              }
            />
          </View>

          <View style={styles.inputViewStyle}>
            <Item last style={styles.inputStyle}>
              <Picker
                mode="dropdown"
                style={{
                  borderWidth: 1,
                  borderWidth: 1,
                  borderColor: "#dadce0"
                }}
                selectedValue={this.state.age}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label={this.state.age} value={this.state.age} />
                <Picker.Item
                  style={{ color: "white" }}
                  label="Select an age group"
                  value="Select an age group"
                />

                <Picker.Item label="1 to 5" value="1 to 5" />
                <Picker.Item label="6 to 10" value="6 to 10" />
                <Picker.Item label="11 to 15" value="11 to 15" />
                <Picker.Item label="16 to 20" value="16 to 20" />
                <Picker.Item label="21 to 25" value="21 to 25" />
                <Picker.Item label="26 to 30" value="26 to 30" />
                <Picker.Item label="30 to Greater" value="30 to Greater" />
              </Picker>
            </Item>
          </View>

          <View style={styles.inputViewStyle}>
            <Item last style={styles.inputStyle}>
              <Picker
                mode="dropdown"
                style={{ borderRadius: 20, paddingRight: 10 }}
                selectedValue={this.state.gender}
                onValueChange={this.onGenderChange.bind(this)}
              >
                <Picker.Item
                  label={this.state.gender}
                  value={this.state.gender}
                />

                <Picker.Item label="Gender" value="Gender" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </Item>
          </View>
          <View style={styles.inputViewStyle}>
            <Item last style={styles.inputStyle}>
              <Picker
                mode="dropdown"
                style={{ borderRadius: 20, paddingRight: 100 }}
                selectedValue={this.state.disability}
                onValueChange={this.DisabilityHandler.bind(this)}
              >
                <Picker.Item
                  label={this.state.disability}
                  value={this.state.disability}
                />

                <Picker.Item
                  label="Select a Disability if any"
                  value="Select a Disability if any"
                />
                <Picker.Item
                  label="Mentally Disable"
                  value="Mentally Disable"
                />
                <Picker.Item
                  label="Hearing Loss and Deafness"
                  value="Hearing Loss and Deafness"
                />
                <Picker.Item label="Memory Loss" value="Memory Loss" />
                <Picker.Item
                  label="Speech and Language Disorder"
                  value="Speech and Language Disorder"
                />
                <Picker.Item
                  label="Vision Loss and Blindness"
                  value="Vision Loss and Blindness"
                />
                <Picker.Item
                  label="Any Physical Disability"
                  value="Any Physical Disability"
                />
                <Picker.Item label="Others" value="Others" />
                <Picker.Item label="Not Disabled" value="Not Disabled" />
              </Picker>
            </Item>
          </View>

          <Button style={styles.imageInputStyle} onPress={this.uploadImage}>
            <View style={{ width: "100%", marginVertical: 20 }}>
              <Text style={styles.uploadTextStyle}>Upload Photo</Text>
              <View style={styles.bottomStyle}>
              
                  <Thumbnail
                    style={styles.bottomFullImg}
                    source={{uri:`${EndPoint}/data/${this.data.status}/${this.data.image}`}}
                  />

              </View>
            </View>
          </Button> */}
          <View style={styles.inputViewStyle}>
            <Button style={[styles.submitBtn,{ backgroundColor: appColor, borderRadius:20}]} success onPress={this.onSubmit}>
            <Text style={{color: bgClr, fontWeight:'bold'}}>Submit & Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state) =>{
  
  return {
    clr:state.colorReducer.color,
    user:state.userReducer.user
  }
}

export default connect(
  mapStateToProps,
  { modifyPerson, resolvedCases }
)(EditPost);
