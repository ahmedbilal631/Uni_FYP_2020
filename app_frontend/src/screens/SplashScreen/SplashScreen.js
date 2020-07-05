import React, { Component } from 'react';
import { View,ImageBackground,StatusBar,StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/UserActions';


class SplashScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loader:true
    }
  }
  

  componentDidMount = () => {
    this.props.getUser();
  };
  
  componentWillReceiveProps(newProp) {
    console.log('cwrps',newProp);
    if(newProp.checkLogin == "change"){

      if(newProp.user.name){
        this.props.navigation.navigate("Tabs")
      }
      else{
        this.props.navigation.navigate("NonAuth")
      }

    }
   }
  render() {
    return (
      <View style={styles.imageContainer}>
      <StatusBar backgroundColor="#05CE1D" barStyle="light-content" />
      <ImageBackground style={styles.image} source={require('../../media/splashScreen.png')} >
      
       
       <Spinner color="white" style={{position: 'absolute', bottom:'20%',textAlign:'center',left:'50%'}}  />

      
       
      </ImageBackground>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1,
    width:'100%'
  }
});

const mapStateToProps = (state) => {
  
  console.log('state checkLogin',state.userReducer.checkLogin);

  return {
    user:state.userReducer.user,
    checkLogin:state.userReducer.checkLogin
  }

}

export default connect(mapStateToProps,{getUser})(SplashScreen);