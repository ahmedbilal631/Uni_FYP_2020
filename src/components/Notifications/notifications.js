import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './notifications.css';

import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import Side_Links from '../Side_Panel/side_links';


//redux
import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
import { set_posts, loadData, all_post } from '../../redux/actions/postAction/post_actions';
import {  read_notification, loadDataUser } from '../../redux/actions/UserAction/index';


class Notifications extends Component {
state =  {
    posts: [],
    user: {},
}

        //..........................................    
        componentDidMount(){
            window.jQuery(document).ready(function(){
                window.jQuery('.sidenav').sidenav('close');
              });
            //   this.setState({
                //   posts: this.props.loadData(),
                //   user: this.props.loadDataUser(),
            //   });
            //   this.props.loadData();         
            //   this.props.loadDataUser();         
            } 
            
            //.......................................
    //         componentWillReceiveProps(nextProps){
    //             console.log(nextProps.posts,"next props")
    //             // localStorage.setItem('read notification', 'no');
    //             this.setState({
    //         read: false,
    //         posts : nextProps.posts,
    //         posts_interest : nextProps.posts.post_interest,
    //         user: nextProps.user
    //     })    
    // }
    //...................................
    //text case changer
Capitalize= (s)=>{
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
};
//.............................................

//age group evaluations
GiveAge =(age_group)=>{
    if(age_group === '14'){
        return 'Less than 15 yrs'
    }
    else if(age_group === '18'){
        return '15 to 20 yrs';
    }
    else if(age_group === '23'){
        return '21 to 25 yrs';
    }    else if(age_group === '27'){
        return '26 to 30 yrs';
    }    else if(age_group === '33'){
        return '31 to 35 yrs';
    }    else if(age_group === '37'){
        return '36 to 40 yrs';
    }    else if(age_group === '43'){
        return '41 to 45 yrs';
    }
    else if(age_group === '47'){
        return '46 to 50 yrs';
    }
    else{
        return 'above 50 yrs'
    }
}


