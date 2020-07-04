import React, { Component } from 'react';

//here the redux setup is imported and setted
import store from './redux/store';
import { Provider } from 'react-redux';

//here the other components will be imported
import MainApp from './components/mainApp';

export default class App extends Component {
     
  render() {
    return (
      <Provider store={store}>
        <MainApp />
     </Provider>
    );
  }
}
