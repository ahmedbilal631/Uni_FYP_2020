import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './navStyle2.css';

// import SB_bg from '../../../media/side_bar/side_bar_bg_3.jpg';
// import SB_dp from '../../../media/dummy_profile.jpg';
import Logo from '../../../media/final_logo.png';

//redux
import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
// import { set_posts, loadData } from '../../../redux/actions/postAction/post_actions';
// import {  read_notification, loadDataUser } from '../../../redux/actions/UserAction/index';


class Admin_NavBar extends Component {
    constructor(props){
        super(props);
        this.state ={
            read: false,
            notifications: this.props.notifications,
            posts: this.props.posts,
        }
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
        static getDerivedStateFromProps(nextprops, state){
            return{
                notifications : nextprops.notifications,
                posts: nextprops.posts,
            }
        }
        //........................................
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

//     //function to close the side bar
//     closeSB=()=>{
//         // alert('yes close');

//         window.jQuery(document).ready(function(){
//             window.jQuery('.sidenav').sidenav('close');
//           });   
// }
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

    //compare for sorting
            //compare function for sorting
            Compare=(a, b)=>{
                // Use toUpperCase() to ignore character casing
                const postA = Number(a.notification_date);
                const postB = Number(b.notification_date);
              
                let comparison = 0;
                if (postA > postB) {
                  comparison = 1;
                } else if (postA < postB) {
                  comparison = -1;
                }
                return comparison;
              }

    render() {

    //grab posts
    let get_posts = this.state.posts;
    //grab notifications
    let get_notifications = this.state.notifications;
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
    
    if(get_notifications.length >= 5){
        get_notifications.splice((get_notifications.length - 5), get_notifications.length);
    }else{
        console.log('notification array was less then 4 from nav2', get_notifications);
    }
    console.log('notifications from nav2', get_notifications);
    
    //notifications sortings
    get_notifications.sort(this.Compare);
    console.log('notifications from nav2 after sorting', get_notifications);
    get_notifications.reverse();
    console.log('notifications from nav2 after sorting reverse', get_notifications);
    
    
    
    
    
    
    
    
    
    
    // for (let k = 0; k<get_notifications.length; k++){
        //     if(get_notifications[k].notification_date >= (get_time - 7)){
    //         temp.push(get_notifications[k]);
    //     }
    // }
    // let tempY = [];
    // for(let y = 0; y<user.notification_read.length; y++){
    //     get_notifications= get_notifications.filter((item)=> item.notification_id !== user.notification_read[y]);
    // }
    // console.log('notifications from nav2 after read extractions', get_notifications);
    //     // if(tempX.length !== 0){
    //         //     if(tempY.length !== 0){
    //             //     for(let x =0; x<tempX.length; x++){
    //                 //             for(let y=0; y<tempY.length; y++){
    //                     //                 if(tempX[x] !== tempY[y]){
    //                         //                     tempX.push(tempY[y]);
    //     //                 }else{
    //         //                     tempY = tempY.filter((item)=> item !== tempY[y])
    //         //                 }
    //         //             }
            
    //         //         }
    //         //     }else{
    //             //         //do nothing
    //             //     }
            
    //             // }else{
    //                 //     tempX = tempY;
    //                 // }
    //         }
    //         // temp= temp.filter((item)=> item.notification_date >= (get_time - 7) );
    //         console.log('let temp', temp, 'get', get_notifications);
            
    // console.log('tempX', tempX);
    



    for(let i = 0; i<get_notifications.length; i++){
        console.log('i', get_notifications[i].post_id);        
        for(let j = 0; j<get_posts.length; j++){           
            console.log('j', get_posts[j].post_id);
            if(get_notifications[i].post_id === get_posts[j].post_id){
                console.log('i', i, 'j',j);
                notified_post.push(get_posts[j]);
                localStorage.setItem('read notification', 'no');
            }
        }
    }
    console.log('notified posts', notified_post);
    







        return (
            <div className='navbar-fixedX'>
             <nav className='myLINav pacific blue'>
            <div className="nav-wrapper">
            <span className="menu_btn myNavItem">
                         <Link to="/admin">Admin Portal</Link>
                      </span>
                      <span>
                         <Link to="#admin"><img className="myLogoStyling brand-logo" width="150px" src={Logo} alt="images/yuna.jpg"  /></Link>
                      </span>

         
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
                              <Link to="/search">
                              <i className="material-icons">search</i>
                              </Link>
                              </li>

                              <li className="myNavItem" >
                              <Link to="#notifications" onClick={()=>{this.Extract_read_notifications(get_notifications)}} className="dropdown-trigger center" data-target="dropdown2">
                              <i className="mySNIconX material-icons">notifications_active</i>
                              </Link>
                              </li>
                              <li className="myNavItemX">
                              <Link to="#notifications" onClick={()=>{this.Extract_read_notifications(get_notifications)}} className="dropdown-trigger center" data-target="dropdown2">

                            <span className="new badge"> {notified_post.length}</span>
                              </Link>
                              </li>
                            
                           <ul className='collection dropdown-content' id='dropdown2'>
                            {
                                notified_post.length !== 0?
                                notified_post.map((item)=>(
                                      <li className="myNotificationListItemX collection-item avatar" key={item.notification_id}>
                                          <Link to="#post">
                                       <img src={item.dp_image} alt="" className="circle" />
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

export default connect(mapStateToProps, null)(Admin_NavBar);
// export default NavBar2