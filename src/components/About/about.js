import React, { Component } from 'react';
import './aboutStyle.css';

import NavBar from '../Header/NavBar/navBar';
import Footer from '../Footer/Sub_Footer/index';

import Logo_White from '../../media/logo_white.png';
import Dummy_Pic from '../../media/dummy_profile.jpg';
import FB_Logo from '../../media/icons/facebook_icon.png';
import MAIL_Logo from '../../media/icons/gmail_icon.png';
import TWT_Logo from '../../media/icons/twitterX1_icon.png';
import WTAP_Logo from '../../media/icons/whatsapp_icon.png';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className='myAboutBody'>
                <NavBar />
                <div className="myMarginAdjustment row "></div>
                <div className="row">
                <div className="myFlexAdjustment">
                <div className="myWCContainer container">
                    <div className="myLogoAdjustment">
                        <img src={Logo_White} className="responsive-img" alt="Let's Find"/>
                    </div>
                    <p className="myWCTitle">
                        Know more about Let's Find!
                    </p>
                    <p className="myWCStatementArea">
                        Lets find is a platform, where you can find your lost persons. This app can help you a lot in tracing your lost ones.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis incidunt similique aspernatur rem id quo architecto voluptate velit dolor, earum tempora deleniti, exercitationem quod animi nemo cumque et praesentium aperiam.
                    </p>
                    <div className="myBuildersCanvas">
                        <p className="myCreditHeading">Feel free to contact us</p>
                        <div className="myBuildersCards row">

                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                          <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s3">
                                     <img src={FB_Logo} alt="card pic"  className="circle responsive-img" />
                                 </div>
                                 <div className="col s3">
                                     <img src={TWT_Logo} alt="card pic"  className="circle responsive-img" />
                                 </div>
                                 <div className="col s3">
                                     <img src={MAIL_Logo} alt="card pic"  className="circle responsive-img" />
                                 </div>
                                 <div className="col s3">
                                     <img src={WTAP_Logo} alt="card pic"  className="circle responsive-img" />
                                 </div>
                         </div>
                        </div>
                        </div>


                            </div></div>
                            


                        <div className="myBuildersCanvas">
                        <p className="myCreditHeading">Credits</p>
                        <div className="myBuildersCards row">





                        <div className="col s12 m8 offset-m2 l6 offset-l3">
                          <div className="card-panel grey lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                <div className="col s4">
                                     <img src={Dummy_Pic} alt="card pic"  className="circle responsive-img" />
                                 </div>
                                    <div className="col s8">
                                <span className="black-text">
                                    <p className="myBuilderName">Dr Abdul Qadeer Khan</p>
                                    <p className="myBuilderDetails">
                                This is a square image. Add the "circle" class to it to make it appear circular.
                                    </p>
                                </span>
                              </div>
                         </div>
                        </div>
                        </div>
 
                        </div>

                        <div className="myBuildersCards row">
                            
                            <div className="col s12 m8 offset-m2 l6 offset-l3">
                              <div className="card-panel grey lighten-5 z-depth-1">
                                <div className="row valign-wrapper">
                                    <div className="col s4">
                                         <img src={Dummy_Pic} alt="card pic"  className="circle responsive-img" />
                                     </div>
                                        <div className="col s8">
                                    <span className="black-text">
                                        <p className="myBuilderName">Dr Abdul Qadeer Khan</p>
                                        <p className="myBuilderDetails">
                                    This is a square image. Add the "circle" class to it to make it appear circular.
                                        </p>
                                    </span>
                                  </div>
                             </div>
                            </div>
                            </div>
     
                            </div>

                        here is the builders cards
                    </div>
                    <div className="myBtnArea">
                        <Link to='/'>
                        <button className='btn'>Back</button>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
                <div className="row"></div>
                <Footer />
            </div>
        )
    }
}

export default About;