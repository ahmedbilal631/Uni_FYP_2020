import React, {Component} from 'react';
import {getStartUserLogin} from '../../redux/actions/UserActions';
import {connect} from 'react-redux';
import {StatusBar, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import DisplayLogo from '../../DisplayLogo';
// import { Col, Row, Grid } from "react-native-easy-grid";

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

import styles from './style';

class LoginScreen extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      email: '',
      password: '',
      loader: false,
      appColor: '',
      appLogoClr: 'pink',
      themeClr: 'light',
      bgClr: '#fefbfb',
      orientation: '',
      myHeight: 150,
      myWidth: '',
      imgWidth: '75%',
      imgHeight: 150
    };
  }

  getOrientation = () => {
    if (Dimensions.get('window').width < Dimensions.get('window').height) {
      this.setState({ orientation: 'portrait', myHeight: Dimensions.get('screen').height,
    myWidth: Dimensions.get('screen').width
    });
    } else { this.setState({ orientation: 'landscape', myHeight: Dimensions.get('screen').height,
    myWidth: Dimensions.get('screen').width }); }
    // this.changeOrientation();
  };
  changeOrientation =()=>{
    const {myWidth, myHeight} = this.state
    if(myWidth > myHeight){
      this.setState({
        // imgWidth: '75%',
        imgHeight: 200
      }) 
    }
  }


  componentWillReceiveProps(nextProps) {
    this.setState({loader: false, appColor: nextProps.clr});
    if (nextProps.loginLoader == 'move') {
      this.props.navigation.navigate('Tabs');
    }
  }

  componentDidMount() {

    this.setState({appColor: this.props.clr,
       myHeight: Dimensions.get('screen').height, myWidth: Dimensions.get('screen').width});
    if(this.props.clr == '#009700'){
      this.setState({appLogoClr: 'green'});
    }
    else if(this.props.clr == "#fe3563"){
      this.setState({themeClr: 'darkPink', bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
    }
    // Dimensions.addEventListener('change', this.getOrientation);
    // this.changeOrientation();
  }

  // componentWillUnMount() {
  //   rol();
  // }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

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

  render() {
    const {loader, appColor} = this.state;
    let bgClr= this.state.bgClr;
    const statusBarClr = '#E6DBDD';
    let logoImg = '../../media/purifiedLogo.png';
    if(this.state.appColor = "#fe3562"){
      // bgClr = '#fefbfb';
      // bgClr = '#272324';

    }

    // const {width, height} = Dimensions.get('screen');
    const {imgWidth, imgHeight} = this.state;
    
    let imgStyle = {
      width: '75%', 
      height: imgHeight,  
      zIndex: 1, 
      marginTop: '5%',
      flex: 1,
      justifyContent:'center',
    }

    return (
      // <ScrollView style={{backgroundColor: '#fefbfb'}}>
      <ScrollView style={{backgroundColor: bgClr }}> 
        <StatusBar backgroundColor={statusBarClr} barStyle="dark-content" />  
        {/* <View style={{paddingBottom: 0}}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={{ marginLeft: 5, fontWeight: "bold", color: "white" }}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />
        </View> */}

        {/* <Content contentContainerStyle={styles.loginContainer}> */}
        <Content >
          <View>
            <DisplayLogo />
          </View>



          {/* <View style={styles.viewStyle}> */}
          {/* <View >
            {this.state.themeClr == 'light'? this.state.appLogoClr == 'green'?
            <Image
            source={require('../../media/finalLogoGreen.png')}
            style={{width: '75%', height: 150, zIndex: 1, marginTop: '5%'}}
          />
          :
          <DisplayLogo />
        //   <Image
        //   source={require(logoImg)}
        //   // stye={imgHeight == 200? {height: 200, width: '75%'}: {height: 150, width: '75%'}}
        //   style={{width: '75%', height: 150,  zIndex: 1, marginTop: '5%', flex: 1,justifyContent:'center',}}
        // />
        : this.state.themeClr == 'darkGreen'?
          <Image
            source={require('../../media/finalLogoWhiteGreen.png')}
            style={{width: '75%', height: 150, zIndex: 1, marginTop: '5%'}}
          />
          :
          <Image
              source={require('../../media/finalLogoWhitePink.png')}
              style={{width: '75%', height: 150, zIndex: 1, marginTop: '5%'}}
          />

          }
          
        {/* <Text style={styles.inputStyle, {color: appColor}}>Find {height + 'X' + width}</Text> *
         <Text style={styles.inputStyle, {color: appColor}}>Find {imgHeight + 'MY' + imgWidth}</Text>
        <Text style={styles.inputStyle, {color: appColor}}>{this.state.orientation}</Text>
          </View> */}




          <View style={styles.viewDirection}>
            <Text style={styles.loginStyle, {color: appColor,fontSize: 19, fontWeight: "bold"}}>Login</Text>
            <Text style={styles.barStyle,{color: '#9C9495',paddingHorizontal: 15, fontWeight: 'bold', fontSize: 19 }}>|</Text>
            <Text
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={styles.signUpStyle, {color: '#9C9495', fontWeight: 'bold', fontSize: 19 }}>
              Signup
            </Text>
          </View>

          <Form style={styles.formStyle}>
            <Item style={styles.itemStyle} >
              <Icon
                style={styles.inputStyle, {color: appColor}}
                active
                name="mail"
          
              />
              <Input
                name="email"
                onChangeText={event =>
                  this.setState({email: event.toLowerCase(), appColor: this.props.clr})
                }
                placeholderTextColor={appColor}
                style={styles.inputStyle, {color: appColor}}
                placeholder="Email"
              />
            </Item>

            <Item style={styles.itemStyle} >
              <Icon
                style={styles.inputStyle, {color: appColor}}
                active
                name="eye"
          
              />
              <Input
                name="password"
                onChangeText={event => this.setState({password: event, appColor: this.props.clr})}
                secureTextEntry={true}
                placeholderTextColor={appColor}
                style={styles.inputStyle, {color:appColor}}
                placeholder="Password"
              />
            </Item>

            <Text style={styles.forgetStyle,{color: appColor, textAlign:"right", marginTop: '2%'}}>Forgot Password?</Text>

            {loader ? (
              <Button
                full
                rounded
                type="submit"
                style={{marginVertical: 20, backgroundColor: appColor, color: bgClr}}
                onPress={this.onSubmit}>
                <Spinner color={bgClr} />
              </Button>
            ) : (
              <Button
                full
                // rounded
                type="submit"
                style={{marginVertical: 20, backgroundColor: appColor, color:bgClr}}
                onPress={this.onSubmit}>
                <Text style={{color: bgClr, fontWeight: 'bold'}}>LOGIN</Text>
              </Button>
            )}
          </Form>

          <View style={styles.viewAccount}>
            <Text
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={styles.loginStyle, {color: '#9C9495', fontSize: 15, fontWeight: 'bold'}}>
              Don't have an Account?Signup
            </Text>
          </View>

          <View style={styles.viewAccount}>
            <Text
              onPress={() => this.props.navigation.navigate('Homes')}
              style={styles.loginStyle, {color: appColor}}>
              Direct
            </Text>
          </View>

          {/* <Text style={{color: '#fff', textAlign: 'center'}}>
            ------------ or ------------
          </Text> */}

          {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}> */}
            {/* <View style={styles.socialIconG}>
              <Icon
                style={{ alignSelf: "center", marginTop: 10, color: "white" }}
                type="Entypo"
                name="facebook"
              />
            </View>
            <View style={styles.socialIconG}>
              <Icon
                style={{
                  alignSelf: "center",
                  marginTop: 9,
                  color: "white",
                  fontSize: 30
                }}
                type="FontAwesome5"
                name="google-plus-square"
              />
            </View> */}
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('azure')}>
             
              <Icon
                style={{alignSelf: 'center', marginTop: 10, color: 'white'}}
                type="FontAwesome5"
                name="microsoft"
              />
           
            </TouchableOpacity> */}


          {/* </View> */}
        </Content>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginLoader: state.userReducer.loginLoader,
    clr: state.colorReducer.color,
  };
};

export default connect(mapStateToProps, {getStartUserLogin})(LoginScreen);
