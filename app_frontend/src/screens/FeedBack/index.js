import React, { Component } from "react";
import { StatusBar } from "react-native";
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
  Input,
  Textarea,
  Header,
  Icon,
  Title,
  Body,
  Picker,
  Label,
  Toast,
  Spinner
} from "native-base";
import ImagePicker from "react-native-image-picker";
import uploadimageIconPink from "../../media/uploadImgPink.png";
import uploadimageIconGreen from "../../media/uploadImgGreen.png";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/missingPersonAction";
import styles from "./style";
import FloatingLabelInput from "../AddForm/floatingLabelInput";

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
      name: 
      "",
      gender: "",
      // disability: "",
      subject: "",
      location: "",
      description: "",
      status: "Issue",
      age: "",
      image: '',
      imagePink: uploadimageIconPink, 
      imageGreen: uploadimageIconGreen, 
      value: "",
      loader: false,
      MistabBtnCls: styles.tabBtnColored,
      FndtabBtnCls: styles.tabBtn,
      appColor:'#fe3562',
      //myStates
      appLogoClr: 'pink',
      themeClr: 'light',
      bgClr: '#fefbfb',
      logoClr : 'pink',
      ///////////
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

  componentWillReceiveProps(nextProps){
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
        const source = { uri: response.uri };

        this.setState({
          image: source
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

  SubjectHandler(value) {
    this.setState({
      subject: value
    });
  }

  onSubmit = () => {
  
      this.setState({ loader: true });

     
        
      setTimeout(() => {
        Toast.show({
          text: "Successfully Submited",
          type: "success",
          duration: 3000
        });
        this.setState({ loader: false });
        this.props.navigation.navigate("Homes");
      }, 1000);
      
     
    }


  openDrawer = () => {
    this.props.navigation.openDrawer();
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





  render() {
    console.log("============from render========================");

    const { navigation } = this.props;
    const {appColor} = this.state;
    // const { navigation } = this.props;
    let bgClr= this.state.bgClr;
    const statusBarClr = '#E6DBDD';

    //my styling code lines are here..
    const myTxtItem = {flexGrow: 1,  justifyContent: 'center', flexDirection: 'row',borderBottomColor: bgClr == '#fefbfb'?'black':'white', borderBottomWidth: 2 };
    //............................
    const myLable = {
      // marginLeft: 3,
      fontWeight: 'bold',
      marginBottom:7,
      color: appColor,
    }
    //.............................
    return (
      <Container>
        <StatusBar backgroundColor={statusBarClr} barStyle="dark-content" />
        <View style={[styles.header,{ backgroundColor: appColor, }]}>
          <Icon
            onPress={() => navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>FeedBack</Text>
         
         <Text></Text>
         
        </View>

        <Content style={{backgroundColor: bgClr}}> 
          {/* <View style={styles.btnViewStyle}>
            <Left>
              <Button
                bordered
                // borderColor={appColor}
                success
                style={[this.state.MistabBtnCls]}
                onPress={() =>
                  this.setState({
                    status: "Issue",
                    MistabBtnCls: this.tabBtnColored,
                    FndtabBtnCls: this.tabBtn
                  })
                }
              >
                {this.state.MistabBtnCls == this.tabBtn ? (
                  <Text style={styles.tab}>Issues</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Issues</Text>
                )}
              </Button>
            </Left>
            <Right>
              <Button
                bordered
                onPress={() =>
                  this.setState({
                    status: "Suggestion",
                    FndtabBtnCls: this.tabBtnColored,
                    MistabBtnCls: this.tabBtn
                  })
                }
                success
                style={this.state.FndtabBtnCls}
              >
                {this.state.FndtabBtnCls == this.tabBtn ? (
                  <Text style={styles.tab}>Suggestions</Text>
                ) : (
                  <Text style={styles.tabwithClr}>Suggestions</Text>
                )}
              </Button>
            </Right>
          </View> */}

          <View style={{backgroundColor: bgClr}}>
          <View style={styles.inputViewStyle}>
            
            {/* my inserted code */}

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
                placeholder="ADDRESS"
              />
            </Item>


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
                placeholder={'Subject'}
                style={{ borderRadius: 20, paddingRight: 100, color:appColor }}
                selectedValue={this.state.subject}
                onValueChange={this.SubjectHandler.bind(this)}
                >
                {/* <Picker.Item
                // style={{color:appColor}}
                  label="Subject"
                  value="Subject"
                  /> */}
                <Picker.Item
                  label="ISSUES"
                  value="ISSUES"
                  />
                <Picker.Item
                  label="SUGGESTIONS"
                  value="SUGGESTIONS"
                  />
                <Picker.Item label="OTHER" value="OTHER" />
              </Picker>
            </Item>


            <Item style={styles.phonenumberWrapper}>
              {/* <Label style={myLable}>Description:-</Label> */}
                <Textarea
                rowSpan={5}
                placeholder="Write your message here, and give us some details, so that we can take better step to improve our system. Thank You!!"
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
          </View>


            {/* <FloatingLabelInput
              label="Description"
              value={this.state.description}
              onChangeText={description =>
                this.setState({ description: description })
              }
            /> */}
          </View>

          <View style={{backgroundColor:bgClr}}>
          <Button style={
            styles.imageInputStyle,{
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
              borderWidth: 0,
              shadowOffset: { height: 0, width: 0 },
              shadowOpacity: 0,
              elevation: 0,

            }} onPress={this.uploadImage}>
            <View style={{ width: "100%", marginVertical: 20 }}>
            <Text style={styles.uploadTextStyle, {
                    textAlign: "left",
                    fontSize: 18,
                    marginVertical: 20,
                    alignSelf: "center",
                    color:appColor,
                    fontWeight:"bold"
              }}>Upload ScreenShot if any!</Text>
              <View style={styles.bottomStyle}>
                {this.state.image == '' ? (
                  <Thumbnail
                    style={styles.bottomImageStyle}
                    source={this.state.logoClr == 'pink' ? this.state.imagePink: this.state.imageGreen}
                  />
                 ) : (
                  <Thumbnail
                    style={styles.bottomFullImg}
                    source={this.state.image}
                  />
                )} 
              </View>
            </View>
          </Button>
          </View>
          <View style={styles.inputViewStyle}>
            {this.state.loader ? (
              <Button style={styles.submitBtn} onPress={this.onSubmit}>
                <Spinner color={bgClr} />
              </Button>
            ) : (
              <Button full
               style={[styles.submitBtn,{ backgroundColor:appColor, borderRadius: 20,}]} onPress={this.onSubmit}>
                <Text style={{color: bgClr,fontWeight:'bold'}}>Submit</Text>
              </Button>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus,
    clr: state.colorReducer.color,
  };
};
export default connect(
  mapStateToProps,
  { addPerson }
)(AddForm);
