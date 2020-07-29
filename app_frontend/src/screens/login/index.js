import React, {Component} from 'react';
import {getStartUserLogin} from '../../redux/actions/UserActions';
import {connect} from 'react-redux';
import {StatusBar, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
// import { Col, Row, Grid } from "react-native-easy-grid";
import DisplayLogo from '../../DisplayLogo';

import {
  Text,
  Content,
  Item,
  Input,
  Form,
  Icon,
  View,
  Button,
  Spinner,
  Toast,
} from 'native-base';


class LoginScreen extends Component {
  // here the states will be defined
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loader: false,
      appColor: '',
      themeClr: 'light',
      bgClr: '#fefbfb',
      getWidth: 400,
      logoClr : 'pink',
    }
    }
//.........................................

//the lifeCycle method will recieve props
  componentWillReceiveProps(nextProps) {
    this.setState({loader: false, appColor: nextProps.clr});
    if (nextProps.loginLoader == 'move') {
      this.props.navigation.navigate('Tabs');
    }
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
    Dimensions.addEventListener('change', this.getOrientation);
    AsyncStorage.setItem('myClr', this.state.appColor);
  }

  //.....................................
  
  //orientation control
  getOrientation = () => {
    this.setState({getWidth: Dimensions.get('screen').width})
  }

  //Compoenent will unmount
  // componentWillUnmount(){
  //   alert("yes unmounted");
  // }

  //......................................

  //Email validation method is here
  validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

//.........................................

  onSubmit = () => {
    if (this.state.email == '' || !this.validateEmail(this.state.email)) {
      Toast.show({
        text: 'Please Provide a valid Email address',
        type: 'error',
        duration: 3000,
      });
    } else if (this.state.password == '') {
      Toast.show({
        text: 'Please Provide a valid Password',
        type: 'error',
        duration: 3000,
      });
    } else {
      this.setState({loader: true});

      let data = {
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      };

      this.props.getStartUserLogin(data);
    }
  };

//..........................................

  //Self defined functions
  LogoChooser =()=>{
    this.setState({logoClr: this.state.logoClr == 'pink'? 'green' : 'pink',
    myLogoPath: this.state.logoClr == 'pink'? '../../media/purifiedLogoPink.png': '../../media/finalLogoGreen.png',
  }); 
  }

//..............................................


  render(){
  //here the local variables will be written
  // const bgClr = '#FFFFF';
  // const statusBarClr = 'white';

  //.................................................

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
  return(
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
             <Text style={{color: appColor, fontSize: 19, fontWeight: "bold", }}>Login</Text>
             <Text style={{color: '#9C9495',paddingHorizontal: 15, fontWeight: 'bold', fontSize: 19 }}>|</Text>
             <Text
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{color: '#9C9495', fontWeight: 'bold', fontSize: 19 }}>
              Signup
            </Text>
              </View>
          </View>
          <View style={{paddingHorizontal: '5%', marginVertical: '6%',}}>
          <Form style={myFormStyle}>
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
                style={{color: appColor}}
                active
                name="eye"
          
              />
              <Input
                name="password"
                onChangeText={event => this.setState({password: event, appColor: this.props.clr})}
                secureTextEntry={true}
                placeholderTextColor={appColor}
                style={{color:appColor}}
                placeholder="Password"
              />
            </Item>
            <View style={{paddingRight: 5, marginTop: 8}}>
             <Text style={{color: appColor, textAlign:"right", marginTop: '2%'}}>Forget your Password?</Text>
            </View>
            <View>
            {loader ? (
              <Button
                full
                rounded
                type="submit"
                style={{marginVertical: 20, backgroundColor: appColor, color: bgClr, borderRadius: 20}}
                onPress={this.onSubmit}>
                <Spinner color={bgClr} />
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
                <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
              </Button>
             )} 
            </View>
            </Form>
          </View>
           <View style={myLogCmd}>
           <View style={{flexGrow: 1,  justifyContent: 'center', flexDirection: 'row', }}>
              <Text
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{color: '#9C9495', fontSize: 15, fontWeight: 'bold'}}>
              Don't have an Account?Signup
            </Text>
          </View>
          </View>

          {/* <View>
            <Text
              onPress={() => this.props.navigation.navigate('Homes')}
              style={{color: appColor}}>
              Direct
            </Text>
          </View> */}

          <View>
            <Text
            onPress={() => this.props.navigation.navigate('Homes')}
            >
              here the input fields will be,
            </Text>
          </View>
        </ScrollView>    
  )
} }

const mapStateToProps = state => {
  return {
    loginLoader: state.userReducer.loginLoader,
    clr: state.colorReducer.color,
  };
};
export default connect(mapStateToProps, {getStartUserLogin})(LoginScreen);


// export default LoginScreen;



// import styles from './style';

