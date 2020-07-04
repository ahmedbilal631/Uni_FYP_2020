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
import By_age_search from './by_age_search';

//redux
import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
import { set_posts, loadData, all_post } from '../../redux/actions/postAction/post_actions';
import {  read_notification, loadDataUser } from '../../redux/actions/UserAction/index';


class Search extends Component {
state =  {
    posts: [],
    user: {},
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

    //......
    proceed_search: false,
    show_results: false,
    display_posts: [],
}

        //..........................................    
        componentDidMount(){
            
            //   this.setState({
            //       posts: this.props.loadData(),
            //       user: this.props.loadDataUser(),
            //   });
            //   this.props.loadData();         
            //   this.props.loadDataUser();
              
              //range selectors
            //   var slider = document.getElementById('test-slider');
            //   noUiSlider.create(slider, {
            //    start: [20, 80],
            //    connect: true,
            //    step: 1,
            //    orientation: 'horizontal', // 'horizontal' or 'vertical'
            //    range: {
            //      'min': 0,
            //      'max': 100
            //    },
            //    format: wNumb({
            //      decimals: 0
            //    })
            //   });
                   
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
                textX = event.target.value
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
                    posts: [],
                    user: {},
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
                                        <div>{
                                            this.state.display_posts.map((item, index)=>(
                                                <div className="col s12 m6 l6 xl4" key={item.post_id}>
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
                        }
                              <p>
                                <button className=" btn waves-effect waves-light myBtn" onClick={()=>{this.setState({show_results: false})}} >Back to search</button>
                              </p>
                          </div>
                          :
                          <div className="col s12 m12 l12 xl12 center">
                              Sorry, There is no post found to display.
                          </div>
                                        }
                                            </div>
                                        :
                                    <div>
                                        {/* <div>Choose your options</div> */}

                                        <div>
                                            <p>
                                            <select className='myFormBox' onChange={this.handleStatusChange}>
                                                <option value={status} disabled >Choose person status</option>
                                                  <option value="missing">Missing</option>
                                                  <option value="found">Found</option>
                                    </select>
                                            </p>
                                            <p>
                                        <select  className='myFormBox' onChange={this.handleAgeChange}>
                                                <option value={age_group} disabled >Select age group</option>
                                                <option value="14">Under-15 yrs</option>
                                                <option value="18">16-20 yrs</option>
                                                <option value="23">21-25 yrs</option>
                                                <option value="27">26-30 yrs</option>
                                                <option value="33">31-35 yrs</option>
                                                <option value="37">36-40 yrs</option>
                                                <option value="43">41-45 yrs</option>
                                                <option value="47">46-50 yrs</option>
                                                <option value="54">Above-50 yrs</option>
                                              </select>
                                            </p>
                                        </div>
                                        <div>
                                        <select  className='myFormBox' onChange={this.handleGenderChange}>
                                              <option value={gender} disabled >Choose gender</option>
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
                                              <option value={disability} disabled>Choose disability (if any)</option>
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
    }
};

export default connect(mapStateToProps, {set_posts, read_notification, loadData, loadDataUser})(Search);
// export default Search