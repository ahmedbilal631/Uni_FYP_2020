import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import Side_Links from '../Side_Panel/side_links';
// import './editProfileStyle.css';

import {Link} from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

//firebase storage
import {storage} from '../../firebase/config';

import {connect} from 'react-redux';
import {add_post, update_post, loadData, del_post} from '../../redux/actions/postAction/post_actions';
import {update_notification, del_notification} from '../../redux/actions/NotificatoinsAction/index';
import Dp_Replacement from '../../media/dp_replacement.png'

import ProgressBar from 'react-customizable-progressbar';


class Edit_post extends Component {
    constructor(props){
        super(props);
        let get_post_data = this.props.posts.filter((item)=> item.post_id === localStorage.getItem('edit_post_code'))[0];
        // console.log('getPostData', get_post_data);
        

        this.state ={
            edit: false,
            isEmpty: false,
            re_enter: false,            
                name : get_post_data.name,
                status: get_post_data.status,
                gender: get_post_data.gender,
                age_group: get_post_data.age_group,
                disability: get_post_data.disability,
                location: get_post_data.location,
                country: get_post_data.country,
                region: get_post_data.region,
                description: get_post_data.description,
                // resloved: false,
                post_status: get_post_data.post_status,
                notification_id : '',
                // password:'',
                dp_image: get_post_data.dp_image,
                image_name: get_post_data.image_name,
                post_time: get_post_data.post_time,
                posts_income: this.props.posts,
                ex_post: this.props.posts.filter((item)=> item.post_id === localStorage.getItem('edit_post_code'))[0],
                ex_notification: this.props.notifications.filter((item)=> item.post_id === localStorage.getItem('edit_post_code'))[0],

                //............
                confirmUpload: false,
                isUploading: false,
                progress: 0,
                ///.,,,,,,,,,,,,
                new_image_file: '',
                new_image_name: '',

            // recievedUsers: this.props.recievedUsers,
    }
    // console.log(this.state, 'from construct');    
}

//...................................................


    componentDidMount(){
        console.log(
            this.props.posts  );
            console.log('state', this.state);
            window.jQuery(document).ready(function(){
                window.jQuery('.modal').modal();
              });
            // process
            
            
    }


