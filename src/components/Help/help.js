import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
// import './signUpStyle.css';

import {Link} from 'react-router-dom';



class Help extends Component {


    render() {
        return (
              <div className='mX'>
                <NavBar />
                <div className="myBody">
                <div className="container ">
                <div className="myContainer">

                    <div className=" row">
                        <div className="col s12 m12 l12 xl12">
                         <p className="myFormTitle">
                              Help?
                             </p>
                             <p>
                                 Feel free to contact us for any kind of help..
                             </p>
                             <p className="center">ahmedbilal7292@gmail.com</p>
                        </div>

                        </div>
                    <div>
                    
                        <button className="myBtn btn" onClick={()=>window.history.back()}>Back</button>
                        
                    </div>
                    </div>
                    </div>
                    </div>
                    <SubFooter />
                </div>
                  
        )
    }
}

export default Help;