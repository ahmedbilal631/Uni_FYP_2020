import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './side_links.css';

//redux
// import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
// import { set_posts } from '../../redux/actions/postAction/post_actions';

class Side_Links extends Component {

    YourPosts = () =>{
        // this.props.set_posts({
        //     interest: 'your'
        // })
        localStorage.setItem('interest', 'your');
        
    }
    ResolvedPosts = () =>{
        // this.props.set_posts({
        //     interest: 'resolved'
        // })
        localStorage.setItem('interest', 'resolved');
    }
    ActivePosts = () =>{
        // this.props.set_posts({
        //     interest: 'active'
        // })
        localStorage.setItem('interest', 'active');
    }
    InActivePosts = () =>{
        // this.props.set_posts({
        //     interest: 'in_active'
        // })
        localStorage.setItem('interest', 'disabled');
    }
    RecentPosts = () =>{
        // this.props.set_posts({
        //     interest: 'recent'
        // })
        localStorage.setItem('interest', 'recent');
    }
    AllPosts = () =>{
        // this.props.set_posts({
        //     interest: 'all'
        // })
        localStorage.setItem('interest', 'all');
    }
    FollowedPosts = () =>{
        // this.props.set_posts({
        //     interest: 'followed'
        // })
        localStorage.setItem('interest', 'followed');
    }




    render() {
        return (
            <div>
                            <div className="mySideLinksTitle">
                                Futher
                            </div>
                            <div className="mySideLinksList">
                                <ul className="mySideLinksStyle">
                                    <li><Link to='/add_post'>Add new post</Link></li>
                                    <li onClick={this.YourPosts}><Link to='/display_posts'>Your posts</Link></li>
                                    <li onClick={this.ActivePosts}><Link to='/display_posts'>Your active posts</Link></li>
                                    <li onClick={this.InActivePosts}><Link to='/display_posts'>Your disabled posts</Link></li>
                                    <li onClick={this.ResolvedPosts}><Link to='/display_posts'>Your resolved posts</Link></li>
                                    {/* <li onClick={this.FollowedPosts}><Link to='/display_posts'>Your followed posts</Link></li> */}
                                    <li onClick={this.RecentPosts}><Link to='/display_posts'>Recent posts</Link></li>
                                    <li onClick={this.AllPosts}><Link to='/display_posts'>All posts</Link></li>
                                </ul>
                            </div>
                            <div className="mySideLinksTitle">
                                Other actions
                            </div>
                            <div className="mySideLinksList">
                                <ul className="mySideLinksStyle">
                                    <li><Link to='/notifications'>Notifications</Link></li>
                                    <li><Link to='/search'>Search</Link></li>
                                    <li><Link to='/settings'>Settings</Link></li>
                                    <li><Link to='/help'>Help?</Link></li>
                                    <li  onClick={this.closeSB, ()=>{localStorage.setItem('isReport', null);localStorage.setItem('msg_type','feedback');}}><Link to='/feedback'><span>Feedback</span></Link></li>
                                    <li><Link to='/signin'>Logout</Link></li>
                                </ul>
                            </div>
  
            </div>
        )
    }
}
//here the redux data will be converted into props
// const mapStateToProps=(state)=>{
//     return{
//         posts: state.posts
//     }
// };

// export default connect(mapStateToProps, {set_posts})(Side_Links);
export default  Side_Links;