    //...................................
        //status control
        handleStatusChange=event=>{
            let textX = this.state.status;
            textX = event.target.value
            // console.log(textX, 'yes status change');
            this.setState({
                status: textX
            });
        }
        //...........................................
    //name editing
    handleNameChange=event=>{

        let textX = this.state.name;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            name: textX
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
                gender: textX
            });
        }
    
        //...........................................
        //email editing control
        handleAgeChange=event=>{
        let textX = this.state.age_group;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            age_group: textX
        });
    }
    //...........................................
        //address editing control
        handleLocationChange=event=>{
            let textX = this.state.location;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                location: textX
            });
        }    
        //...........................................
            //disability  control
    handleDisabilityChange=event=>{
        let textX = this.state.disability;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            disability: textX
        });
    }
    //...........................................
         //Country editing control
    //     handleCountryChange=event=>{
    //     let textX = this.state.country;
    //     textX = event.target.value
    //     // console.log(textX);
    //     this.setState({
    //         country: textX
    //     });
    // }
    //...........................................
    //country selector
    selectCountry (val) {
        this.setState({ country: val });
      }
      //........................................
      //Region selector
      selectRegion (val) {
        this.setState({ region: val });
      }
      //........................................
        //number editing control
        handleNumberChange=event=>{
            let textX = this.state.number;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                number: textX
            });
        }
        //...........................................
          //description editing control
          handleDescriptionChange=event=>{
            let textX = this.state.description;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                description: textX
            });
        }
        //...........................................
        //email editing control
        handleImgChange=event=>{
            // let textX = this.state.new_image_file;
            let textX = null;
            textX = event.target.files[0];
            console.log(textX, 'image path');
            this.setState({
                new_image_file: textX,
                new_image_name:textX.name,
                confirmUpload: true,
            });
        }   
        //...........................................
                //post status control
                handlePostStatusChange=event=>{
                    let textX = this.state.post_status;
                    textX = event.target.value
                    // console.log(textX, 'image path');
                    this.setState({
                        post_status: textX
                    });
                }   
                //...........................................
    //state checker before update
    Checker=()=>{
        let captureState = this.state;

        if(captureState.dp_image === ''){
            this.setState({
                dp_image: captureState.ex_post.dp_image
            })
            }
            else if(captureState.image_name === ''){
                this.setState({
                    image_name: captureState.ex_post.image_name
                })
            }
        if(captureState.name === ''){
            alert('name is empty');
            }
            else if(captureState.age_group === ''){
                alert('plz select an age group');
                }
                else if(captureState.status === ''){
                alert('Please select status');
                }
                    else if(captureState.gender === ''){
                        alert('Please select a gender');
                        }
                        else if(captureState.disability === ''){
                            alert('Please identify any disability?');
                            }
                                else if(captureState.location === ''){
                                    alert('Kindly enter a location address.');
                                    }
                                    else if(captureState.country === ''){
                                        alert('Please make sure country name.')}
                                        else{
                                            this.UpdateNow(captureState.ex_post, captureState.ex_notification);
                                          }
                                        
                                            
    }
    //..............................................
    //add function
    UpdateNow=(old_post, old_notification)=>{
     
        //time identity in a post
      let yr = new Date().getFullYear();
      let mn = new Date().getMonth();
      let dt = new Date().getDate();
      let hr = new Date().getHours().toString();
      let min = new Date().getMinutes().toString();
      let get_time =Number( yr.toString()+(mn + 1).toString()+dt.toString());
      console.log(get_time, 'form time number add_post');
      this.setState({
          post_time: get_time
      })
      //......................3...................
        // console.log(this.state, 'state from add post');
        
            this.props.update_post({
                post: {
                post_id: old_post.post_id,
                name : this.state.name,
                status: this.state.status,
                gender: this.state.gender,
                age_group: this.state.age_group,
                disability: this.state.disability,
                location: this.state.location,
                country: this.state.country,
                region: this.state.region,
                description: this.state.description,
                dp_image: this.state.dp_image,
                image_name: this.state.image_name,
                post_time: this.state.post_time,
                post_creator_email: this.props.user.email,
                post_creator_name: this.props.user.name,
                post_status: this.state.post_status, //active , disabled, resolved
                notification_id: old_notification.notification_id,
                post_time: {
                    // month-year
                    date: dt, //0-30
                    month: mn + 1, //0-11
                    year: yr, //0-now
                },
            }})

            this.props.update_notification({
                notification: {
                    notification_id: old_notification.notification_id,
                    post_id: old_post.post_id,
                    post_creator_id: this.props.user.user_id,
                    notification_date: get_time,
                    notification_status: 'updated', //posted , updated
                }
            })


            // this.setState({
            //     edit: false,
            //     isEmpty: false,
            //     re_enter: false,            
            //         name : '',
            //         status: '',
            //         gender:'',
            //         // number: '',
            //         age_group: '',
            //         disability: '',
            //         location:'',
            //         country:'',
            //         region: '',
            //         description:'',
            //         resloved: false,
            //         // password:'',
            //         dp_image: '',
            // });
            localStorage.removeItem('edit_post_code');
            window.history.back();
            
        }
        //...............................................
        
        //Re-enter function

//..........................................
//to delete a post

Delete=(id)=>{
this.props.del_post({
    id: id
});
this.props.del_notification({
    id: id
})
this.HandleImageDelete();
localStorage.removeItem('edit_post_code');
window.history.back();
// window.history.back();
}

//...........................................
//function to close the modal
closeModal=()=>{
        // alert('yes close');

        window.jQuery(document).ready(function(){
            window.jQuery('.modal').sidenav('close');
          });   
}
//...........................................
//image manipulations
ChangeImageTemp = ()=>{
    // this.fileInput.click();
    // if(this.state.isUploading){
    //     console.log('yes uploading');

    // }
    this.HandleImageUpload()
}
//to delete image on server
HandleImageDelete=()=>{
    console.log('ex post is',this.state.ex_post);
    
    const image_name= this.state.ex_post.image_name;
    let imageRef = storage.ref(`images/${image_name}`);
imageRef
  .delete()
  .then(() => {
    console.log(`${image_name}has been deleted successfully.`);
  })
  .catch((e) => console.log('error on image deletion => ', e));
}
//............................................
        //function to upload
        HandleImageUpload=(posts, notifications)=>{
            const image = this.state.new_image_file;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
              'state_changed',
              snapshot=>{
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes)*100
                );
                this.setState({
                  progress: progress
                });
              },
              error =>{
                console.log(error);
              },
              ()=>{
                storage
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                  console.log(url);
                  this.setState({
                    dp_image: url,
                    image_name:image.name,
                    confirmUpload: false,
                    isUploading: false,
                  });
                  this.HandleImageDelete();
                //   this.Checker(posts, notifications);
                });
            }
            );
        };






