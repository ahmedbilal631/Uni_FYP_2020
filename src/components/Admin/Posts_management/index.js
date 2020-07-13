import React, { Component } from 'react';
import NavBar from '../Header/Nav_bar_admin';
import Admin_Footer from '../Footer/Admin_Footer';
// import Content from './content';

import {connect} from 'react-redux';

//dom
import {Link} from 'react-router-dom';
import Side_menu_bar from '../Header/Side_menu_bar';

//custom css
import './style.css'

class Posts_Management extends Component {
    constructor(props){
        super(props);
        this.state ={

            //...........
            all_posts: this.props.posts,
            // recent_posts:this.Get_Recent(this.props.posts),
            your_posts: [],
            //................
            user: this.props.user,
            //.........btn flags
            all_list: false,
            recent_list: false,
            your_list: false,
    }
  console.log('state from display admin posts page', this.state);  
  }
  ///..................................................................
  componentDidMount(){
      window.jQuery(document).ready(function(){
        window.jQuery('.scrollspy').scrollSpy()});
        window.jQuery(document).ready(function(){
            window.jQuery('.collapsible').collapsible();
          });
                
  }
//.....................................................................
        //compare function for sorting
        Compare=(a, b)=>{
            // Use toUpperCase() to ignore character casing
            const postA = Number(a.post_id);
            const postB = Number(b.post_id);
          
            let comparison = 0;
            if (postA > postB) {
              comparison = 1;
            } else if (postA < postB) {
              comparison = -1;
            }
            return comparison;
          }
          //recent posts maker
          Recent=(a, b)=>{
              console.log('recent', a.post_time.date.toString());
              
            const postA = Number( a.post_time.month.toString() + a.post_time.year.toString());
            const postB = Number( b.post_time.month.toString() + b.post_time.year.toString());
            console.log('after num', postB);
            let comparison = 0;
            if (postA > postB) {
              comparison = 1;
            } else if (postA < postB) {
              comparison = -1;
            }
            return comparison;
          }

