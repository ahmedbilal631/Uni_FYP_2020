import React, { Component } from 'react';
import './WCStyle.css';
import Logo_White from '../../media/teal_white.png';

import {Link} from 'react-router-dom';

class WelCome extends Component {
    render() {
        return (
            <div className='myWCBody'>
                this is welcome screen.
                <div className="myMarginAdjustment row "></div>
                <div className="row">
                <div className="myFlexAdjustment">
                <div className="myWCContainer container">
                    <div className="myLogoAdjustment">
                        <img src={Logo_White} className="responsive-img" alt="Let's Find"/>
                    </div>
                    <p className="myWCTitle">
                        Welcome to Let's Find!
                    </p>
                    <p className="myWCStatementArea">
                    You are welcome to Lets Find platform. We are present here to help you always. 
            Lets find is a platform, where you can find your lost persons. This app can help you a lot in tracing your lost ones.
                    </p>
                    <div className="myBtnArea">
                        <Link to='/signin'>
                        <button className='btn' style={{fontWeight: 'bold', borderRadius:'50px'}}>GET START NOW</button>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
                <div className="row"></div>
                
            </div>
        )
    }
}

export default WelCome;