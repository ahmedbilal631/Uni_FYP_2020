import React, { Component } from 'react';
import './main_page.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

class Content extends Component {
    render() {
        return (
            <div className="ad_content_body">
                <div className="row">
                    <div className="col s12 m12 l5 xl5">
                    <div class="card blue-grey darken-1">
                       <div class="card-content white-text">
                     <span class="card-title">Users</span>
                   <p className='ad_card_item'><strong> Total users: </strong> {this.props.posts.length}  <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Recently joined: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Black list: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Reported users: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                       </div>
                    <div class="card-action">
                    <Link to='/users_management'>Manage Users</Link>
                    </div>
                    </div>

                    </div>
                    <div className="col s12 m12 l2 xl2"></div>
                    <div className="col s12 m12 l5 xl5">
                    <div class="card blue-grey darken-1">
                       <div class="card-content white-text">
                     <span class="card-title">Posts</span>
                   <p className='ad_card_item'><strong> Total posts: </strong> {this.props.posts.length}  <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Recent posts: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Resolved posts: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Reported posts: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                       </div>
                    <div class="card-action">
                        <Link to='/posts_management'>Manage Posts</Link>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m12 l5 xl5">
                    <div class="card blue-grey darken-1">
                       <div class="card-content white-text">
                     <span class="card-title">Messages</span>
                   <p className='ad_card_item'><strong> Feedback: </strong> {this.props.posts.length}  <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Reports: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Comments: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Others: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                       </div>
                    <div class="card-action">
                    <Link to='/messages_management'>Manage Messages</Link>
                    </div>
                    </div>

                    </div>
                    <div className="col s12 m12 l2 xl2"></div>
                    <div className="col s12 m12 l5 xl5">
                    <div class="card blue-grey darken-1">
                       <div class="card-content white-text">
                     <span class="card-title">Site Analytics</span>
                   <p className='ad_card_item'><strong> Total Web visits: </strong> {this.props.posts.length}  <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> App downloads: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Links shares: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                   <p className='ad_card_item'><strong> Left Users: </strong> {this.props.posts.length} <Link className='right' to='#card_item'>View</Link></p>
                       </div>
                    <div class="card-action">
                        <Link to='/site_management'>Manage Site</Link>
                    </div>
                    </div>
                    </div>
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
export default connect(mapStateToProps, null)(Content) 
