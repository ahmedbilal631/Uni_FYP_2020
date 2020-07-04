import React, { Component } from 'react';
import './navStyle2.css';

import {Link} from 'react-router-dom';

import SB_bg from '../../../media/side_bar/side_bar_bg_3.jpg';
import SB_dp from '../../../media/dummy_profile.jpg';

import Side_Bar from '../../Side_Bar/side_bar'

// import Logo_White from '../../../media/logo_white.png';

class NavBar extends Component {

//..........................................    
    componentDidMount(){
        window.jQuery(document).ready(function(){
            window.jQuery('.sidenav').sidenav();
            window.jQuery('.dropdown-trigger').dropdown();
          });         
    } 

//.......................................

    //function to close the side bar
    closeSB=()=>{
        // alert('yes close');

        window.jQuery(document).ready(function(){
            window.jQuery('.sidenav').sidenav('close');
          });   
}
//...........................................
    render() {
        return (
            <div>
                  <nav className="myNav">
                      {/* <span> */}
                          {/* <img src={Logo_White} alt="Lets Find" className="responsive-img"/> */}
                      {/* </span> */}
                      <div className="nav-wrapper">
                      <span className="menu_btn">
                            <span className='sidenav-trigger' data-target="slide-out" ><i className="menu_btn_style material-icons " >dehaze</i></span>
                      </span>
                      <ul id="slide-out" className="sidenav">
                    <li><div className="user-view">
  
                    <span className="mySBCLoseBtnX"><i className="mySBCLoseBtn material-icons" onClick={this.closeSB}>backspace</i></span>
  
                     <div className="background center">
                     <img src={SB_bg} alt="side bar bg" />
                    </div>
    <Link to="#dp"><img className="circle" src={SB_dp} alt="images/yuna.jpg"  /></Link>
    <Link to="#name"><span className="white-text name">John Doe</span></Link>
 <Link to="#email"><span className="white-text email">jdandturk@gmail.com</span></Link>
                    </div></li>
  <li className="mySN_items"><Link to='#add'><i className="mySNIcon material-icons">home</i><span>Home</span></Link></li>
  <li className="mySN_items"><Link to='#add'><i className="mySNIcon material-icons">notifications_active</i><span>Notifications</span></Link></li>
  <li className="mySN_items"><Link to='#add'><i className="mySNIcon material-icons">search</i><span>Search</span></Link></li>
  <li className="mySN_items"><Link to='#add'><i className="mySNIcon material-icons">add_circle_outline</i><span>Add new post</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">cast</i><span>Active posts</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">check_box</i><span>Resolved posts</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">account_circle</i><span>Profile</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">build</i><span>Settings</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">live_help</i><span>Help?</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">feedback</i><span>Feedback</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">feedback</i><span>About us</span></Link></li>
  <li className="mySN_items"><Link to='#settings'><i className="mySNIcon material-icons">power_settings_new</i><span>Logout</span></Link></li>
  <li><i className="material-icons">cloud</i>Fi</li>
  <li><i className="material-icons">cloud</i>First Link With Icon</li>
</ul>
{/* <i className="material-icons">menu</i> */}

                      </div>
                      <ul>
                          {/* <li className="myNavItem">Help?</li> */}
                          <li className="myNavItem">
                              <Link to="/home">
                              Home
                              </Link>
                              </li>
                          <li className="myNavItem">
                              <Link to="/about">
                              About us
                              </Link>
                              </li>
                          <li className="myNavItem">
                              
  
                          <Link class="dropdown-trigger" to="#!" data-target="dropdown1">
                          <i class="material-icons">account_circle</i></Link>

                            <ul id='dropdown1' class='dropdown-content'>
                            <li><a href="#!">one</a></li>
                            <li><a href="#!">two</a></li>
                            <li class="divider" tabindex="-1"></li>
                            <li><a href="#!">three</a></li>
                            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                          </ul>
                    </li>
                    </ul>
                 </nav>
            </div>
        )
    }
}

export default NavBar