// class LoginScreen extends Component {
//   constructor(Props) {
//     super(Props);
//     this.state = {
//       email: '',
//       password: '',
//       loader: false,
//       appColor: '',
//       appLogoClr: 'pink',
//       themeClr: 'light',
//       bgClr: '#fefbfb',
//       orientation: '',
//       myHeight: 150,
//       myWidth: '',
//       imgWidth: '75%',
//       imgHeight: 150
//     };
//   }

//   getOrientation = () => {
//     if (Dimensions.get('window').width < Dimensions.get('window').height) {
//       this.setState({ orientation: 'portrait', myHeight: Dimensions.get('screen').height,
//     myWidth: Dimensions.get('screen').width
//     });
//     } else { this.setState({ orientation: 'landscape', myHeight: Dimensions.get('screen').height,
//     myWidth: Dimensions.get('screen').width }); }
//     // this.changeOrientation();
//   };
//   changeOrientation =()=>{
//     const {myWidth, myHeight} = this.state
//     if(myWidth > myHeight){
//       this.setState({
//         // imgWidth: '75%',
//         imgHeight: 200
//       }) 
//     }
//   }


//   componentWillReceiveProps(nextProps) {
//     this.setState({loader: false, appColor: nextProps.clr});
//     if (nextProps.loginLoader == 'move') {
//       this.props.navigation.navigate('Tabs');
//     }
//   }

//   componentDidMount() {

//     this.setState({appColor: this.props.clr,
//        myHeight: Dimensions.get('screen').height, myWidth: Dimensions.get('screen').width});
//     if(this.props.clr == '#009700'){
//       this.setState({appLogoClr: 'green'});
//     }
//     else if(this.props.clr == "#fe3563"){
//       this.setState({themeClr: 'darkPink', bgClr: '#272324'})
//     }
//     else if(this.props.clr == "#009701"){
//       this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
//     }
//     Dimensions.addEventListener('change', this.getOrientation);
//     this.changeOrientation();
//   }

//   // componentWillUnMount() {
//   //   rol();
//   // }

//   validateEmail = email => {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   };

//   onSubmit = () => {
//     if (this.state.email == '' || !this.validateEmail(this.state.email)) {
//       Toast.show({
//         text: 'Please Provide a valid Email address',
//         type: 'error',
//         duration: 3000,
//       });
//     } else if (this.state.password == '') {
//       Toast.show({
//         text: 'Please Provide a valid Password',
//         type: 'error',
//         duration: 3000,
//       });
//     } else {
//       this.setState({loader: true});

//       let data = {
//         user: {
//           email: this.state.email,
//           password: this.state.password,
//         },
//       };

//       this.props.getStartUserLogin(data);
//     }
//   };

//   render() {
//     const {loader, appColor} = this.state;
//     let bgClr= this.state.bgClr;
//     const statusBarClr = '#E6DBDD';
//     let logoImg = '../../media/purifiedLogo.png';
//     if(this.state.appColor = "#fe3562"){
//       // bgClr = '#fefbfb';
//       // bgClr = '#272324';

//     }

//     // const {width, height} = Dimensions.get('screen');
//     const {imgWidth, imgHeight} = this.state;
    
//     let imgStyle = {
//       width: '75%', 
//       height: imgHeight,  
//       zIndex: 1, 
//       marginTop: '5%',
//       flex: 1,
//       justifyContent:'center',
//     }

//     return (
//       // <ScrollView style={{backgroundColor: '#fefbfb'}}>
//       <ScrollView style={{backgroundColor: bgClr }}> 
//         <StatusBar backgroundColor={statusBarClr} barStyle="dark-content" />  
//         {/* <View style={{paddingBottom: 0}}>
//           <Icon
//             onPress={() => this.props.navigation.goBack()}
//             style={{ marginLeft: 5, fontWeight: "bold", color: "white" }}
//             type="MaterialCommunityIcons"
//             name="keyboard-backspace"
//           />
//         </View> */}

//         <Content contentContainerStyle={styles.loginContainer}>
//           {/* <Grid>
//             <Row></Row>
//             <Row>
//           <View style={styles.viewStyle}>
//           <Image
//           source={require(logoImg)}
//           // stye={{width: '75%', flex: 1,justifyContent:'center',}}
//           style={{width: '75%', height: 150 ,  zIndex: 1, marginTop: '5%', flex: 1,justifyContent:'center',}}
//         />
//             </View>
//             </Row>
//             <Row></Row>
//           </Grid> */}
//           <View style={styles.viewStyle}>
//             {this.state.themeClr == 'light'? this.state.appLogoClr == 'green'?
//             <Image
//             source={require('../../media/finalLogoGreen.png')}
//             style={{width: '75%', height: 150, zIndex: 1, marginTop: '5%'}}
//           />
//           :
//           <Image
//           source={require(logoImg)}
//           // stye={imgHeight == 200? {height: 200, width: '75%'}: {height: 150, width: '75%'}}
//           style={{width: '75%', height: 150,  zIndex: 1, marginTop: '5%', flex: 1,justifyContent:'center',}}
//         />
//         : this.state.themeClr == 'darkGreen'?
//           <Image
//             source={require('../../media/finalLogoWhiteGreen.png')}
//             style={{width: '75%', height: 150, zIndex: 1, marginTop: '5%'}}
//           />
//           :
//           <Image
//               source={require('../../media/finalLogoWhitePink.png')}
//               style={{width: '75%', height: 150, zIndex: 1, marginTop: '5%'}}
//           />

