import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './navStyle2.css';

import SB_bg from '../../../media/side_bar/side_bar_bg_3.jpg';
import SB_dp from '../../../media/dummy_profile.jpg';
import Logo from '../../../media/final_logo.png';

//redux
import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
import { set_posts, loadData } from '../../../redux/actions/postAction/post_actions';
import {  read_notification, loadDataUser } from '../../../redux/actions/UserAction/index';


class NavBar2 extends Component {
    state={
        read: false
    }
    
    //..........................................    
    componentDidMount(){
        
        window.jQuery(document).ready(function(){
            window.jQuery('.sidenav').sidenav();
            window.jQuery('.dropdown-trigger').dropdown({constrainWidth: false,isScrollable: true});
        });
        //   this.props.loadData();         
        //   this.props.loadDataUser();         
        } 
        
        //.......................................
//         componentWillReceiveProps(nextProps){
//             console.log(nextProps.posts,"next props")
//             localStorage.setItem('read notification', 'no');
//             this.setState({
//         read: false,
//         posts : nextProps.posts,
//         posts_interest : nextProps.posts.post_interest,
//         user: nextProps.user
//     })    
// }
//...................................

    //function to close the side bar
    closeSB=()=>{
        // alert('yes close');

        window.jQuery(document).ready(function(){
            window.jQuery('.sidenav').sidenav('close');
          });   
}
//...........................................
//text case changer
Capitalize= (s)=>{
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
};
//.............................................
Extract_read_notifications = (new_list)=>{
    if(localStorage.getItem('read notification') === 'yes' || new_list.length === 0){
        //do nothing
        
    }else{
        
        let read = [];
        for(let i = 0; i<new_list.length; i++){
            read.push(new_list[i].notification_id);
        }
        console.log('read from navbar2', read);
        this.props.read_notification(
            {
                read: read
            }
            );
            localStorage.setItem('read notification', 'yes');
        // this.setState({
        //     read: true
        // })
    }
    }

