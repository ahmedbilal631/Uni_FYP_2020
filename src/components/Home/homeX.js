import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import MySlider from '../Header/Slider/slider';
import Footer from '../Footer/Main_Footer/footer';
import SubFooter from '../Footer/Sub_Footer';
// import Post from '../AddPost/post';
import './home.css';

import Slide_Pic_2 from '../../media/slider/slide_pic_2.jpg';
import Slide_Pic_3 from '../../media/slider/slide_pic_3.jpg';
import Slide_Pic_4 from '../../media/slider/slide_pic_4.jpg';
import Slide_Pic_5 from '../../media/slider/slide_pic_5.jpg';




import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
import { set_posts } from '../../redux/actions/postAction/post_actions';


class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            new_name: '',
            new_email: '',
            new_number: '',
            new_country: '',
            new_password: '',
            new_profile_pic: '',
            accounts: [],
            //...........
            all_posts: this.props.posts,
            recent_posts:this.Get_Recent(this.props.posts),
            your_posts: [],
    }
  console.log('state from home', this.state);  
  }

    componentDidMount(){
        window.jQuery(document).ready(function(){
            window.jQuery('.parallax').parallax();})

            this.setState({
              recent_posts: this.Settings_Posts('recent')
            })

            console.log(
              this.Settings_Posts('recent')
            );
            console.log('state home after did ', this.state);
            
    }


    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.accounts,"next props")
    //     this.setState({
    //         accounts : nextProps.accounts
    //     })    
    // }

    Get_Recent=(get_posts)=>{
      let posts_array = get_posts.filter((i)=> i.post_status === 'active');
      let posts_array_length = posts_array.length;
      let recent_posts = [];
              //to get higher rank id
              let higher_id = 1000;
              for(let i = 0; i<posts_array_length; i = i+1){
                if(get_posts[i].post_id > higher_id){
                  higher_id = get_posts[i].post_id;
                  // console.log(higher_id, ' loop higher id');  
                }
              }
              //................................................ 
              //with indexing of recent posts
              // const index = state.findIndex((item)=>{return item.id === action.payload.id});
              let max_post = 4;
              if((posts_array_length -1) >= 4){
                for(let k = 0; k<max_post; k++){
                  const target_index =get_posts.findIndex((item) => { return item.post_id === higher_id});
                  if(target_index != -1){
                    // console.log(target_index, '+ve');
                    recent_posts.push(get_posts[target_index]);
                    higher_id = higher_id - 1;
                  }else{
                    // console.log(target_index, '-ve');
                    k= k -1;
                    higher_id = higher_id - 1;
                  }
                }
              }else{
                for(let k = 0; k<=(posts_array_length-1); k++){
                  const target_index =get_posts.findIndex((item) => { return item.post_id === higher_id});
                if(target_index != -1){
                  recent_posts.push(get_posts[target_index]);
                  higher_id = higher_id - 1;
                }else{
                  higher_id = higher_id - 1;
                }
              }
            }
      
      return recent_posts;
    }


    adder=()=>{
    console.log(this.state);
    let getStateData = this.state;
    // let account_data = 
    // console.log(account_data);
    
    
        this.props.addUser(
            {
                name: getStateData.new_name,
                email: getStateData.new_email,
                number: getStateData.new_number,
                country: '',
                profile_pic: getStateData.new_profile_pic,
                password: getStateData.new_password
            }
        );
        this.setState({
            new_name: '',
            new_email: '',
            new_number: '',
            new_country: '',
            new_password: '',
            new_profile_pic: ''
        });
    }
    ///....................................................................
    //posts setter
    Settings_Posts=(interest)=>{
      //get logged in user
  let user = this.props.user;
  let get_posts = this.state.all_posts;
    get_posts = get_posts.filter((item)=> item.post_status === 'active');
      // console.log(get_posts, 'get post');
      
      //recent post array.
      let recent_posts = [];
      
      //to extract interest related posts
      let posts_array_length = get_posts.length;
      
      //to get higher rank id
      let your_posts_temp = get_posts.filter((item)=> item.post_creator_email === user.email);
      your_posts_temp = your_posts_temp.filter((item)=> item.post_status === 'active');
      let your_posts_array_length = your_posts_temp.length;
      let higher_id_your = 1000;
      for(let i = 0; i<your_posts_array_length; i = i+1){
        if(your_posts_temp[i].post_id > higher_id_your){
          higher_id_your = your_posts_temp[i].post_id;
          // console.log(higher_id, ' loop higher id');  
        }
      }
      //................................................
      //your posts adjustment
      let your_posts = [];
      // console.log(your_posts, 'your post');
      if((your_posts_temp.length -1)>= 4){
        for(let k =0; k < 4; k++){
          const target_index =your_posts_temp.findIndex((item) => { return item.post_id === higher_id_your});
          if(target_index !== -1){
            your_posts.push(your_posts_temp[target_index]);
            higher_id_your = higher_id_your - 1;
          }else{
            k= k -1;
            higher_id_your = higher_id_your - 1;
          }
        }
      }else{
          for(let k =0; k < your_posts_temp.length; k++){
            const target_index =your_posts_temp.findIndex((item) => { return item.post_id === higher_id_your});
            if(target_index !== -1){
              your_posts.push(your_posts_temp[target_index]);
              higher_id_your = higher_id_your - 1;
            }else{
              k= k -1;
              higher_id_your = higher_id_your - 1;
            }
          }
        }

        //................................................
        //to get higher rank id
        let higher_id = 1000;
        for(let i = 0; i<posts_array_length; i = i+1){
          if(get_posts[i].post_id > higher_id){
            higher_id = get_posts[i].post_id;
            // console.log(higher_id, ' loop higher id');  
          }
        }
        //................................................ 
        //with indexing of recent posts
        // const index = state.findIndex((item)=>{return item.id === action.payload.id});
        let max_post = 4;
        if((posts_array_length -1) >= 4){
          for(let k = 0; k<max_post; k++){
            const target_index =get_posts.findIndex((item) => { return item.post_id === higher_id});
            if(target_index != -1){
              // console.log(target_index, '+ve');
              recent_posts.push(get_posts[target_index]);
              higher_id = higher_id - 1;
            }else{
              // console.log(target_index, '-ve');
              k= k -1;
              higher_id = higher_id - 1;
            }
          }
        }else{
          for(let k = 0; k<=(posts_array_length-1); k++){
            const target_index =get_posts.findIndex((item) => { return item.post_id === higher_id});
          if(target_index != -1){
            recent_posts.push(get_posts[target_index]);
            higher_id = higher_id - 1;
          }else{
            higher_id = higher_id - 1;
          }
        }
      }

      // console.log(recent_posts, 'for recent posts loop'); 
      //...............................................................
      
      //all post max display function
      // let target_post_index = Math.round(Math.random() * (posts_array_length -1));
      let all_posts = [];
      let target_post_index = 0;
      let previous_index = 0; //for retendancy test
      let previous_index_arr = [0]; //for retendancy test
      // let previous_indexX = 0; //for retendancy test
      if(posts_array_length >= max_post){
        for(let i = 0; i<max_post; i++){
          target_post_index =  Math.round(Math.random() * (posts_array_length -1));
          // console.log('current target', target_post_index);
          let temp_arr = previous_index_arr.filter((item)=> item === target_post_index);
          previous_index = temp_arr[temp_arr.length - 1];
          temp_arr= [];
          // console.log('current previous', previous_index, 'and temp', temp_arr);
            if(target_post_index !== previous_index){
            // if(target_post_index != previous_index[n]){
              // console.log('random indexes', target_post_index, posts_array_length-1);
              all_posts.push(get_posts[target_post_index]);
              previous_index_arr.push(target_post_index);
              // previous_indexX= target_post_index;
              // console.log('previous', previous_index_arr);                        
            }else{
              // console.log(target_post_index, '-ve');
              i = i - 1;
            }
          }
      }else{
        all_posts = get_posts;
      }
      // this.setState({
      //   all_posts: all_posts,
      //   recent_posts: recent_posts,
      //   your_posts: your_posts,
      // })
      localStorage.setItem('all_posts_length',all_posts.length);
      localStorage.setItem('recent_posts_length',recent_posts.length);
      localStorage.setItem('your_posts_length',your_posts.length);
        //..................................................................
        if(interest === 'recent'){
          return this.Card_Creator(recent_posts,user);
        } else if(interest === 'all'){
          return this.Card_Creator(all_posts,user)
          console.log('all');
        }else if(interest === 'your'){
          return this.Card_Creator(your_posts,user)
        }

    }
