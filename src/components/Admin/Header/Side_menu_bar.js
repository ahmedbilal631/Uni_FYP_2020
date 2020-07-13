import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Side_menu_bar extends Component {
    render() {
        return (
            <div>
                                            <div className="row center">
                                <p className="ad_welcome_note">
                                    Welcome to admin portal
                                </p>
                            </div>
                            <div className="row my_ad_details_pan">
                                    <p className="my_ad_title">Admin</p>
                                    <p className="ad_details">Jameel Qadri</p>
                                    <p className="my_ad_title">11 July, 2020</p>
                                    <p className="my_ad_title">Pakistan</p>
                            </div>
                            <div className="row center">
                                <Link to="#admin_menu"><p className="menu_items_ad">Manage Admins</p></Link>
                                <Link to="/admin/users_management"><p className="menu_items_ad">Manage Users</p></Link>
                                <Link to="/admin/posts_management"><p className="menu_items_ad" onClick={()=>{localStorage.setItem('interest', 'recent')}}>Manage Posts</p></Link>
                                <Link to="#admin_menu"><p className="menu_items_ad">Manage Mails</p></Link>
                                <Link to="#admin_menu"><p className="menu_items_ad">Manage Reports</p></Link>
                                <Link to="#admin_menu"><p className="menu_items_ad">Manage Site</p></Link>
                                <Link to="#admin_menu"><p className="menu_items_ad">Logout</p></Link>
                            </div>
            </div>
        )
    }
}

//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        posts : state.posts,
        users : state.users,
    }
  };
export default connect(mapStateToProps, null)(Side_menu_bar) 