        Post_Extractor=(post_type)=>{
            // let state_posts = this.state.all_posts;
            let get_all_posts = this.state.all_posts;
            get_all_posts = get_all_posts.filter((i)=> i.post_status === 'active');
            get_all_posts.sort(this.Compare);
            // get_all_posts.reverse();
            // if(get_all_posts.length >= 4){
            //     // let get_index = 
            //     // const target_index =get_all_posts.findIndex((item) => { return item.post_id === higher_id});
            //     get_all_posts.slice((get_all_posts.length-5), get_all_posts.length);
            // }
            //for all posts display
            console.log('post extractor before', get_all_posts);
            if(post_type === 'all'){
                if(get_all_posts.length !== 0){
                    localStorage.setItem('all_posts_length',1)
                }
                console.log('post extractor all', get_all_posts);
            }else if(post_type === 'recent'){
                get_all_posts.sort(this.Recent)
                get_all_posts.reverse();
                if(get_all_posts.length !== 0){
                    localStorage.setItem('recent_posts_length',1)
                }
                console.log('post extractor recent', get_all_posts);
            }else if(post_type ==='reported'){
                get_all_posts = this.state.all_posts.filter((i)=> i.isReported === true);
                console.log('reported posts', get_all_posts);
                if(get_all_posts.length !== 0){
                    localStorage.setItem('your_posts_length',1)
                }
                console.log('post extractor your', get_all_posts);
            }else if(post_type === 'disabled'){
                get_all_posts = this.state.all_posts.filter((i)=> i.post_status === 'disabled');
                console.log('post extractor disabled', get_all_posts);
            }else if(post_type === 'resolved'){
                get_all_posts = this.state.all_posts.filter((i)=> i.post_status === 'resolved');
                console.log('post extractor resolved', get_all_posts);
            }
            else{
                console.log('no post extraction case run in home and displaying', get_all_posts);
                
            }            
            return get_all_posts;
            // this.Card_Creator(get_all_posts);
        }
        //.......................................................................................
          //...........................................................
  //....my new car generator
  New_Card_Creator=(list)=>{
    let user = this.state.user;
    console.log('call to new card creator - given list -', list);
    return(
       <ul className="collapsible">
            {list.length !== 0?
          list.map((i, index)=>(
          <li key={i.post_id}>
<div className="collapsible-header">
<div className="card blue-grey darken-1 ">
        <div className="card-content white-text">
          <span className="card-title">{i.name} is {(i.status).toUpperCase()} <Link to='#deletePost' className="right"><i className="material-icons right">delete</i></Link></span>
          <p>Posted on {i.post_time.date}-{i.post_time.month}-{i.post_time.year}.</p>
          <p>Posted from {i.region},{i.country}.</p>
          <p>Posted By  {i.post_creator_name}.</p>
          <p className='hide' style={{width:'100hw'}}>Post id------////---  {i.post_id}------------//--------------.</p>
        </div>
        {/* <div className="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div> */}
      </div>
      </div>

<div className="collapsible-body">
<div className="card horizontal">
<div className="card-image activator">
{/* <img src={"https://firebasestorage.googleapis.com/v0/b/firsttry-4edb6.appspot.com/o/images%2Ffaizan.jpg?alt=media&token=d7822c6f-6e47-4a88-b30d-c7e5beea5c0c"} /> */}
<img src={i.dp_image} alt="post image..." />
</div>
<div className="card-stacked">
<div className="card-content">
<ul className="collection">
      <li className="collection-item">
        <span>
        Post status :  
        </span>
            <span className="myItemsVals"> {i.post_status}</span>
      </li>
    </ul>
    </div></div></div>
    <div>
        <div>Details</div>
        <div>
        <p><span className="card-title grey-text text-darken-4">{i.name} </span> is <span className="myItemsVals teal-text text-darken-3">{(i.status).toUpperCase()}</span></p>
        <p>The location is <span className='myItemsVals'> {i.location} , {(i.region).slice(0,7)} , {(i.country).slice(0,8)}</span>.</p>  
        <p><span className='myItemsVals'>{i.name}'s </span> age is approx {i.age_group} and have disability as {i.disability}.</p>
        <p>This post was uploaded on <span className='myItemsVals'> {i.post_time.date}-{i.post_time.month}-{i.post_time.year} </span> and uploaded by <span className='myItemsVals'> {i.post_creator_name}</span>.</p>
  {
    i.post_status === 'disabled'?
  <div className="row">
    <div className="col s12 m12 l12 xl12">
    <Link to='#enable'>
    <button className="btn myBtn">Enable</button>
    </Link>      
    </div>
    </div>
    :
    <div className="row">
    <div className="col s12 m12 l12 xl12">
    <Link to='#disable'>
    <button className="btn myBtn">Disable</button>
    </Link>      
    </div>
    </div>
  }
  <div className="row">
  <div className="col s12 m12 l6 xl6">
    <Link to='#contact'>
    <button className="btn myBtn">Contact</button>
    </Link>
  </div>
  <div className="col s12 m12 l6 xl6">
  <Link to='#deleted'>
    <button className="btn myBtn"
    >Delete</button>
    </Link>
  </div>
</div>
  {/* <span>Lorem ipsum dolor sit amet.</span> */}
</div>
</div></div></li>
)):
            <li className="col s12 m12 l12 xl12 center">
      <div className="collapsible-header">
        Sorry, There is no post to display.
      </div>
      <div className="collapsible-body">
          <Link to='/add_post'> 
          <button className="btn myBtn" >Add new post?</button>
          </Link>
      </div>
  </li>
            }
            </ul>
      )
      
  }


//...........................................................
//to set title
Set_Title=()=>{
  let display_page_title = 'Not Specified';
  let posts_interest = localStorage.getItem('interest');
  if(posts_interest === 'recent'){
      display_page_title = 'RECENT POSTS';
      // display_list = recent_posts;
    }else if(posts_interest === 'reported'){
        display_page_title = 'REPORTED POSTS';
      //   display_list = your_posts;
    }else if(posts_interest === 'all'){
        display_page_title = 'ALL POSTS';
      //   display_list = get_posts;
    }else if(posts_interest === 'active'){
        display_page_title = 'YOUR ACTIVE POSTS';
      //   display_list = your_active_posts;
    }else if(posts_interest === 'disabled'){
        display_page_title = 'YOUR DISABLED POSTS';
      //   display_list = your_in_active_posts;
    }else if(posts_interest === 'followed'){
        display_page_title = 'YOUR FOLLOWED POSTS';
        // display_list = followed_posts;
    }else if(posts_interest === 'resolved'){
        display_page_title = 'YOUR RESOLVED POSTS';
      //   display_list = your_resolved_posts;
    }else if(posts_interest === 'single'){
        display_page_title = 'POST VIEWED';
      //   display_list = your_clicked_posts;
    }
    return display_page_title;
}

//............................................................................
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l3 xl3">
                            <Side_menu_bar />
                        </div>
                        <div className="col s0 m0 l1 xl1"></div>
                        <div className="col s12 m12 l8 xl8">
                            <div style={{padding: '10%'}}>
                            <div className="row">
                            <nav>
                            <div className="nav-wrapper pecific blue">
                              {/* <Link to="#" className="brand-logo"> {this.Set_Title()}</Link> */}
                              <ul id="nav-mobile" className='center'>
                                <li onClick={()=>{localStorage.setItem('interest', 'recent')}}><Link to="#">Recent</Link></li>
                                <li onClick={()=>{localStorage.setItem('interest', 'resolved')}}><Link to="#">Resolved</Link></li>
                                <li onClick={()=>{localStorage.setItem('interest', 'reported')}}><Link to="#">Reported</Link></li>
                                    </ul>
                             </div>
                                </nav>
                            </div>
                            <div className="row">
                                <p className="ad_post_page_title">
                                    {this.Set_Title()}
                                </p>
                            </div>
                            <div className="row">
                                {this.New_Card_Creator(this.Post_Extractor(localStorage.getItem('interest')))}
                            </div>
                            {/* <Content /> */}
                        </div>
                            </div>
                    </div>
                </div>
                <div>
                    <Admin_Footer />
                </div>
            </div>
        )
    }
}
//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        posts: state.posts,
        user: state.users
    }
};

export default connect(mapStateToProps, null)(Posts_Management);