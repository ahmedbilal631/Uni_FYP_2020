import React, { Component } from "react";
import { StatusBar, image,  } from "react-native";
import {
  View,
  Text,
  Container,
  Content,
  Thumbnail,
  Textarea,
  Button,
  Left,
  Right,
  Item,
  Icon,
  Picker,
  Toast,
  Input,
  Spinner
} from "native-base";
import ImagePicker from "react-native-image-picker";
// import uploadimageIcon from "../../media/uploadImgPink.png";
import uploadimageIconPink from "../../media/uploadImgPink.png";
import uploadimageIconGreen from "../../media/uploadImgGreen.png";
import { connect } from "react-redux";
import { 
  addPerson,
  getHomeStories,
  getNotifications,
  registerMissingPerson,
  resetRegisterMissingPersonStatus
} from "../../redux/actions/missingPersonAction";
import styles from "./style";
import FloatingLabelInput from "./floatingLabelInput";
import { ScrollView } from "react-native-gesture-handler";

const options = {
  title: "Select Option",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appColor:'#fe3562',
      //myStates
      appLogoClr: 'pink',
      themeClr: 'light',
      bgClr: '#fefbfb',
      logoClr : 'pink',
      ///////////
      name: "",
      gender: "",
      disability: "",
      location: "",
      description: "",
      status: "Missing",
      age: "",
      image: '',
      imagePink: uploadimageIconPink, 
      imageGreen: uploadimageIconGreen, 
      value: "",
      loader: false,
      MistabBtnCls: this.tabBtnColored,
      FndtabBtnCls: this.tabBtn
    };
  }

  //my code
  componentDidMount() {
    this.setState({appColor:this.props.clr });
    if(this.props.clr == '#009700'){
      this.setState({logoClr: 'green'});
    }
    else if(this.props.clr == "#fe3563"){
      this.setState({logoClr: 'pink', bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({logoClr: 'green', bgClr: '#272324'})
    }
  }
//..........................................
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.registerMissingPersonStatus == "done") {
      Toast.show({
        text: "Successfully Uploaded",
        type: "success",
        duration: 3000
      });
      this.props.addPerson({
        name: this.state.name,
        gender: this.state.gender,
        disability: this.state.disability,
        location: this.state.location,
        description: this.state.description,
        status: this.state.status,
        age: this.state.age,
        image: this.state.image,
        id: Math.random() + 1
      });
      this.props.resetRegisterMissingPersonStatus();
      this.props.navigation.navigate('Homes');
    } else if(nextProps.registerMissingPersonStatus == "error") {
      Toast.show({
        text: "Error Occurred",
        type: "error",
        duration: 3000
      });
      this.setState({
        loader: false
      });
      this.props.resetRegisterMissingPersonStatus();
    }
    this.setState({appColor:nextProps.clr});   
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


  // css classes for status buttons

  clr = this.props.clr
  // clr = this.state.appColor

  tabBtn= {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    // color: this.state.appColor
    color: this.clr
  }
  
  tabBtnColored= {
    width: "90%",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: this.clr,
    // backgroundColor: this.state.appColor,
    color: "white"
  }


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

  StatusHandler(value) {
    this.setState({
      status: value
    });
  }



  onSubmit = () => {
    // const userDatadata = {
    //   name: this.state.name,
    //   gender: this.state.gender,
    //   disability: this.state.disability,
    //   location: this.state.location,
    //   description: this.state.description,
    //   status: this.state.status,
    //   age: this.state.age,
    //   image: this.state.image,
    //   id: Math.random() + 1
    // };

    if (this.state.name == "" && this.state.status == "Missing") {
      Toast.show({
        text: "Enter person's name",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.location == "") {
      Toast.show({
        text: "Enter the location",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.description == "") {
      Toast.show({
        text: "Enter the description",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.age == "" || this.state.age == "Select an age group") {
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
    } else if (this.state.disability == "Select disability if any") {
      Toast.show({
        text: "Select a Disability",
        type: "warning",
        duration: 3000
      });
    } else if (this.state.image == "" ) {
      Toast.show({
        text: "Image is mendatory",
        type: "warning",
        duration: 3000
      });
    } else {
      this.setState({ loader: true });
      const data = new FormData();
        data.append('image', {
            uri: this.state.image,
            type: 'image/jpeg',
            name: `${this.state.location}_${this.state.age}_${new Date().getTime()}.jpg`,
        });
        data.append('name',`${this.state.name}`);
        data.append('gender',`${this.state.gender}`);
        data.append('disability',`${this.state.disability}`);
        data.append('location',`${this.state.location}`);
        data.append('description',`${this.state.description}`);
        data.append('status',`${this.state.status}`);
        data.append('age',`${this.state.age}`);
        data.append('post_By',`${this.props.user.name}`);
        data.append('mobile',`${this.props.user.cell}`);
        console.log("Component Data: ", data);
        this.props.registerMissingPerson(data);
    //     axios.post(`${EndPoint}/registerMissingPerson`, data, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     }).then(res => {
    //         console.log("The Response", res.data);
    //         Toast.show({
    //           text: "Successfully Uploaded",
    //           type: "success",
    //           duration: 3000
    //         });
    //         this.props.addPerson(userDatadata);
    //         // this.props.getHomeStories();
    //         console.log(res.data.output);
    //         this.props.getNotifications(res.data.output);
    //         this.props.navigation.navigate('Homes');
    //       }).catch(err => {
    //         this.setState({loader:false});
    //           console.log("ERROR", err)
    //           Toast.show({
    //             text: "Error Occoured",
    //             type: "error",
    //             duration: 3000
    //           });
    //       });
    }
  };

  

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    const {appColor} = this.state;
    const { navigation } = this.props;
    let bgClr= this.state.bgClr;
    const statusBarClr = '#E6DBDD';
    let logoImg = '../../media/finalLogoPink.png';


    //my styling code lines are here..
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
        <StatusBar backgroundColor={statusBarClr} barStyle="dark-content" />
        <View style={[styles.header,{ backgroundColor: appColor}]}>
          {/* <Icon
            onPress={() => navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          /> */}
           <Text></Text>
            <Text style={styles.heading}>Report a Person</Text>
           <Text></Text>
            </View>
            <Content style={{backgroundColor: bgClr, paddingLeft: 20, paddingRight:20,}}>
              <View style={{marginTop: 8}}><Text style={{color:'#9C9499'}}>Please fillout the following form carefully!</Text></View>
              <View style={{marginTop: 12, borderWidth: 1, borderColor: '#9C9499', padding: 4}}>
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
                  value="MISSING"
                  />
                <Picker.Item
                  label="FOUND"
                  value="FOUND"
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
                <Picker.Item label="SELECT GENDER" value="SELECT GENDER" />
                <Picker.Item label="MALE" value="MALE" />
                <Picker.Item label="FEMALE" value="FEMALE" />
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
            <Item style={{backgroundColor:bgClr}}>

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
              <View style={styles.inputViewStyle}>
            {this.state.loader ? (
              <Button full style={[styles.submitBtn,{ backgroundColor: appColor, color: bgClr, borderRadius: 20}]}>
                <Spinner color={bgClr} />
              </Button>
            ) : (
              <Button full style={[styles.submitBtn,{ backgroundColor: appColor, borderRadius:20}]} onPress={this.onSubmit}>
                <Text style={{color: bgClr, fontWeight:'bold'}}>Submit & Post</Text>
              </Button>
            )}
          </View>
            </Content>



          {/* <View style={styles.inputViewStyle}>
          <Item regular style={{borderColor: appColor, paddingHorizontal: 5}} >
              <Icon
                style={{color: appColor}}
                active
                name="person"
              />
              <Input
                name="Name"
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="Name"
                value={this.state.name}
                onChangeText={name => this.setState({ name: name.toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ') })}
                />
            </Item>
           

            {/* <FloatingLabelInput
              label="Name"
              value={this.state.name}
              onChangeText={name => this.setState({ name: name.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ') })}
            /> *
              </View>*


          <View style={styles.inputViewStyle}>
          <Item regular style={{borderColor: appColor, paddingHorizontal: 5}} >
              <Icon
                style={{color: appColor}}
                // type="MaterialCommunityIcons"
                active
                name="globe"
              />
              <Input
                name="Location"
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="Location"
                value={this.state.location}
                onChangeText={location => this.setState({ location: location.toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ') })}
                  />
            </Item>

                  </View>
 */}


            {/* <FloatingLabelInput
            style={{color: 'white'}}
              label="Location"
              value={this.state.location}
              onChangeText={location => this.setState({ location: location.toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ') })}
                /> */}

          {/* <View style={styles.inputViewStyle}>
          <Item regular style={{borderColor: appColor, paddingHorizontal: 5}} >
              <Icon
                style={{color: appColor}}
                type="MaterialCommunityIcons"
                active
                name="note"
              />
              <Input
                name="Description"
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="Description"
                value={this.state.description}
                onChangeText={description =>
                  this.setState({ description: description })
                }
                    />
            </Item>
            </View> */}


            {/* <FloatingLabelInput
              label="Description"
              value={this.state.description}
              onChangeText={description =>
                this.setState({ description: description })
              }
              /> */}



      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    loader: state.missingPersons.loader,
    userStatus: state.userReducer.userStatus,
    clr: state.colorReducer.color,
    user: state.userReducer.user,
    registerMissingPersonStatus: state.missingPersons.registerMissingPersonStatus,
  };
};

export default connect(
  mapStateToProps,
  { 
    addPerson,
    getHomeStories,
    getNotifications,
    registerMissingPerson,
    resetRegisterMissingPersonStatus
  }
)(AddForm);