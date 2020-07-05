import React, { Component } from 'react';
import MainApp from './src/MainApp';
import { Root } from "native-base";
import store from './src/redux/store';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/login/index';
// import Add from './src/screens/signup';
// import Aboutus from './src/screens/login';

export default class App extends Component {
     
  render() {
    return (
      <Root>
      <Provider store={store}>
        <MainApp />
        {/* <LoginScreen /> */}
        {/* <Aboutus/> */}
      </Provider>
      </Root>
    );
  }
}