    render() {

    //grab posts
    let get_posts = this.props.posts;
    //grab notifications
    let get_notifications = this.props.notifications;
    console.log('notifications from navbar 2',get_notifications);
    
    //grab user
    let user = this.props.user;
    
    //to get today date..........................
            let yr = new Date().getFullYear();
            let mn = new Date().getMonth();
            let dt = new Date().getDate();
            let hr = new Date().getHours().toString();
            let min = new Date().getMinutes().toString();
            let get_time =Number( yr.toString()+(mn + 1).toString()+dt.toString());
            console.log(get_time, 'form time number navBar2');


    //posts extract acc to notification
    let notified_post = [];
    let temp = [];
    let tempX = [];
    console.log('user read array from nav',user.notification_read, JSON.parse(localStorage.getItem('notifications_state')));
    
    for (let k = 0; k<get_notifications.length; k++){
        if(get_notifications[k].notification_date >= (get_time - 7)){
            temp.push(get_notifications[k]);
        }
    }
    let tempY = [];
    for(let y = 0; y<user.notification_read.length; y++){
        temp= temp.filter((item)=> item.notification_id !== user.notification_read[y]);
        // if(tempX.length !== 0){
            //     if(tempY.length !== 0){
                //     for(let x =0; x<tempX.length; x++){
                    //             for(let y=0; y<tempY.length; y++){
                        //                 if(tempX[x] !== tempY[y]){
                            //                     tempX.push(tempY[y]);
        //                 }else{
            //                     tempY = tempY.filter((item)=> item !== tempY[y])
            //                 }
            //             }
            
            //         }
            //     }else{
                //         //do nothing
                //     }
            
                // }else{
                    //     tempX = tempY;
                    // }
            }
            // temp= temp.filter((item)=> item.notification_date >= (get_time - 7) );
            console.log('let temp', temp, 'get', get_notifications);
            
    console.log('tempX', tempX);
    



    for(let i = 0; i<temp.length; i++){
        for(let j = 0; j<get_posts.length; j++){
            if(temp[i].post_id === get_posts[j].post_id){
                notified_post.push(get_posts[j]);
            }
        }
    }
    console.log('notified posts', notified_post);
    







        return (
            <div className='navbar-fixedX'>
             <nav className='myLINav'>
            <div className="nav-wrapper">
            <span className="menu_btn">
                            <span className='sidenav-trigger' data-target="slide-out" ><i className="menu_btn_style material-icons " >dehaze</i></span>
                      </span>
                      <span>
                         <Link to="/home"><img className="myLogoStyling brand-logo" width="150px" src={Logo} alt="images/yuna.jpg"  /></Link>
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
  <li className="mySN_items" onClick={this.closeSB}><Link to='/home'><i className="mySNIcon material-icons">home</i><span>Home</span></Link></li>
  <li className="mySN_items" onClick={()=>{
      this.closeSB();
      this.Extract_read_notifications(temp);
      }}><Link to='/notifications'><i className="mySNIcon material-icons">notifications_active</i><span>Notifications</span><span id='myNotifyBadge' className="new badge"> {notified_post.length}</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/search'><i className="mySNIcon material-icons">search</i><span>Search</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/add_post'><i className="mySNIcon material-icons">add_circle_outline</i><span>Add new post</span></Link></li>
  <li className="mySN_items" onClick={()=>{this.closeSB(); localStorage.setItem('interest', 'active')}}><Link to='/display_posts'><i className="mySNIcon material-icons">cast</i><span>Active posts</span></Link></li>
  <li className="mySN_items" onClick={()=>{this.closeSB(); localStorage.setItem('interest', 'resolved')}}><Link to='/display_posts'><i className="mySNIcon material-icons">check_box</i><span>Resolved posts</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/profile'><i className="mySNIcon material-icons">account_circle</i><span>Profile</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/settings'><i className="mySNIcon material-icons">build</i><span>Settings</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/help'><i className="mySNIcon material-icons">live_help</i><span>Help?</span></Link></li>
  <li className="mySN_items" onClick={()=>{this.closeSB(); localStorage.setItem('isReport', null);localStorage.setItem('msg_type','feedback');}}><Link to='/feedback'><i className="mySNIcon material-icons">feedback</i><span>Feedback</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/about'><i className="mySNIcon material-icons">feedback</i><span>About us</span></Link></li>
  <li className="mySN_items" onClick={this.closeSB}><Link to='/signin'><i className="mySNIcon material-icons">power_settings_new</i><span>Logout</span></Link></li>
</ul>
{/* <i className="material-icons">menu</i> */}

            {/* <a href="#" className="brand-logo left">Logo</a> */}

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                          {/* <li className="myNavItem">Help?</li> */}
                          {/* <li className="myNavItem">
                              <Link to="/home">
                              Home
                              </Link>
                              </li> */}
                          <li className="myNavItem">
                              <Link to="#search">
                              <i className="material-icons">search</i>
                              </Link>
                              </li>

                              <li className="myNavItem" >
                              <Link to="#notifications" onClick={()=>{this.Extract_read_notifications(temp)}} className="dropdown-trigger center" data-target="dropdown2">
                              <i className="mySNIconX material-icons">notifications_active</i>
                              </Link>
                              </li>
                              <li className="myNavItemX">
                              <Link to="#notifications" onClick={()=>{this.Extract_read_notifications(temp)}} className="dropdown-trigger center" data-target="dropdown2">

                            <span className="new badge"> {notified_post.length}</span>
                              </Link>
                              </li>
                            
                           <ul className='collection dropdown-content' id='dropdown2'>
                            {
                                notified_post.length !== 0?
                                notified_post.map((item)=>(
                                      <li className="myNotificationListItemX collection-item avatar" key={item.notification_id}>
                                          <Link to="#post">
                                       <img src={user.dp_image} alt="" className="circle" />
                                        <span className="title">{item.name}</span><span> is {this.Capitalize(item.status)}</span>
                                          <p className="myNotificationListSubItem">{item.region}, {item.country}</p>
                                          <p className="myNotificationListSubItem">{item.post_time.date},{item.post_time.month}, {item.post_time.year}</p>
                                            {/* <Link to="#!" className="secondary-content right"><i className="material-icons">grade</i></Link> */}
                                    </Link>
                                    </li>
                                    ))
                                    :
                                    <li className="myNotificationListItemX collection-item">
                                    <p className="myNotificationListSubItem center">OOPS! there is not new notification.</p>
                                    </li>
                            }
                                   <li className="myNotificationListItemX collection-item">
                                    <Link to="/notifications" className='myViewNotificationsBtn'>
                                    <button className="btn myUpdateBtnX myBtn">View all notifications</button>
                                        </Link>
                                    </li>
                            </ul>
                          <li className="myNavItem">                           
                          <Link className="dropdown-trigger center" to="#!" data-target="dropdown1">
                          {/* {
                              user.dp_image !== ''?
                              <img className="circle" width='50px' style={{marginTop: '7px'}}  src={user.dp_image} alt="images/yuna.jpg"  />
                              :
                            <i className="material-icons">account_circle</i>
                        } */}
                        
                        {
                            user.name
                        }
                        
                        </Link>

                            <ul id='dropdown1' className='dropdown-content'>
                            <li><Link to="/profile"><i className="mySNIcon material-icons">account_circle</i>Account</Link></li>
                            <li><Link to="/signin"><i className="mySNIcon material-icons">power_settings_new</i>Logout</Link></li>
                          </ul>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        posts: state.posts,
        user: state.users,
        notifications: state.notifications,
    }
};

export default connect(mapStateToProps, {set_posts, read_notification, loadData, loadDataUser})(NavBar2);
// export default NavBar2