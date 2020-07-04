import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SubFooter from '../Sub_Footer/index';
import './footer.css';

import fb_icon from '../../../media/icons/facebook_icon.png';
import twt_icon from '../../../media/icons/twitterX1_icon.png';
import wp_icon from '../../../media/icons/whatsapp_icon.png';



class Footer extends Component {
    render() {
        return (
            <div>
         <footer className="page-footer" style={{marginBottom: '0px',backgroundColor: '#CCCCCC'}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="teal-text">Lets Find</h5>
                <p className="black-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                  <table>
                      <tbody>

                      <tr>
                          <th colSpan="2" className='mySocialIconsHeading'>Join us</th>
                      </tr>
                      <tr>
                          <td>
                          <Link className="black-text text-lighten-3" to="#fb">
                      <img src={fb_icon} alt="facebook" width='30px' style={{marginTop:'1%'}} title="facebook"/>
                      </Link>
                          </td>
                          <td>
                          <Link className="black-text text-lighten-3" to="#fb">
                      <span className="mySocialLinkTxt">
                      FaceBook 
                      </span>
                      </Link>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <Link className="black-text text-lighten-3" to="#twt">
                      <img src={twt_icon} alt="twitter" width='30px' style={{marginTop:'1%'}} title="twitter"/>
                      </Link>
                          </td>
                          <td>
                          <Link className="black-text text-lighten-3" to="#twt">
                      <span className="mySocialLinkTxt">
                      Twitter 
                      </span>
                      </Link>
                          </td>
                      </tr>
                      <tr>
                          <td>
                          <Link className="black-text text-lighten-3" to="#wp">
                      <img src={wp_icon} alt="whatsapp" width='30px' style={{marginTop:'1%'}} title="whatsapp"/>
                      </Link>
                          </td>
                          <td>
                          <Link className="black-text text-lighten-3" to="#wp">
                      <span className="mySocialLinkTxt">
                      WhatsApp 
                      </span>
                      </Link>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
          <div className="footer-copyright #CCCCCC">
              {/* <SubFooter /> */}
             <div className="container black-text">
                 <div className="row">
                     <div className="col s12 m12 l4">
                         <p style={{fontSize: '16px', fontWeight: 'bold'}}>
                         Your comments means a lot to us!
                         </p>
                     </div>
                     <div className="col s12 m12 l6">
                     <span className="myAPTxtBoxDiv input-field">
                      <input placeholder="Leave a comment for us" id="commentId" type="text" className="myCommentBox"/>
                        {/* <input type="button" value="Submit" className=""/> */}
                        {/* <label for="first_name">First Name</label> */}
                    </span>
                     </div>
                     <div className="col s12 m12 l2">
                        <button className="btn myBtn" id='btnId'>Submit</button>
                     </div>
                 </div>
            <span className="black-text text-lighten-4 right" >
            {/* <input  id="comment" type="text" className="mycommentBox" placeholder="Leave a comment for us" /> */}
                {/* <i className="material-icons">you-tube</i> */}

            </span>
        </div>
          </div> 
        </footer>
            </div>
        )
    }
}

export default Footer