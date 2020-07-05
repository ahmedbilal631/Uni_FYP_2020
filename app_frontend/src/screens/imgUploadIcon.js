import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput,Dimensions, } from 'react-native';
// import { Col, Row, Grid } from "react-native-easy-grid";
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
//  } from 'react-native-responsive-screen';
//  import {getStartUserLogin} from '../../redux/actions/UserActions';
import {connect} from 'react-redux';

// import MainApp from './src/MainApp';
// import { Root } from "native-base";
// import store from './src/redux/store';
// import { Provider } from 'react-redux';
// import Add from './src/screens/signup';
// import Aboutus from './src/screens/login';

class DisplayLogo extends Component {

  state ={
    appColor: '',
    themeClr: 'light',
    bgClr: '#fefbfb',
    getWidth: 400,
    logoClr : 'pink',
  }

  //....................................

  //Component did mount is here
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
    // Dimensions.addEventListener('change', this.getOrientation);
  }

  //.....................................
  
  //orientation control
//   getOrientation = () => {
//     this.setState({getWidth: Dimensions.get('screen').width})
//   }

//........................................

  //Self defined functions
  // LogoChooser =()=>{
  //   this.setState({logoClr: this.state.logoClr == 'pink'? 'green' : 'pink',
  //   myLogoPath: this.state.logoClr == 'pink'? '../../media/purifiedLogoPink.png': '../../media/finalLogoGreen.png',
  // }); 
  // }

//..............................................
  
  render() {

  //.................................................

  //Logo image path is here
  const myIconPinkPath = './media/uploadImgPink.png';
  const myIconGreenPath = './media/uploadImgGreen.png';

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
  // const myLogCmd = { flex: 1,flexDirection:'row', JustifyContent: 'center',};
  //............................
  // const myFormStyle = { flex: 1,  JustifyContent: 'center',};
  //............................
  // const myTxtItem = {flexGrow: 1,  justifyContent: 'center', flexDirection: 'row',borderBottomColor: logoClr == 'darkPink' || 'darkGreen'? 'white': 'black' , borderBottomWidth: 2 };
  //............................



    return (
      <View style={myViewCenter}>
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
      /> */}
      </View>
    )}}
const mapStateToProps = state => {
  return {
    // loginLoader: state.userReducer.loginLoader,
    clr: state.colorReducer.color,
  };
};

export default connect(mapStateToProps)(DisplayLogo);