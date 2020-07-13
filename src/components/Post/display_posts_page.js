//display posts page

import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import Side_Links from '../Side_Panel/side_links';
import './addPostStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
// import {set_posts} from '../../redux/actions/UserAction/index';
import Dp_Replacement from '../../media/dp_replacement.png'
import post_types from '../../redux/actions/postAction/post_types';

class Display_Posts extends Component {
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
  console.log('state from display page', this.state);  
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
            }else if(post_type ==='your'){
                get_all_posts = get_all_posts.filter((i)=> i.post_creator_email === this.state.user.email);                
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


        //to create post cards
        //card creator
Card_Creator=(display_list)=>{
    console.log('yes card creator', display_list);
    
    let user = this.state.user;
    return (
      <div className="row">
      {display_list.length !== 0?                           
      display_list.map((item, index)=>(
          <div className="col s12 m12 l6 xl6" key={item.post_id}>
          <div className="card sticky-action">
          <div className="card-content row">
                  <div className="col s6 m6 l6 xl6">
                  <i className="material-icons left" title="follow">star_border</i>
                  </div>
                  <div className="col s6 m6 l6 xl6">
                  <i className="material-icons right" title="share">share</i>
                  </div>
              </div>
           <div className="card-image waves-effect waves-block waves-light">
          <img className="activator responsive-image" src={item.dp_image} alt="images/office.jpg" />
          </div>
          <div className="card-content">
              <div className="row">
                  <div className="col s8 m8 l8 xl8">
                  <span className="card-title activator grey-text text-darken-4">{(item.name).slice(0,7)}</span>
                  </div>
                  <div className="col s4 m4 l4 xl4">
                  <i className="material-icons activator right" title="details">turned_in</i>
                  </div>
              </div>
              <div className="row">
                  <div className="col s6 m6 l6 xl6">
                  <span className="grey-text text-darken-4">Status</span>
                  </div>
                  <div className="col s6 m6 l6 xl6">
                <span className="myItemsVals teal-text text-darken-3">{(item.status).toUpperCase()}</span>
                  </div>
              </div>
  
              <div className="row">
                  <div className="col s6 m6 l6 xl6">Country -</div>
                <div className="myItemsVals col s6 m6 l6 xl6">{(item.country).slice(0,8)}</div>
              </div>
              <div className="row">
                  <div className="col s6 m6 l6 xl6">Region -</div>
                 <div className="myItemsVals col s6 m6 l6 xl6">{(item.region).slice(0,7)}</div>
              </div>
              <div className="row">
                  <div className="col s6 m6 l6 xl6">Post date -</div>
                  <div className="myItemsVals col s6 m6 l6 xl6">{item.post_time.date}-{item.post_time.month}-{item.post_time.year}</div>
              </div>
              {
                  item.post_creator_email === user.email?
                  <div className="row">
                  <div className="col s6 m6 l6 xl6">Post status</div>
                  <div className="myItemsVals col s6 m6 l6 xl6">{item.post_status}</div>
              </div>
              :                                    
              <div className="row">
              <div className="col s6 m6 l6 xl6">Posted By</div>
              <div className="myItemsVals col s6 m6 l6 xl6">{(item.post_creator_name).slice(0,7)}</div>
              </div>
              }
          
          </div>
          <div className="card-action">
              {item.post_creator_email === user.email?
              <Link to="/edit_post" className='center'><i className="material-icons">edit</i> Edit Post</Link>
              :
              <Link to="#report" className='center'><i className="material-icons">flag</i> Report</Link>
          }
              {/* <Link to="/edit_post" className='right'>In-Active</Link> */}
          </div>
         <div className="card-reveal">
             <div className="row">
                 <div className="col s12 m12 l12 xl12">
                 <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                 </div>
             </div>
             <div className="row">
                 <div className="col s6 m6 l6 xl6">
     <span className="card-title grey-text text-darken-4">{item.name}</span>
                 </div>
                 <div className="col s6 m6 l6 xl6">
     <span className="card-title teal-text text-darken-4">{(item.status).toUpperCase()}</span>
                     </div>
             </div>
             <div className="row">
                 <div className="myItemsVals col s12 m12 l12 xl12">Details</div>
                 <div className="col s12 m12 l12 xl12">
                 {item.description}.-
                 </div>
             </div>
             <div className="row">
                 <div className="myItemsVals col s12 m12 l12 xl12">Address</div>
                 <div className="col s12 m12 l12 xl12">
                 {item.location},{item.region},{item.country}
                 </div>
             </div>
             <div className="row">
                 <div className="myItemsVals col s12 m12 l12 xl12">Contact</div>
                 <div className="col s12 m12 l12 xl12">
                 contact info will be here.
                 </div>
             </div>
             <div className="row">
                 <div className="myItemsVals col s6 m6 l6 xl6">Follow</div>
                 <div className="myItemsVals col s6 m6 l6 xl6">
                     Report
                 </div>
             </div>
         </div>
         </div>
         </div>
  ))
  :
  <div className="col s12 m12 l12 xl12 center">
  Sorry, There is no post to display.
  </div>
    }
    </div>)
  }
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
<div className="card horizontal">
<div className="card-image activator">
{/* <img src={"https://firebasestorage.googleapis.com/v0/b/firsttry-4edb6.appspot.com/o/images%2Ffaizan.jpg?alt=media&token=d7822c6f-6e47-4a88-b30d-c7e5beea5c0c"} /> */}
<img src={i.dp_image} alt="post image..." />
</div>
<div className="card-stacked">
<div className="card-content">
<ul className="collection">
      <li className="collection-item">
        <p className="card-title activator grey-text text-darken-4">{(i.name).slice(0,7)}</p>
      </li>
      <li className="collection-item">
        <p className="myItemsVals teal-text text-darken-3">{(i.status).toUpperCase()}</p>
      </li>
      <li className="collection-item">
        <p>{i.location} , {(i.region).slice(0,7)} , {(i.country).slice(0,8)}</p>
      </li>
      <li className="collection-item">
        {/* <p className="myItemsVals col s12 m12 l6 xl6">Posted on: </p> */}
        <span>
        Posted on : 
        </span>
        <span className="myItemsVals"> {i.post_time.date}-{i.post_time.month}-{i.post_time.year}</span>
      </li>
      {i.post_creator_email === user.email?
      <li className="collection-item">
        <span>
        Post status :  
        </span>
            <span className="myItemsVals"> {i.post_status}</span>
      </li>
      :
      <li className="collection-item">
        <span>
        Posted by :  
        </span>
      <span className="myItemsVals"> {(i.post_creator_name).slice(0,7)}</span>
      </li>
  }
    </ul>
{/* <p className="myItemsVals col s12 m12 l6 xl6">{(i.country).slice(0,8)}</p> */}

{/* <p>I am a very simple card. I am good at coining small bits of information.</p> */}


            {/* <div className="row">
                  <div className="col s12 m12 l5 xl5">
                  Follow
                  <i className="material-icons left" title="follow">star_border</i>
                  </div>
                  <div className="col s0 m0 l2 xl2 hide"></div>
                  <div className="col s12 m12 l5 xl5">
                  Share
                  <i className="material-icons right" title="share">share</i>
                  </div>
                </div> */}
</div>
<div className="card-reveal">
<span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
<p>Here is some more information about this product that is only revealed once clicked on.</p>
</div>
<div className="card-action">
<Link to="#copy_link">
    <i className="material-icons right" title="share">share</i>
      Share
    </Link>
</div>
</div>
</div>
{/*......*/}          
</div>
<div className="collapsible-body">
<p><span className="card-title grey-text text-darken-4">{i.name} </span> is <span className="myItemsVals teal-text text-darken-3">{(i.status).toUpperCase()}</span></p>
<p>The location is <span className='myItemsVals'> {i.location} , {(i.region).slice(0,7)} , {(i.country).slice(0,8)}</span>.</p>  
<p><span className='myItemsVals'>{i.name}'s </span> age is approx {i.age_group} and have disability as {i.disability}.</p>
<p>This post was uploaded on <span className='myItemsVals'> {i.post_time.date}-{i.post_time.month}-{i.post_time.year} </span> and uploaded by <span className='myItemsVals'> {i.post_creator_name}</span>.</p>
  {
    i.post_creator_email === user.email?
  <div className="row">
    <div className="col s12 m12 l12 xl12">
    <Link to='/edit_post'>
    <button className="btn myBtn" onClick={()=>{localStorage.setItem('edit_post_code', i.post_id)}}>Edit post</button>
    </Link>      
    </div>
    </div>
    :
  <div className="row">
  <div className="col s12 m12 l6 xl6">
    <Link to='#contact'>
    <button className="btn myBtn">Contact</button>
    </Link>
  </div>
  <div className="col s12 m12 l6 xl6">
  <Link to='/feedback'>
    <button className="btn myBtn"
    onClick={()=>{localStorage.setItem('reported_post_id', i.post_id); localStorage.setItem('msg_type', 'report')}}
    >Report</button>
    </Link>
  </div>
</div>
  }

  {/* <span>Lorem ipsum dolor sit amet.</span> */}
  </div>
              </li>
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
      }else if(posts_interest === 'your'){
          display_page_title = 'YOUR ACTIVE POSTS';
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
        <div className='mX'>
          <NavBar />
          <div className="myAdBox">
            <p className="myPageTitle">
                {this.Set_Title()}
            </p>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col s12 m12 l12 xl7">
                      <div className="row  section scrollspy">
                      {this.New_Card_Creator(this.Post_Extractor(localStorage.getItem('interest')))}
                          </div>

                          </div>
                          <div className="col s0 m0 l0 xl1"></div>
                          <div className="col s12 m12 l12 xl4">
                              <div className="section table-of-contents">
                            <Side_Links />
                              </div>
                        </div>
                    </div>
                </div>

                    <Footer />
                    <SubFooter />
                          </div>
                          )}}

//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        posts: state.posts,
        user: state.users
    }
};

export default connect(mapStateToProps, null)(Display_Posts);
