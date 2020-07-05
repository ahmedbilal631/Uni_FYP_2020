import React, { Component } from "react";
import { connect } from "react-redux";
import {StatusBar, ImageBackground, Image, Dimensions, ScrollView } from "react-native";
// import DisplayLogo from '../../DisplayLogo';

import {
  Text,
  Content,
  Item,
  Input,
  Form,
  Icon,
  View,
  Button,
  CheckBox,
  Spinner,
  Toast
} from "native-base";
//import actions
import { registerUser } from "../../redux/actions/UserActions";
import DisplayLogo from '../../DisplayLogo';

// import styles from "./style";

class SignUpScreen extends Component {

///here is my constructor

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      cell: "",
      loader: false,
      appColor: '',
      themeClr: 'light',
      bgClr: '#fefbfb',
      getWidth: 400,
      logoClr : 'pink',
    };
  }

  //........................................

   validateEmail=(email)=> {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

 //...........................................

//here the component will recieve props

  componentWillReceiveProps(nextProps) {
    this.setState({ loader: false, appColor: nextProps.clr });
    if (nextProps.registerLoader == "success") {
      this.props.navigation.navigate("Login");
    }

    console.log("full state", this.state);
  }

  //.............................................

//here is the component did mount method

componentDidMount() {
  this.setState({appColor: this.props.clr, getWidth: Dimensions.get('screen').width})
  if(this.props.clr == '#009700'){
    this.setState({logoClr: 'green'});
  }
  else if(this.props.clr == "#fe3563"){
    this.setState({logoClr: 'darkPink', bgClr: '#272324'})
  }
  else if(this.props.clr == "#009701"){
    this.setState({logoClr: 'darkGreen', bgClr: '#272324'})
  } 
  Dimensions.addEventListener('change', this.getOrientation);
}

  //................................................

  //orientation control method is here

  getOrientation = () => {
    this.setState({getWidth: Dimensions.get('screen').width})
  }

  //.................................................

//submit method is here

  onSubmit = () => {
    if (this.state.username == "") {
      Toast.show({
        text: "Please provide a username",
        type: "error",
        duration: 3000
      });
    } else if (
      this.state.email == "" ||
      !this.validateEmail(this.state.email)
    ) {
      Toast.show({
        text: "Please Provide a valid Email address",
        type: "error",
        duration: 3000
      });
    } else if (this.state.cell == "") {
      Toast.show({
        text: "Please provide your valid Phone Number",
        type: "error",
        duration: 3000
      });
    } else if (this.state.password == "") {
      Toast.show({
        text: "Please Set a Password",
        type: "error",
        duration: 3000
      });
    } else {
      this.setState({ loader: true });
      let data = {
        user: {
          name: this.state.username,
          email: this.state.email,
          password: this.state.password,
          cell: this.state.cell
        }
      };

      this.props.registerUser(data);
    }
  };

  //..................................

    //exact logo chooser method is here

    LogoChooser =()=>{
      this.setState({logoClr: this.state.logoClr == 'pink'? 'green' : 'pink',
      myLogoPath: this.state.logoClr == 'pink'? '../../media/purifiedLogoPink.png': '../../media/finalLogoGreen.png',
    }); 
    }
  
  //..............................................

  render() {

     //Logo image path is here
  const myLogoPinkLightPath = '../../media/purifiedLogoPink.png'  ;
  const myLogoPinkDarkPath = '../../media/finalLogoWhitePink.png'  ;
  const myLogoGreenLightPath = '../../media/finalLogoGreen.png' ;
  const myLogoGreenDarkPath = '../../media/finalLogoWhiteGreen.png' ;
  // let myLogoPath = this.state.logoClr === 'pink'?'../../media/purifiedLogoPink.png' : '../../media/finalLogoGreen.png';
    const {logoClr, loader, appColor, bgClr, getWidth} = this.state;
    // const {} = this.state;

  //dimensions work is here
  const getHeight = Dimensions.get('screen').height;
  // const getWidth = Dimensions.get('screen').width;

  // ................................................

  //Styling 
  //....Globle center view style.......
  const myViewCenter = { flex: 1,flexDirection:'row', JustifyContent: 'center',   padding: '10%'};
  //..........................
  const logoStyle = {width: getWidth >= 600? '10%':'75%', height: getWidth >=600? getWidth >= 950?230:150:90,
  flexGrow: 1, justifyContent: 'center', alignSelf:'center'};
  //............................
  const myLogCmd = { flex: 1,flexDirection:'row', JustifyContent: 'center',};
  //............................
  const myFormStyle = { flex: 1,  JustifyContent: 'center',};
  //............................
  const myTxtItem = {flexGrow: 1,  justifyContent: 'center', flexDirection: 'row',borderBottomColor: bgClr == '#fefbfb'?'black':'white', borderBottomWidth: 2 };
  //............................


  //old code is here.......................
    // const { loader, appColor } = this.state;
    // //  console.log('props from comp',loader);
    // let statusBarClr = '#E6DBDD';
    // let logoImg = '../../media/finalLogoPink.png';
    // let bgClr= this.state.bgClr;
    //.....................................

    return (

        <ScrollView style={{backgroundColor: bgClr }}> 
        <StatusBar backgroundColor={appColor} barStyle="light-content" />
        {/* <View>
        <Text>Hello: height: {getHeight} ...... Width: {getWidth} bgClr = {bgClr}</Text>
        <Text>LogoClr: {this.state.logoClr}</Text>
        </View> */}
        {/* <View style={myViewCenter}>
            {
              logoClr == 'pink'?
              <Image
              source={require(myLogoPinkLightPath)}
              style={logoStyle}
              />
              :
              logoClr =='darkPink'?
              <Image
              source={require(myLogoPinkDarkPath)}
              style={logoStyle}
              />
              :
              logoClr == 'darkGreen'?
              <Image
              source={require(myLogoGreenDarkPath)}
              style={logoStyle}
              />
              :
              <Image
              source={require(myLogoGreenLightPath)}
              style={logoStyle}
              />
            }
            {/* <Image
            source={require(myLogoPath)}
            style={logoStyle}
            /> *
            </View> */}
            <DisplayLogo />
            <View style={myLogCmd}>
            <View style={{flexGrow: 1,  justifyContent: 'center', flexDirection: 'row', }}>
             <Text style={{color: '#9C9495', fontWeight: 'bold', fontSize: 19 }} onPress={() => this.props.navigation.navigate("Login")}>Login</Text>
             <Text style={{color: '#9C9495',paddingHorizontal: 15, fontWeight: 'bold', fontSize: 19 }}>|</Text>
             <Text
              // onPress={() => this.props.navigation.navigate('SignUp')}
               style={{color: appColor, fontSize: 19, fontWeight: "bold", }}>
              Signup
            </Text>
              </View>
          </View>

          <View style={{paddingHorizontal: '5%', marginVertical: '6%',}}>
          <Form style={myFormStyle}>
          <Item style={myTxtItem}>
              <Icon
                type="AntDesign"
                active
                name="user"
                style={{color: appColor}}
              />
              <Input
                onChangeText={event =>
                  this.setState({
                    username: event.toLowerCase()
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')
                  })
                }
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="User Name"
              />
            </Item>

             <Item  style={myTxtItem} >
               <Icon
                style={{color: appColor}}
                active
                name="mail"
                />
              <Input
                name="email"
                onChangeText={event =>
                  this.setState({email: event.toLowerCase(), appColor: this.props.clr})
                }
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="Email"
              />
            </Item>

            <Item style={myTxtItem} >
              <Icon
                type="AntDesign"
                active
                name="phone"
                style={{color: appColor}}
              />
              <Input
                placeholderTextColor={appColor}
                style={{color: appColor}}
                type= 'number'
                keyboardType = 'numeric'
                placeholder="Phone Number"
                onChangeText={event =>
                  this.setState({
                    cell: event
                  })
                }
              />
            </Item>

            <Item style={myTxtItem} >
              <Icon
                type="MaterialCommunityIcons"
                active
                name="textbox-password"
                style={{color: appColor}}
              />
              <Input
                secureTextEntry={true}
                placeholderTextColor={appColor}
                style={{color: appColor}}
                placeholder="Password"
                onChangeText={event =>
                  this.setState({
                    password: event
                  })
                }
              />
            </Item>

            <View style={{ flexDirection: 'row', marginVertical: 10}}>
              <CheckBox checked={true} style={{backgroundColor:appColor, borderColor:'#9C9495'}} />
              <Text style={{fontSize:12,marginLeft:14, color:appColor}}>
                | Accept Terms and Conditions, Privacy and Policy
              </Text>
            </View>

            <View>
            {loader ? (
              <Button
                full
                rounded
                type="submit"
                style={{marginVertical: 20, backgroundColor: appColor, color: bgClr, borderRadius: 20}}
                onPress={this.onSubmit}>
                <Spinner color={'white'} />
              </Button>
            ) : (
              <Button
                full
                // rounded
                type="submit"
                style={{marginVertical: 20, backgroundColor: appColor, color: bgClr, borderRadius: 20}}
                // onPress={this.onSubmit}
                onPress={this.LogoChooser}
                >
                <Text style={{color: 'white', fontWeight: 'bold'}}>SIGN UP</Text>
              </Button>
             )} 
            </View>

            </Form>
            <View style={myLogCmd}>
           <View 
            onPress={() => this.props.navigation.navigate("Login")}
           style={{flexGrow: 1,  justifyContent: 'center', flexDirection: 'row', }}>
              <Text
              onPress={() => this.props.navigation.navigate("Login")}
              style={{color: '#9C9495', fontSize: 15, fontWeight: 'bold'}}>
              Already have an Account?Login
            </Text>
          </View>
          </View>
            </View>
      </ScrollView>
    );
  }
}

mapStateToProps = state => {
  return {
    registerLoader: state.userReducer.registerLoader,
    clr: state.colorReducer.color
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUpScreen);
