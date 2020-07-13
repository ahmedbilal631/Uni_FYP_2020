//display posts page

import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import Side_Links from '../Side_Panel/side_links';
import './addPostStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {set_posts} from '../../redux/actions/UserAction/index';
import Dp_Replacement from '../../media/dp_replacement.png'


class Display_Posts extends Component {
    constructor(props){
        super(props);
        this.state ={
            edit: false,
            isEmpty: false,
            re_enter: false,            
                name : '',
                fname: '',
                gender:'',
                cnic: '',
                email: '',
                number:'',
                address:'',
                country:'',
                password:'',
                dp_image: '',

                posts: [],
                posts_interest: 'all'

            // recievedUsers: this.props.recievedUsers,
    }
    console.log(this.state, 'from construct');    
}


    componentDidMount(){

        //here will be post loaders
        }

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.posts,"next props")
    //     this.setState({
    //         posts : nextProps.posts,
    //         posts_interest : nextProps.posts.post_interest
    //     })    
    // }
    //...................................


    render() {
        //getting user data
        let user = this.props.user;
        //...................................................
        //posts interest selection
        let posts_interest = localStorage.getItem('interest');
        //getting all the post from store
        let get_posts  = this.props.posts;
        console.log(posts_interest,get_posts);

        //.....................................................
        //to get Your Posts functions
        //getting your email from local storage to display your posts
        // let post_creator_email = localStorage.getItem('post_creator_email'); 
        let post_creator_email = user.email; 

        let your_posts = get_posts.filter((item)=> item.post_creator_email === post_creator_email);
        console.log(your_posts, 'your post');
        //...................................................
        //to get Your active Posts functions
        //getting your email from local storage to display your posts
        // let post_creator_email = localStorage.getItem('post_creator_email') 

        let your_active_posts = get_posts.filter((item)=> item.post_creator_email === post_creator_email && item.post_status === 'active');
        console.log(your_active_posts, 'your active post');
        //...................................................
            //to get Your active Posts functions
        //getting your email from local storage to display your posts
        // let post_creator_email = localStorage.getItem('post_creator_email') 

        let your_in_active_posts = get_posts.filter((item)=> item.post_creator_email === post_creator_email && item.post_status === 'disabled');
        console.log(your_in_active_posts, 'your in active post');
        //...................................................
        //to get Your Resolved Posts functions
        //getting your email from local storage to display your posts
        // let post_creator_email = localStorage.getItem('post_creator_email') 

        let your_resolved_posts = get_posts.filter((item)=> item.post_creator_email === post_creator_email && item.post_status === "resolved");
        //  your_resolved_posts = get_posts.filter((item)=> );
        console.log(your_resolved_posts, 'your resolved post');
        //...................................................
        //functions for your followed posts
        let followed_posts_ids = this.props.user.followed_posts;
        console.log("followed posts", followed_posts_ids);
        let followed_posts = [];
        // if(followed_posts_ids.length !== 0){

        //     for (let i =0; i < followed_posts_ids.length; i++){
        //         followed_posts = get_posts.filter((item)=> item.post_id === followed_posts_ids[i]);
        //         // followed_posts.push(temp_post[0]);
        //     }
        // }
            console.log('followed post', followed_posts);

            //..............................................
            
        
        //functions for recent posts order
        //recent post array
      let recent_posts = [];
      //to extract interest related posts
      let posts_array_length = get_posts.length-1;
      //to get higher rank id
      let higher_id = 1000;
      for(let i = 0; i<=posts_array_length; i = i+1){
        //   for(let j = 1; j<= posts_array_length; j++){
        //       if(get_posts[j]>get_posts[i]){
        //         recent_posts.push(get_posts[j]);
        //     }
        //     else{
        //         recent_posts.push(get_posts[i]);
        //       }
        //   }

        if(get_posts[i].post_id > higher_id){
          higher_id = get_posts[i].post_id;
        //   console.log(higher_id, ' loop higher id');  
        }
      }
        for(let k = 0; k<=posts_array_length; k++){
          const target_index =get_posts.findIndex((item) => { return item.post_id === higher_id});
          if(target_index !== -1){
            // console.log(target_index, '+ve');
            recent_posts.push(get_posts[target_index]);
            higher_id = higher_id - 1;
          }else{
            // console.log(target_index, '-ve');
            k= k -1;
            higher_id = higher_id - 1;
          }
        }
        recent_posts.reverse();
    //   console.log(recent_posts, 'for recent posts loop'); 
      //...............................................................
      let your_clicked_posts = this.props.posts.filter((i)=>i.post_id === Number(localStorage.getItem('clicked_post_id')));
      //list of posts to be displayed
      let display_list = [];
      let display_page_title = 'Not Specified';
      if(posts_interest === 'recent'){
          display_page_title = 'RECENT POSTS';
          display_list = recent_posts;
        }else if(posts_interest === 'your'){
            display_page_title = 'YOUR POSTS';
            display_list = your_posts;
        }else if(posts_interest === 'all'){
            display_page_title = 'ALL POSTS';
            display_list = get_posts;
        }else if(posts_interest === 'active'){
            display_page_title = 'YOUR ACTIVE POSTS';
            display_list = your_active_posts;
        }else if(posts_interest === 'in_active'){
            display_page_title = 'YOUR IN-ACTIVE POSTS';
            display_list = your_in_active_posts;
        }else if(posts_interest === 'followed'){
            display_page_title = 'YOUR FOLLOWED POSTS';
            // display_list = followed_posts;
        }else if(posts_interest === 'resolved'){
            display_page_title = 'YOUR RESOLVED POSTS';
            display_list = your_resolved_posts;
        }else if(posts_interest === 'single'){
            display_page_title = 'POST VIEWED';
            display_list = your_clicked_posts;
        }
        // display_list.reverse();

        console.log("display_list", display_list);          
        console.log("display_list", (display_list).length);          
        //................................................

        return (
              <div className='mX'>
                <NavBar />
                <div className="myAdBox">
        <p className="myPageTitle">{display_page_title}</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl10">
                            <div className="row">
                            {display_list.length !== 0?                           
                            display_list.map((item, index)=>(
                                <div className={localStorage.getItem('interest') === 'single'? "col s12 m12 l12 xl12":'col s12 m12 l6 xl4'} key={item.post_id}>
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
                                <img className="activator"   src={item.dp_image} alt="images/office.jpg" />
                                </div>
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col s8 m8 l8 xl8">
                                        <span className="card-title activator grey-text text-darken-4">{item.name}</span>
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
                                      <div className="myItemsVals col s6 m6 l6 xl6">{(item.country).slice(0,9)}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6 m6 l6 xl6">Region -</div>
                                       <div className="myItemsVals col s6 m6 l6 xl6">{item.region}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col s6 m6 l6 xl6">Post date -</div>
                                        <div className="myItemsVals col s6 m6 l6 xl6">{item.post_time.date}-{item.post_time.month}-{item.post_time.year}</div>
                                    </div>
                                    {
                                        item.post_creator_email === post_creator_email?
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
                                    {item.post_creator_email === post_creator_email?
                                    <Link onClick={()=>{
                                        localStorage.setItem('edit_post_code', item.post_id);
                                    }} to="/edit_post" className='center'><i className="material-icons">edit</i> Edit Post</Link>
                                    :
                                    <Link to="/feedback" onClick={()=>{localStorage.setItem('reported_post_id',item.post_id); localStorage.setItem('isReport','yes'); localStorage.setItem('msg_type','report');}} className='center'><i className="material-icons">flag</i> Report</Link>
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
    //     :posts_interest == 'your'?your_posts.length != -1?
    //     your_posts.map((item, index)=>(
    //         <div className="col s12 m12 l6 xl4" key={item.post_id}>
    //         <div className="card sticky-action">
    //         <div className="card-content row">
    //                 <div className="col s6 m6 l6 xl6">
    //                 <i className="material-icons left" title="follow">star_border</i>
    //                 </div>
    //                 <div className="col s6 m6 l6 xl6">
    //                 <i className="material-icons right" title="share">share</i>
    //                 </div>
    //             </div>
    //          <div className="card-image waves-effect waves-block waves-light">
    //         <img className="activator" src={item.dp_image} alt="images/office.jpg" />
    //         </div>
    //         <div className="card-content">
    //             <div className="row">
    //                 <div className="col s8 m8 l8 xl8">
    //                 <span className="card-title activator grey-text text-darken-4">{item.name}</span>
    //                 </div>
    //                 <div className="col s4 m4 l4 xl4">
    //                 <i className="material-icons activator right" title="details">turned_in</i>
    //                 </div>
    //             </div>
    //             <div className="row">
    //                 <div className="col s6 m6 l6 xl6">
    //                 <span className="grey-text text-darken-4">Status</span>
    //                 </div>
    //                 <div className="col s6 m6 l6 xl6">
    //               <span className="myItemsVals teal-text text-darken-3">{(item.status).toUpperCase()}</span>
    //                 </div>
    //             </div>

    //             <div className="row">
    //                 <div className="col s6 m6 l6 xl6">Country -</div>
    //               <div className="myItemsVals col s6 m6 l6 xl6">{item.country}</div>
    //             </div>
    //             <div className="row">
    //                 <div className="col s6 m6 l6 xl6">Region -</div>
    //                <div className="myItemsVals col s6 m6 l6 xl6">{item.region}</div>
    //             </div>
    //             <div className="row">
    //                 <div className="col s6 m6 l6 xl6">Post date -</div>
    //                 <div className="myItemsVals col s6 m6 l6 xl6">{item.post_time.date}-{item.post_time.month}-{item.post_time.year}</div>
    //             </div>
            
    //         </div>
    //         <div className="card-action">
    //             {item.post_creator_email === post_creator_email?
    //             <Link to="/edit_post" className='center'><i className="material-icons">edit</i> Edit Post</Link>
    //             :
    //             <Link to="#report" className='center'><i className="material-icons">flag</i> Report</Link>
    //         }
    //             {/* <Link to="/edit_post" className='right'>In-Active</Link> */}
    //         </div>
    //        <div className="card-reveal">
    //            <div className="row">
    //                <div className="col s12 m12 l12 xl12">
    //                <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
    //                </div>
    //            </div>
    //            <div className="row">
    //                <div className="col s6 m6 l6 xl6">
    //    <span className="card-title grey-text text-darken-4">{item.name}</span>
    //                </div>
    //                <div className="col s6 m6 l6 xl6">
    //    <span className="card-title teal-text text-darken-4">{(item.status).toUpperCase()}</span>
    //                    </div>
    //            </div>
    //            <div className="row">
    //                <div className="myItemsVals col s12 m12 l12 xl12">Details</div>
    //                <div className="col s12 m12 l12 xl12">
    //                {item.description}.-
    //                </div>
    //            </div>
    //            <div className="row">
    //                <div className="myItemsVals col s12 m12 l12 xl12">Address</div>
    //                <div className="col s12 m12 l12 xl12">
    //                {item.location},{item.region},{item.country}
    //                </div>
    //            </div>
    //            <div className="row">
    //                <div className="myItemsVals col s12 m12 l12 xl12">Contact</div>
    //                <div className="col s12 m12 l12 xl12">
    //                contact info will be here.
    //                </div>
    //            </div>
    //            <div className="row">
    //                <div className="myItemsVals col s6 m6 l6 xl6">Follow</div>
    //                <div className="myItemsVals col s6 m6 l6 xl6">
    //                    Report
    //                </div>
    //            </div>
    //        </div>
    //        </div>
    //        </div>
    //         ))
    //         :
    //         <div className="col s12 m12 l12 xl12">
    //             Sorry, You have no post yet.
    //         </div>
    //         :get_posts.length != -1?
    //         get_posts.map((item, index)=>(
    //             <div className="col s12 m12 l6 xl4" key={item.post_id}>
    //             <div className="card sticky-action">
    //             <div className="card-content row">
    //                     <div className="col s6 m6 l6 xl6">
    //                     <i className="material-icons left" title="follow">star_border</i>
    //                     </div>
    //                     <div className="col s6 m6 l6 xl6">
    //                     <i className="material-icons right" title="share">share</i>
    //                     </div>
    //                 </div>
    //              <div className="card-image waves-effect waves-block waves-light">
    //             <img className="activator" src={item.dp_image} alt="images/office.jpg" />
    //             </div>
    //             <div className="card-content">
    //                 <div className="row">
    //                     <div className="col s8 m8 l8 xl8">
    //                     <span className="card-title activator grey-text text-darken-4">{item.name}</span>
    //                     </div>
    //                     <div className="col s4 m4 l4 xl4">
    //                     <i className="material-icons activator right" title="details">turned_in</i>
    //                     </div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col s6 m6 l6 xl6">
    //                     <span className="grey-text text-darken-4">Status</span>
    //                     </div>
    //                     <div className="col s6 m6 l6 xl6">
    //                   <span className="myItemsVals teal-text text-darken-3">{(item.status).toUpperCase()}</span>
    //                     </div>
    //                 </div>
   
    //                 <div className="row">
    //                     <div className="col s6 m6 l6 xl6">Country -</div>
    //                   <div className="myItemsVals col s6 m6 l6 xl6">{item.country}</div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col s6 m6 l6 xl6">Region -</div>
    //                    <div className="myItemsVals col s6 m6 l6 xl6">{item.region}</div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col s6 m6 l6 xl6">Post date -</div>
    //                     <div className="myItemsVals col s6 m6 l6 xl6">{item.post_time.date}-{item.post_time.month}-{item.post_time.year}</div>
    //                 </div>
                
    //             </div>
    //             <div className="card-action">
    //                 {item.post_creator_email === post_creator_email?
    //                 <Link to="/edit_post" className='center'><i className="material-icons">edit</i> Edit Post</Link>
    //                 :
    //                 <Link to="#report" className='center'><i className="material-icons">flag</i> Report</Link>
    //             }
    //                 {/* <Link to="/edit_post" className='right'>In-Active</Link> */}
    //             </div>
    //            <div className="card-reveal">
    //                <div className="row">
    //                    <div className="col s12 m12 l12 xl12">
    //                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
    //                    </div>
    //                </div>
    //                <div className="row">
    //                    <div className="col s6 m6 l6 xl6">
    //        <span className="card-title grey-text text-darken-4">{item.name}</span>
    //                    </div>
    //                    <div className="col s6 m6 l6 xl6">
    //        <span className="card-title teal-text text-darken-4">{(item.status).toUpperCase()}</span>
    //                        </div>
    //                </div>
    //                <div className="row">
    //                    <div className="myItemsVals col s12 m12 l12 xl12">Details</div>
    //                    <div className="col s12 m12 l12 xl12">
    //                    {item.description}.-
    //                    </div>
    //                </div>
    //                <div className="row">
    //                    <div className="myItemsVals col s12 m12 l12 xl12">Address</div>
    //                    <div className="col s12 m12 l12 xl12">
    //                    {item.location},{item.region},{item.country}
    //                    </div>
    //                </div>
    //                <div className="row">
    //                    <div className="myItemsVals col s12 m12 l12 xl12">Contact</div>
    //                    <div className="col s12 m12 l12 xl12">
    //                    contact info will be here.
    //                    </div>
    //                </div>
    //                <div className="row">
    //                    <div className="myItemsVals col s6 m6 l6 xl6">Follow</div>
    //                    <div className="myItemsVals col s6 m6 l6 xl6">
    //                        Report
    //                    </div>
    //                </div>
    //            </div>
    //            </div>
    //            </div>  
    //         ))
    //         :
    //         <div className="col s12 m12 l12 xl12">
    //             Sorry, There is no post to display.
    //         </div>
        }

                            </div>
                        </div>
                        <div className="col s12 m4 l4 xl2">
                            <Side_Links />
                        </div>
                    </div>
                </div>

                    <Footer />
                    <SubFooter />
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

export default connect(mapStateToProps, null)(Display_Posts);