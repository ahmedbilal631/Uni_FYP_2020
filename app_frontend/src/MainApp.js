import React, { Component } from "react";
import { Container } from "native-base";
import SplashScreen from './screens/SplashScreen/SplashScreen';
import Setup from "./navigation-setup/Setup";
import { PermissionsAndroid } from "react-native";


//redux 
import { getHomeStories } from './redux/actions/missingPersonAction';

import { getStartColorFromStorage } from './redux/actions/colorActions';
import { connect } from 'react-redux';




class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SplashScreens: true
    };
  }

  componentDidMount() {

    this.props.getHomeStories();
    this.props.getStartColorFromStorage();
    // setTimeout(() => {
    //   this.setState({ SplashScreens: false });
    // }, 1500);

    this.requestPermission();
  }


  async requestPermission() {
    let per = [];
    per.push(PermissionsAndroid.PERMISSIONS.CAMERA);
    per.push(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    try {
      const granted = await PermissionsAndroid.requestMultiple(per)
        .then(res => {
          console.log("Result" , res);
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.warn(err);
    }
  }

  



  render() {
    const { SplashScreens } = this.state;
    return (
      <Container>
        {/* {SplashScreens ?
        <SplashScreen/>
        : */}
        <Setup />
        {/* } */}
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  
  // console.log('state',state.userReducer.user);

  return {user:state.userReducer.user}

}

export default connect(mapStateToProps,{getStartColorFromStorage,getHomeStories})(MainApp);