    render() {

            //grab posts
    let get_posts = this.props.posts;
    //grab notifications
    let get_notifications = this.props.notifications;
    console.log('notifications, from notifications',get_notifications);
    
    //grab user
    let user = this.props.user;
    
    //to get today date..........................
            let yr = new Date().getFullYear();
            let mn = new Date().getMonth();
            let dt = new Date().getDate();
            let hr = new Date().getHours().toString();
            let min = new Date().getMinutes().toString();
            let get_time =Number( yr.toString()+(mn + 1).toString()+dt.toString());
            console.log(get_time, 'form time number notification page');



    //posts extract acc to notification
    let notified_post = [];
    let temp = [];
    // console.log('user read array from nav',user.notification_read, JSON.parse(localStorage.getItem('saved_read_notifications')));
    
    for (let k = 0; k<get_notifications.length; k++){
        if(get_notifications[k].notification_date >= (get_time - 2)){
            temp.push(get_notifications[k]);
        }
    }
    console.log('let temp', temp, 'get', get_notifications, 'from notifications page');
   
    for(let i = 0; i<temp.length; i++){
        for(let j = 0; j<get_posts.length; j++){
            if(temp[i].post_id === get_posts[j].post_id){
                notified_post.push(get_posts[j]);
            }
        }
    }
    notified_post.reverse();
    console.log('notified posts', notified_post);

    //.................................................................


    let all_notified_post = [];
    let push_flag = [];
    for(let y = 0; y<temp.length; y++){
        get_notifications = get_notifications.filter((item)=> item.notification_date !== temp[y].notification_date);
    }
    // console.log('all notis', get_notifications);
    // get_notifications.reverse();
    // console.log('all notis after reverse', get_notifications);
    
    for(let i = 0; i<get_notifications.length; i++){
        for(let j = 0; j<get_posts.length; j++){
            if(get_notifications[i].post_id === get_posts[j].post_id){
                all_notified_post.push(get_posts[j]);
            }
        }
    }
    
    console.log("all notified posts",all_notified_post);
    all_notified_post.reverse();
    console.log("all notified posts after reverse",all_notified_post);
    

    




        return (
            <div className="myNotiMainBody">
                <NavBar />
                <div className="myAdBox">
                <p className="myPageTitle">NOTIFICATIONS</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl9">
                            <div className="myLeftPanel">
                                <p className="myPanelTitle">
                                    New Notifications
                                </p>
                                <div className="myPanelList">
                                <ul className="collection">
                                    {notified_post.length !== 0?
                                    notified_post.map((item)=>(
                                        <li className="collection-item avatar" onClick={()=>{localStorage.setItem('clicked_post_id',item.post_id);localStorage.setItem('interest','single'); }}>
                                        <Link to="/display_posts">
                                       <img src={item.dp_image} alt="" className="circle" />
                                        <span className="title">{item.name}</span><span> is {this.Capitalize(item.status)}</span>
                                          <p className="myNotificationListSubItem">Posted By - , {this.Capitalize(user.name)}</p>
                                          <p className="myNotificationListSubItem">{item.region}, {item.country}</p>
                                          <p className="myNotificationListSubItem">Age approx - , {this.GiveAge(item.age_group)}</p>
                                          <p className="myNotificationListSubItem">{item.post_time.date},{item.post_time.month}, {item.post_time.year}</p>
                                          <p className="secondary-content">
                                              New
                                          </p>
                                        </Link></li>
                                    ))
                            :
                            <li className="collection-item">
                                <p className="myNotificationListSubItem">
                                Oh! There is no new Notification.
                                </p>
                                {/* <p>
                                <Link to="/add_post" className='myViewNotificationsBtn'>
                                    <button className="btn myUpdateBtnX myBtn">Let,s make a new post!</button>
                                </Link>
                                </p> */}
                            </li>
                            }
                               <li className="collection-item">
                                <p>
                                <Link to="/add_post" className='myViewNotificationsBtn'>
                                    <button className="btn myUpdateBtnX myBtn">Let,s make a new post!</button>
                                </Link>
                                </p>
                            </li>
                            
                            {
                                all_notified_post.map((item)=>(
                                    <li className="collection-item avatar" onClick={()=>{localStorage.setItem('clicked_post_id',item.post_id);localStorage.setItem('interest','single'); }}>
                                    <Link to="/display_posts">
                                   <img src={item.dp_image} alt="" className="circle" />
                                    <span className="title">{item.name}</span><span> is {this.Capitalize(item.status)}</span>
                                      <p className="myNotificationListSubItem">Posted By - , {this.Capitalize( user.name)}</p>
                                      <p className="myNotificationListSubItem">{item.region}, {item.country}</p>
                                      <p className="myNotificationListSubItem">Age approx - , {this.GiveAge(item.age_group)}</p>
                                      <p className="myNotificationListSubItem">{item.post_time.date},{item.post_time.month}, {item.post_time.year}</p>
                                    </Link></li>
                                ))
                            }
                            </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col s0 m1 l1 xl1"></div>
                        {/* <div className="col s12 m5 l4 xl4">
                        <div className="myLeftPanel">
                                <p className="myPanelTitle">
                                    Old Notifications
                                </p>
                                <div className="myPanelList">
                                <ul className="collection">
                                    {get_notifications.length !== 0?
                                    get_notifications.map((item)=>(
                                        <li className="collection-item avatar">
                                        <Link to="#post">
                                       <img src={item.dp_image} alt="" className="circle" />
                                        <span className="title">{item.name}</span><span> is {this.Capitalize(item.status)}</span>
                                          <p className="myNotificationListSubItem">Posted By - , {this.Capitalize(user.name)}</p>
                                          <p className="myNotificationListSubItem">{item.region}, {item.country}</p>
                                          <p className="myNotificationListSubItem">Age approx - , {this.GiveAge(item.age_group)}</p>
                                          <p className="myNotificationListSubItem">{item.post_time.date},{item.post_time.month}, {item.post_time.year}</p>
                                        </Link></li>
                                    ))
                            :
                            <li className="collection-item">
                                <p className="myNotificationListSubItem">
                                Oh! There is no new Notification.
                                </p>
                                <p>
                                <Link to="/add_post" className='myViewNotificationsBtn'>
                                    <button className="btn myUpdateBtnX myBtn">Let,s make a new post!</button>
                                </Link>
                                </p>
                            </li>
                
                            }
                            </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="col s12 m3 l3 xl2">
                            <Side_Links />
                        </div>
                    </div>
                </div>
                <Footer/>
                <SubFooter />
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

export default connect(mapStateToProps, {set_posts, read_notification, loadData, loadDataUser})(Notifications);
// export default Notifications