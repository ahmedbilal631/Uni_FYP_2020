import React, { Component } from 'react'
import SignUp from './Authentication/signUp';
// import NavBar from './Header/NavBar/navBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from '../routes/index';



class MainApp extends Component {
    render() {
        return (
            <div style={{height: 100}} >
                {/* <NavBar /> */}
                <Routes />
                <ToastContainer />
                {/* <SignUp /> */}
            </div>
        )
    }
}

export default MainApp;