//card creator
Card_Creator=(display_list, user)=>{
  return (
    <div className="row">
    {display_list.length !== 0?                           
    display_list.map((item, index)=>(
        <div className="col s12 m6 l6 xl3" key={item.post_id}>
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
        <img className="activator" src={item.dp_image} alt="images/office.jpg" />
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
              <div className="myItemsVals col s6 m6 l6 xl6">{item.country}</div>
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


render() {
  

        return (
              <div className='mXi'>
                <NavBar />
                <div className="myHomeBodyX">
                <MySlider/>
                    </div>
                <div className="section white">
      <div className="myAppIntroSpace row container">
        <h2 className="myHeaderInHome header">Lets Find</h2>
        <p className="grey-text text-darken-3 lighten-3">
            You are welcome to Lets Find platform. We are present to here to help you always. 
            Lets find is a platform, where you can find your lost persons. This app can help you a lot in tracing your lost ones.</p>
          <p>---------</p>
      </div>
    </div>
      <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_5} alt="kjdsnf" /></div>
    </div>

    <div className="section white">
      <div className="row container">
        <h2 className="header">Recent Posts</h2>
        {this.Settings_Posts('recent')}
        <div className="row">
          <div className="col s12 m12 l12 xl12">
          {Number(localStorage.getItem('recent_posts_length')) !== 0?
          <Link to='/display_posts'>
          <button className="btn myUpdateBtnX myBtn" onClick={()=>{localStorage.setItem('interest','recent'); console.log("call for recent posts");
          }}>View all</button>
          </Link>
          :
          <Link to='/add_post'>
          <button className="btn myUpdateBtnX myBtn">Add your first post?</button>
          </Link>
          }
          </div>
        </div>
        <p className="grey-text text-darken-3 lighten-3 hide">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>

    <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_4} alt='asfjksl' /></div>
    </div>

    <div className="section white">
      <div className="row container">
        <h2 className="header">All Posts</h2>
        {this.Settings_Posts('all')}
        <div className="row">
          <div className="col s12 m12 l12 xl12">
            {Number(localStorage.getItem('all_posts_length'))!== 0?
          <Link to='/display_posts'>
          <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.props.set_posts({interest: 'your'}); console.log("call for all posts");
          }}>View all</button>
          </Link>
          :
          <Link to='/add_post'>
          <button className="btn myUpdateBtnX myBtn">Add your first post?</button>
          </Link>
          }
          </div>
        </div>
        <p className="grey-text text-darken-3 lighten-3 hide">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>


          <div className="myAdminMsgSpace container">
            <p className="myHeaderInHomeX">Ten Seconds!</p>
            <div className="row">
              <div className="col s12 m12 l12 xl12">
                <p className="myAdminMsgSpaceTxt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae amet, distinctio mollitia accusantium labore illum alias repellendus ad quidem omnis soluta dignissimos explicabo rerum sit cupiditate corporis ipsum nobis.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m12 l12 xl12">
                <p className="myAdminName center">
                  ___Zeeshan Asif -
                </p>
              </div>
            </div>
          </div>

      {/* <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_3} alt='asfjksl' /></div>
    </div> */}

    <div className="section white">
      <div className="row container">
        <h2 className="header">Your Posts</h2>
        {this.Settings_Posts('your')}
        <div className="row">
          <div className="col s12 m12 l12 xl12">
          {Number(localStorage.getItem('your_posts_length'))!== 0?
          <Link to='/display_posts'>
          <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.props.set_posts({interest: 'all'}); console.log("call for all posts");
          }}>View all</button>
          </Link>
          :
          <Link to='/add_post'>
          <button className="btn myUpdateBtnX myBtn">Add your first post?</button>
          </Link>
          }
          </div>
        </div>
        <p className="grey-text text-darken-3 lighten-3 hide">
          Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
      </div>

      {/* <div className="parallax-container">
      <div className="parallax"><img src={Slide_Pic_2} alt='asfjksl' /></div>
    </div> */}

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
        user: state.users,
    }
};

export default connect(mapStateToProps, {set_posts})(Home);