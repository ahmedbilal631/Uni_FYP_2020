import React, { Component } from 'react'
import NavBar from '../Header/NavBar2/navBar2';
import MySlider from '../Header/Slider/slider';
import Footer from '../Footer/Main_Footer/footer';
import SubFooter from '../Footer/Sub_Footer';

import './home.css';

import Slide_Pic_2 from '../../media/slider/slide_pic_2.jpg';
import Slide_Pic_3 from '../../media/slider/slide_pic_3.jpg';
import Slide_Pic_4 from '../../media/slider/slide_pic_4.jpg';
import Slide_Pic_5 from '../../media/slider/slide_pic_5.jpg';


import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {update_post} from '../../redux/actions/postAction/post_actions';



class Home extends Component {
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
  console.log('state from home', this.state);  
  }


    //component did mount here..
    componentDidMount(){
      window.jQuery(document).ready(function(){
        window.jQuery('.collapsible').collapsible();
      });

      window.jQuery(document).ready(function(){
            window.jQuery('.parallax').parallax();});


            // window.jQuery(document).ready(function(){
            //   window.jQuery('.scrollspy').scrollSpy()});
        }

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
            if(get_all_posts.length >= 3){
                console.log('yes I amin posts size reducer');
                
                // let get_index = 
                // const target_index =get_all_posts.findIndex((item) => { return item.post_id === higher_id});
                get_all_posts = get_all_posts.slice(Number(get_all_posts.length-3), Number(get_all_posts.length));
                console.log('post extractor before', get_all_posts);
            }
            get_all_posts.sort(this.Compare);
            // get_all_posts.reverse();
            //for all posts display
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
                get_all_posts.reverse();
                if(get_all_posts.length !== 0){
                    localStorage.setItem('your_posts_length',1)
                }
                console.log('post extractor your', get_all_posts);
            }else{
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
          <img className="activator" src={item.dp_image} alt="images/office.jpg" width={200} height={250} />
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
                <div className="myItemsVals col s6 m6 l6 xl6">{item.country}</div>
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
  //..................................................................
  //new card generator will be here...
  New_Card_Creator=(list)=>{
    let user = this.state.user;
    console.log('call to new card creator - given list -', list);
    return(
       <ul className="collapsible">
            {list.length !== 0?
          list.map((i, index)=>(
          <li  key={i.post_id}>
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
  onClick={()=>{localStorage.setItem('reported_post_id', i.post_id); localStorage.setItem('msg_type', 'report'); this.Report(i.post_id)}}
  >Report</button>
  </Link>
</div>
</div>
}

{/* <span>Lorem ipsum dolor sit amet.</span> */}
</div>
            </li>
          )):
          <div className="col s12 m12 l12 xl12 center">
    <div className="collapsible-header">
      Sorry, There is no post to display.
    </div>
    <div className="collapsible-body">
        <Link to='/add_post'> 
        <button className="btn myBtn" >Add new post?</button>
        </Link>
    </div>
</div>
          }
          </ul>
    )
    
}
//................................................................
Report= (reported_id)=>{
  //........................time...............
  let yr = new Date().getFullYear();
  let mn = new Date().getMonth();
  let dt = new Date().getDate();
  //.........................................
  //...........[post deal].............//
  let get_post_extract = this.state.all_posts.filter((i)=>i.post_id === reported_id)[0];
  console.log('home reported', get_post_extract);
  this.props.update_post({
    post: {
      post_id: get_post_extract.post_id,
      name : get_post_extract.name,
      status: get_post_extract.status,
      gender: get_post_extract.gender,
      age_group: get_post_extract.age_group,
      disability: get_post_extract.disability,
      location: get_post_extract.location,
      country: get_post_extract.country,
      region: get_post_extract.region,
      description: get_post_extract.description,
      dp_image: get_post_extract.dp_image,
      image_name: get_post_extract.image_name,
      post_time: get_post_extract.post_time,
      post_creator_email: get_post_extract.post_creator_email,
      post_creator_name: get_post_extract.post_creator_name,
      post_status: get_post_extract.post_status, //active , disabled, resolved
      notification_id: get_post_extract.notification_id,
      isReported: true,
      reported_by: this.state.user.name,
      post_time: {
          // month-year
          date: dt, //0-30
          month: mn + 1, //0-11
          year: yr, //0-now
      },
  }
  })

}

//...........................................................
    render() {
        // this.Post_Extractor();
        return (
            <div>
                <div className='row'>
                    <NavBar />
                    <MySlider />
                </div>
                <div className="row">
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
        {this.New_Card_Creator(this.Post_Extractor('recent'))}
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
        {/* <h2 className="header">All Posts</h2> */}
        {/* {this.New_Card_Creator(this.Post_Extractor('all'))} */}
        <div className="row">
          <div className="col s12 m12 l12 xl12">
          </div>
        </div>
        <p className="grey-text text-darken-3 lighten-3 hide">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
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
        {this.New_Card_Creator(this.Post_Extractor('your'))}
        <div className="row">
          <div className="col s12 m12 l12 xl12">
          {Number(localStorage.getItem('your_posts_length'))!== 0?
          <Link to='/display_posts'>
          <button className="btn myUpdateBtnX myBtn" onClick={()=>{localStorage.setItem('interest','your'); console.log("call for your posts");
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
                 
                </div>

                <div>
                    <Footer />
                    <SubFooter />
                </div>
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


export default connect(mapStateToProps, {update_post,})(Home); 