//           }
          
//         {/* <Text style={styles.inputStyle, {color: appColor}}>Find {height + 'X' + width}</Text> */}
//          <Text style={styles.inputStyle, {color: appColor}}>Find {imgHeight + 'MY' + imgWidth}</Text>
//         <Text style={styles.inputStyle, {color: appColor}}>{this.state.orientation}</Text>
//           </View>




//           <View style={styles.viewDirection}>
//             <Text style={styles.loginStyle, {color: appColor,fontSize: 19, fontWeight: "bold"}}>Login</Text>
//             <Text style={styles.barStyle,{color: '#9C9495',paddingHorizontal: 15, fontWeight: 'bold', fontSize: 19 }}>|</Text>
//             <Text
//               onPress={() => this.props.navigation.navigate('SignUp')}
//               style={styles.signUpStyle, {color: '#9C9495', fontWeight: 'bold', fontSize: 19 }}>
//               Signup
//             </Text>
//           </View>

//           <Form style={styles.formStyle}>
//             <Item style={styles.itemStyle} >
//               <Icon
//                 style={styles.inputStyle, {color: appColor}}
//                 active
//                 name="mail"
          
//               />
//               <Input
//                 name="email"
//                 onChangeText={event =>
//                   this.setState({email: event.toLowerCase(), appColor: this.props.clr})
//                 }
//                 placeholderTextColor={appColor}
//                 style={styles.inputStyle, {color: appColor}}
//                 placeholder="Email"
//               />
//             </Item>

//             <Item style={styles.itemStyle} >
//               <Icon
//                 style={styles.inputStyle, {color: appColor}}
//                 active
//                 name="eye"
          
//               />
//               <Input
//                 name="password"
//                 onChangeText={event => this.setState({password: event, appColor: this.props.clr})}
//                 secureTextEntry={true}
//                 placeholderTextColor={appColor}
//                 style={styles.inputStyle, {color:appColor}}
//                 placeholder="Password"
//               />
//             </Item>

//             <Text style={styles.forgetStyle,{color: appColor, textAlign:"right", marginTop: '2%'}}>Forgot Password?</Text>

//             {loader ? (
//               <Button
//                 full
//                 rounded
//                 type="submit"
//                 style={{marginVertical: 20, backgroundColor: appColor, color: bgClr}}
//                 onPress={this.onSubmit}>
//                 <Spinner color={bgClr} />
//               </Button>
//             ) : (
//               <Button
//                 full
//                 // rounded
//                 type="submit"
//                 style={{marginVertical: 20, backgroundColor: appColor, color:bgClr}}
//                 onPress={this.onSubmit}>
//                 <Text style={{color: bgClr, fontWeight: 'bold'}}>LOGIN</Text>
//               </Button>
//             )}
//           </Form>

//           <View style={styles.viewAccount}>
//             <Text
//               onPress={() => this.props.navigation.navigate('SignUp')}
//               style={styles.loginStyle, {color: '#9C9495', fontSize: 15, fontWeight: 'bold'}}>
//               Don't have an Account?Signup
//             </Text>
//           </View>

//           <View style={styles.viewAccount}>
//             <Text
//               onPress={() => this.props.navigation.navigate('Homes')}
//               style={styles.loginStyle, {color: appColor}}>
//               Direct
//             </Text>
//           </View>

//           {/* <Text style={{color: '#fff', textAlign: 'center'}}>
//             ------------ or ------------
//           </Text> */}

//           {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}> */}
//             {/* <View style={styles.socialIconG}>
//               <Icon
//                 style={{ alignSelf: "center", marginTop: 10, color: "white" }}
//                 type="Entypo"
//                 name="facebook"
//               />
//             </View>
//             <View style={styles.socialIconG}>
//               <Icon
//                 style={{
//                   alignSelf: "center",
//                   marginTop: 9,
//                   color: "white",
//                   fontSize: 30
//                 }}
//                 type="FontAwesome5"
//                 name="google-plus-square"
//               />
//             </View> */}
//             {/* <TouchableOpacity
//               onPress={() => this.props.navigation.navigate('azure')}>
             
//               <Icon
//                 style={{alignSelf: 'center', marginTop: 10, color: 'white'}}
//                 type="FontAwesome5"
//                 name="microsoft"
//               />
           
//             </TouchableOpacity> */}


//           {/* </View> */}
//         </Content>
//       </ScrollView>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     loginLoader: state.userReducer.loginLoader,
//     clr: state.colorReducer.color,
//   };
// };

// export default connect(mapStateToProps, {getStartUserLogin})(LoginScreen);
