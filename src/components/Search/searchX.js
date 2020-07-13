import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import './search.css';
// 
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import Side_Links from '../Side_Panel/side_links';
// import By_age_search from './by_age_search';

//redux
import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
// import { set_posts, loa } from '../../redux/actions/postAction/post_actions';
// import {  read_notification } from '../../redux/actions/UserAction/index';


class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            search_way: 'none',
            age_group : '',
            location: '',
            name : '',
            status: '',
            gender:'',
            // age_group: '',
            disability: '',
            // location:'',
            country:'',
            region: '',
            description:'',
            resloved: false,
            // password:'',
            dp_image: '',
            post_time: '',

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
            //...................
            proceed_search: false,
            show_results: false,
            display_posts: [],
    }
  console.log('state from search page', this.state);  
  }
  ///..................................................................


        //..........................................    
        componentDidMount(){
            window.jQuery(document).ready(function(){
                window.jQuery('.collapsible').collapsible();
              });
            window.jQuery(document).ready(function(){
                window.jQuery('.scrollspy').scrollSpy()});
     
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
// Capitalize= (s)=>{
//     let flag = false;
//     let full_str = 'Not_mentioned.'
//     if(s === ''){
//         return 'Not mentioned.';
//     }else{
//         let collect = s.toString();
//         let first_letter= collect.slice(0, 1);
//         let second_letter= collect.slice(1);
//          full_str = first_letter.toUpperCase() + second_letter.toLowerCase();
//          return full_str;
//         }
// };
//.............................................


//Search filter functions...............................
ChangeSearchWay =(filter)=>{
    console.log('change filter');
        this.setState({
            search_way : filter
        })
}
//.......................................................
        //age handling control
        handleAgeChange=event=>{
            let textX = this.state.age_group;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                age_group: textX,
                proceed_search: true,
            });
        }
        //...............................................
        //location handling control
    //country selector
    selectCountry (val) {
        this.setState({ country: val,
            proceed_search: true,
        });
    }
    //........................................
    //Region selector
    selectRegion (val) {
        this.setState({ 
            proceed_search: true,
            region: val });
        }
        //........................................
        //disability  control
        handleDisabilityChange=event=>{
            let textX = this.state.disability;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                proceed_search: true,
                disability: textX
            });
        }
        //...........................................
        //image handling control
            handleImgChange=event=>{
                let textX = this.state.dp_image;
                textX = event.target.files[0];
                console.log(textX, 'image path');
                this.setState({
                    dp_image: textX,
                    proceed_search: true,
                });
            }   
            //...........................................
            //name editing
            handleNameChange=event=>{
                
                let textX = this.state.name;
                textX = event.target.value
                // console.log(textX);
                this.setState({
                    name: textX,
                    proceed_search: true,
                    // name: textX.name
                });
            }

            //............................................
            //gender editing control
            handleGenderChange=event=>{
                let textX = this.state.gender;
                textX = event.target.value
                // console.log(textX);
                this.setState({
                    gender: textX,
                    proceed_search: true,
                });
            }
            
            //...........................................
            //status control
            handleStatusChange=event=>{
                let textX = this.state.status;
            textX = event.target.value
            // console.log(textX, 'yes status change');
            this.setState({
                status: textX,
                proceed_search: true,
            });
        }
        //...........................................
            


            //Main search functions
            Search=(post_arr)=>{
                let given_arr = post_arr;
                let arr_length = post_arr.length;
                let temp = [];
                let final = [];
                //To start search
                if(this.state.proceed_search){
                    
                    //by status
                    if(this.state.status !== ''){
                        temp = given_arr.filter((i)=> i.status === this.state.status);         
                 }else{
                     console.log('temp found empty in search', temp);
                     temp = given_arr;
                    }
                    let temp_length = temp.length;
                    //by age                
                    console.log(this.state.age_group);
                    if(temp_length !== 0 && this.state.age_group !== ''){
                        temp = temp.filter((i)=> i.age_group === this.state.age_group);         
                 }else{
                     console.log('temp found empty in search', temp);
                 }
                //  for(let i = 0; i<arr_length; i++){
                //     if(given_arr[i].age_group === this.state.age_group){
                //         temp.push(given_arr[i]);
                //     }
                // }
                final = temp;
                console.log(final, 'from search after age');
                //by gender
                if(temp_length !== 0 && this.state.gender !== ''){
                    temp = temp.filter((i)=> i.gender === this.state.gender);         
                }else{
                    console.log('temp found empty in search', temp);
                }
                final = temp;
                console.log(final, 'from search after gender');
                //by location
                temp_length = temp.length;
                if(temp_length !== 0 && this.state.country !== ''){
                   temp = temp.filter((i)=> i.country === this.state.country);         
                }else{
                    console.log('temp found empty in search', temp);      
                }
                final = temp;
                console.log(final, 'from search after country');
                //
                temp_length = temp.length;
                if(temp_length !== 0 && this.state.region !== ''){
                    temp = temp.filter((i)=> i.region === this.state.region);         
                }else{
                    console.log('temp found empty in search', temp);      
                }
                final = temp;
                console.log(final, 'from search after region');
                //by disability
                temp_length = temp.length;
                if(temp_length !== 0 && this.state.disability !== ''){
                    temp = temp.filter((i)=> i.disability === this.state.disability);         
                }else{
                    console.log('temp found empty in search', temp);      
                }
                final = temp;
                console.log(final, 'from search after disability');
                
                
                //empty the state
                this.setState({
                    // posts: [],
                    // user: {},
                    search_way: 'none',
                    age_group : '',
                    location: '',
                    name : '',
                    status: '',
                    gender:'',
                    // age_group: '',
                    disability: '',
                    // location:'',
                    country:'',
                    region: '',
                    description:'',
                    resloved: false,
                    // password:'',
                    dp_image: '',
                    post_time: '',
                    
                    //....
                    display_posts : final,
                    show_results: true
                    
                });
            }else{
                console.log('no search option selected.');
                toast('Kindly choose some search criteria.',  {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                
            }
            }
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
<div className="card-image">
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

</div>
</div></div>
{/*......*/}          
</div>
<div className="collapsible-body">
<p><span className="card-title grey-text text-darken-4">{i.name} </span> is <span className="myItemsVals teal-text text-darken-3">{(i.status).toUpperCase()}</span></p>
<p>The location is <span className='myItemsVals'> {i.location} , {i.region} , {i.country}</span>.</p>  
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

    render() {

        //....................................................State.................
        const { country, region,
            name,
            status,
            gender,
            // number: '',
            age_group,
            disability,
            location,
            description,
        dp_image } = this.state;
///...................................................................

            //grab posts
    let get_posts = this.props.posts;
    //grab notifications
    // let get_notifications = this.props.notifications;
    // console.log('notifications',get_notifications);
    
    // //grab user
    let user = this.props.user;
    console.log('state=search', this.state);
    
    
    // //to get today date..........................
    //         let yr = new Date().getFullYear();
    //         let mn = new Date().getMonth();
    //         let dt = new Date().getDate();
    //         let hr = new Date().getHours().toString();
    //         let min = new Date().getMinutes().toString();
    //         let get_time =Number( yr.toString()+(mn + 1).toString()+dt.toString());
    //         console.log(get_time, 'form time number notification page');



    // //posts extract acc to notification
    // let notified_post = [];
    // let temp = [];
    // // console.log('user read array from nav',user.notification_read, JSON.parse(localStorage.getItem('saved_read_notifications')));
    
    // for (let k = 0; k<get_notifications.length; k++){
    //     if(get_notifications[k].notification_date >= (get_time - 2)){
    //         temp.push(get_notifications[k]);
    //     }
    // }
    // console.log('let temp', temp, 'get', get_notifications, 'from notifications page');
   
    // for(let i = 0; i<temp.length; i++){
    //     for(let j = 0; j<get_posts.length; j++){
    //         if(temp[i].post_id === get_posts[j].post_id){
    //             notified_post.push(get_posts[j]);
    //         }
    //     }
    // }
    // notified_post.reverse();
    // console.log('notified posts', notified_post);

    // //.................................................................


    // let all_notified_post = [];
    // let push_flag = [];
    // for(let y = 0; y<temp.length; y++){
    //     get_notifications = get_notifications.filter((item)=> item.notification_date !== temp[y].notification_date);

    // }

    // console.log('all notis', get_notifications);
    




        return (
            <div className="myNotiMainBody">
                <NavBar />
                <div className="myAdBox">
                <p className="myPageTitle">SEARCH</p>
                <div>
        {/* <button onClick={()=>{toast('yes I am here..')}}>Notify !</button> */}
        <ToastContainer />
      </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl9">
                            <div className="myLeftPanel">
                                {
                                    this.state.show_results === true?
                                    <p className="myPanelTitle">
                                        Found results- ({this.state.display_posts.length}) _only.
                                    </p>
                                    :
                                    <p className="myPanelTitle">
                                    Lets make a new search!
                                    </p>
                                }
                                <div className="mySearchBox">
                                    {
                                        this.state.show_results === true?
                                        <div className="row">
                                            {this.state.display_posts.length !== 0?
                                        <div>
                                            
                                            {this.New_Card_Creator(this.state.display_posts)}
                                            
                              <p>
                                <button className=" btn waves-effect waves-light myBtn" onClick={()=>{this.setState({show_results: false})}} >Back to search</button>
                              </p>
                          </div>
                          :
                          <div className="col s12 m12 l12 xl12 center">
                              Sorry, There is no post found to display.
                          <button className=" btn waves-effect waves-light myBtn" onClick={()=>{this.setState({show_results: false})}} >Back to search</button>
                          </div>
                                        }
                                            </div>
                                        :
                                    <div>
                                        {/* <div>Choose your options</div> */}

                                        <div>
                                            <p>
                                            <select className='myFormBox' onChange={this.handleStatusChange}>
                                                <option value={status} >Choose person status</option>
                                                  <option value="missing">Missing</option>
                                                  <option value="found">Found</option>
                                    </select>
                                            </p>
                                            <p>
                                    <select className='myFormBox'  onChange={this.handleAgeChange}>
                                      <option value={age_group} >Choose your option</option>
                                      <option value="Under-5 yrs">Under-5 yrs</option>
                                      <option value="6-10 yrs">6-10 yrs</option>
                                      <option value="11-15 yrs">11-15 yrs</option>
                                      <option value="16-20 yrs">16-20 yrs</option>
                                      <option value="21-25 yrs">21-25 yrs</option>
                                      <option value="26-30 yrs">26-30 yrs</option>
                                      <option value="31-35 yrs">31-35 yrs</option>
                                      <option value="36-40 yrs">36-40 yrs</option>
                                      <option value="41-45 yrs">41-45 yrs</option>
                                      <option value="46-50 yrs">46-50 yrs</option>
                                      <option value="Above-50 yrs">Above-50 yrs</option>
                                    </select>
                                            </p>
                                        </div>
                                        <div>
                                        <select  className='myFormBox' onChange={this.handleGenderChange}>
                                              <option value={gender}  >Choose gender</option>
                                              <option value="male">Male</option>
                                              <option value="female">Female</option>
                                              <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                        <p className='myFormBox'>                                 
                                    <CountryDropdown
                                     style={{border:'none'}}
                                     value={country}
                                     onChange={(val) => this.selectCountry(val)} />
                                     </p>
                                     {
                                         this.state.country === ''?
                                         <></>
                                         :
                                     <p className='myFormBox'>
                                     <RegionDropdown
                                     style={{border:'none'}}
                                     country={country}
                                     value={region}
                                     onChange={(val) => this.selectRegion(val)} />
                                     </p>
                                    }
                                        </div>
                                        <div>
                                        <select  className='myFormBox' onChange={this.handleDisabilityChange}>
                                              <option value={disability} >Choose disability (if any)</option>
                                              <option value="Mentally Disable">Mentally Disable</option>
                                                <option value="Hearing Loss/Deafness">Hearing Loss/Deafness</option>
                                                <option value="Memory Loss">Memory Loss</option>
                                                <option value="Speech/Language Disorder">Speech/Language Disorder</option>
                                                <option value="Vision Loss/Blindness">Vision Loss/Blindness</option>
                                                <option value="Any Physical Disability">Any Physical Disability</option>
                                                <option value="Others">Others</option>
                                                <option value="Not Disbaled">Not Disbaled</option>
                                            </select>
                                        </div>
                                        <div>
                                            {this.state.dp_image !== ''?
                                                    // <img src={require('../../media/dp_replacement.png')}  alt="Add_post Image" className='dp_styleXX circle responsive-img'/> */}
                                                    <p className='myFormPicBox'>
                                                   'your uploaded image is - ' + 
                                                    
                                                        {dp_image}
                                                    </p>
                                                    
                                                                                                        :
                                            
                                          <p className='myFormPicBox' style={{padding:'8px'}}>
                                                <input type="file" accept="image/*" onChange={this.handleImgChange} className="myAPImgUploadBtnX"/>
                                            </p>
                                            
                                            }
                                        </div>
                                            <button className=" btn waves-effect waves-light myBtn" onClick={()=>{this.Search(get_posts)}} >Search</button>
                                    </div>

                                    }

                                </div>
                                <div className="myPanelList">

                                </div>
                            </div>
                        </div>
                        <div className="col s0 m1 l1 xl1"></div>

                        <div className="col s12 m3 l3 xl2">
                        <div className="section table-of-contents">
                            <Side_Links />                                       
                            </div>
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
    }
};

export default connect(mapStateToProps, null)(Search);
// export default Search