///................................................................................
    render() {
        let acc = this.props.posts[0];
        let posts_state = this.props.posts;
        let notifications_state = this.props.notifications;
        // console.log(posts_state, 'current store');
        let local_posts = JSON.parse(localStorage.getItem('posts_state'));
        // console.log('from local storage', local_posts);
        
        const { country, region,
            name,
            status,
            gender,
            // number: '',
            age_group,
            disability,
            location,
            description,
            progress,
            isUploading,
            confirmUpload,
            image_name,
            new_image_name,
        dp_image, ex_post, post_status } = this.state;

//to get
//set values in the component state
let grab_post_code = Number(localStorage.getItem('edit_post_code'));
// console.log(grab_post_code);

let extract_post = posts_state.filter((i)=> i.post_id === grab_post_code);
// this.Set_Data(extract_post);
// console.log('before set data', extract_post);






        return (
              <div className='mX'>
                <NavBar />
                <div className="myAdBox">
                    <p className="myPageTitle">
                        EDIT POST
                    </p>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl10">
                            <div>

                            <table>
                                <tbody>

                                    {/* {this.state.isEmpty?
                                    <tr>
                                    <td className='myProfileItemTitle'>Name</td>
                                    <td className='myProfileItemEmptyTxt'>You enter no new name?</td>    
                                    <td>
                                        <button onClick={()=>{this.setState({re_enter: true})}} className="btn red">Re-enter</button>
                                        </td>
                                    <td>
                                        <button onClick={()=>{this.setState({re_enter: false, isEmpty: false})}} className="btn red" >Ignore</button>
                                    </td>
                                    </tr>
                                : */}


                                    {/* } */}

                                    <tr>
                                    <td className='myProfileItemTitle'>Post Status</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handlePostStatusChange}>
                                      <option value={post_status} disabled selected>{(post_status).toUpperCase()}</option>
                                      <option value="active">Active</option>
                                      <option value="disabled">Disable</option>
                                      <option value="resolved">Resolved</option>
                                    </select>
                                    </td>
                                </tr>
                                    <tr>
                                    <td className='myProfileItemTitle'>Status</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleStatusChange}>
                                <option value={status} disabled selected>{(status).toUpperCase()}</option>
                                      <option value="missing">Missing</option>
                                      <option value="found">Found</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>    
                                    <td className='myProfileItemTitle'>Person Name</td>
                                    <td colSpan="2">
                                      <input placeholder="Person Name" value={name} onChange={this.handleNameChange} id="person_name" type="text" className="myAPTxtBox validate" />
                                    </td>
                                    </tr>

                                <tr>
                                    <td className='myProfileItemTitle'>Gender</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleGenderChange}>
                                      <option value={gender} disabled selected>{(gender).toUpperCase()}</option>
                                      <option value="male">Male</option>
                                      <option value="female">Female</option>
                                      <option value="other">Other</option>
                                    </select>
                                    </td>
                                </tr>                                    
                                <tr>
                                    <td className='myProfileItemTitle'>Age Group</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleAgeChange}>
                                <option value={age_group} >{age_group}</option>
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
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Disability</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleDisabilityChange}>
                                <option value={disability}>{disability}</option>
                                      <option value="Mentally Disable">Mentally Disable</option>
                                        <option value="Hearing Loss/Deafness">Hearing Loss/Deafness</option>
                                        <option value="Memory Loss">Memory Loss</option>
                                        <option value="Speech/Language Disorder">Speech/Language Disorder</option>
                                        <option value="Vision Loss/Blindness">Vision Loss/Blindness</option>
                                        <option value="Any Physical Disability">Any Physical Disability</option>
                                        <option value="Others">Others</option>
                                        <option value="Not Disbaled">Not Disbaled</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Location</td>
                                    <td colSpan="2">
                                        <input placeholder="Person's Location" value={location} onChange={this.handleLocationChange} id="address"  type="text" className="myAP/TxtBox validate"  />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Country</td>
                                    <td colSpan="2">
                                    <CountryDropdown
                                     style={{border:'none'}}
                                     value={country}
                                     onChange={(val) => this.selectCountry(val)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Region</td>
                                    <td colSpan="2">
                                     <RegionDropdown
                                     style={{border:'none'}}
                                     country={country}
                                         value={region}
                                         onChange={(val) => this.selectRegion(val)} />
                                    </td>
                                </tr>                                
                                {/* <tr>
                                    <td className='myProfileItemTitle'>Phone #</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                            <input placeholder={acc.number} id="phone" onChange={this.handleNumberChange} type="tel" className="myAP/TxtBox validate"  />
                                        :
                                        acc.number                                       
                                    }
                                    </td>
                                </tr> */}
                                <tr>
                                    <td className='myProfileItemTitle'>Description</td>
                                    <td colSpan="2">
                                    <textarea id="textarea1APX" value={description} onChange={this.handleDescriptionChange} placeholder="Discription" className="materialize-textarea"></textarea>
                                    </td>
                                </tr>
                                    {
                                        dp_image !== ''?
                                        confirmUpload?
                                        <tr>
                                            {
                                                isUploading?
                                                <td colSpan='3'>
                                       <div class="card">
                                        <div class="card-content">
                                         Uploading........ Wait
                                         </div>
                                                 <ProgressBar
                                                    radius={100}
                                                    progress={progress}
                                                        strokeWidth={18}
                                                        //    strokeColor="#a0d468"
                                                           strokeColor="teal"
                                                           className='your-indicator '
                                                                strokeLinecap="round"
                                                                    trackStrokeWidth={18}
                                                                        counterClockwise
                                                >
                                                   <div className="indicator">
                                                        <div>{progress}%</div>
                                                    </div>
                                             </ProgressBar>
                                             <div class="card-action">
                                                 </div></div>
                                                </td>
                                                :
                                                <td colSpan='3'>
                                       <div class="card">
                                        <div class="card-content">
                                         Selected image is {new_image_name}
                                         </div>
                                                <button className="bt000000000n myUpdateBtnX" onClick={()=>{this.setState({isUploading: true}); this.ChangeImageTemp()}}>Confirm change</button>    
                                                <div class="card-action">
                                                 <button onClick={()=>{this.setState({confirmUpload: false})}}>Cancel</button>
                                                 </div></div>
                                                </td>
                                            }
                                        </tr>
                                        :
                                        <tr>
                                        <td colSpan='3'>
                                        <div class="card">
                                        <div class="card-content">
                                         your uploaded image is
                                         </div>
                                       <div class="card-image">
                                        <img src={dp_image} />
                                         </div>
                                        <div class="card-action">
                                        <input type="file" accept="image/*" onChange={this.handleImgChange} className="myAPImgUploadBtnX"/>
                                          {/* <button onClick={this.ChangeImageTemp}>Change image</button> */}
                                            </div>
                                             </div>
                                        {/* <img src={require('../../media/dp_replacement.png')}  alt="Edit_post Image" className='dp_styleXX circle responsive-img'/> */}
                                        </td>
                                        </tr>
                                :
                                <tr>
                                    {/* <td className='myProfileItemTitle'>Upload image</td> */}
                                    <td colSpan="3">
                                    {/* <input type="file" accept="image/*" onChange={this.handleImgChange} className="myAPImgUploadBtnX"/> */}
                                    </td>
                                </tr>
                            }
                                {/* <tr>
                                    <td className='myProfileItemTitle'>Password</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                            <input placeholder={acc.password} id="password" onChange={this.handlePasswordChange} type="password" className="myAP/TxtBox validate"  />
                                        :
                                        acc.password                                       
                                    }
                                    </td>
                                </tr> */}
                                {/* <tr>
                                    <td>
                                    <Link to="/home"><button className="btn myUpdateBtnX myBtn">Home</button></Link>    
                                    </td>
                                    <td>
                                        {this.state.edit?
                                        <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.Checker(acc)}}></button>    
                                        :
                                        <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.setState({edit: true}); this.adder() }}>Edit Edit_post</button>    
                                    }
                                    </td>
                                </tr> */}
                                <tr>
                                    <td colSpan="2" className="center">
                                    <button data-target="modal2"  className="btn myUpdateBtnX myBtn modal-trigger" >Update & Post</button>    
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="center">
                                    <button data-target="modal1"  className="btn myUpdateBtnX myBtn modal-trigger" >Delete Post</button>    
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="col s12 m4 l4 xl2">
                        <div className="section table-of-contents">
                            <Side_Links />
                              </div>
                        </div>
                    </div>
       <div>
                         <div id="modal1" className="modal">
                           <div className="modal-content center">
                              <h4 className="yellow text-red bold">WARNING!</h4>
                              <p>Are you really want to delete this post?</p>
                          </div>
                         <div className="modal-footer">
                            <Link to="#!" onClick={this.closeModal} className="modal-close waves-effect waves-green btn-flat">Cancel</Link>
                            <p onClick={()=>{this.Delete(grab_post_code)}} className="modal-close waves-effect waves-green btn-flat">Confirm</p>
                         </div>
                        </div>
                            </div>
                            <div>
                         <div id="modal2" className="modal">
                           <div className="modal-content center">
                              <h4 className="yellow text-red bold">Update & Publish!</h4>
                              <p>Are you really want to update this post?</p>
                          </div>
                         <div className="modal-footer">
                            <Link to="#!" onClick={this.closeModal} className="modal-close waves-effect waves-green btn-flat">Cancel</Link>
                            <p onClick={()=>{this.Checker(acc, posts_state, notifications_state)}} className="modal-close waves-effect waves-green btn-flat">Confirm</p>
                         </div>
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
        user: state.users,
        posts: state.posts,
        notifications: state.notifications,
    }
};

export default connect(mapStateToProps, {add_post, update_post, loadData, update_notification, del_post, del_notification})(Edit_post);