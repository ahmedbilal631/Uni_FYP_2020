import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import Side_Links from '../Side_Panel/side_links';
// import './editProfileStyle.css';

import {Link} from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';



import {connect} from 'react-redux';
import {send_feedback, send_report} from '../../redux/actions/Feedback/feedback_actions';

import Dp_Replacement from '../../media/dp_replacement.png'


class Feed_Back extends Component {
    constructor(){
        super();
        this.state ={
            edit: false,
            isEmpty: false,
            re_enter: false,            
                name : '',
                email: '',
                country:'',
                region: '',
                subject: '',
                description:'',
                dp_image: '',
                post_time: '',
                post_id: localStorage.getItem('isReport') !== null? Number(localStorage.getItem('reported_post_id')) : '' ,
                  // report
                  msg_type: localStorage.getItem('msg_type') === 'report'? 'report': 'feedback',

            // recievedUsers: this.props.recievedUsers,
    }
    // console.log(this.state, 'from construct');    
}

//...................................................


    componentDidMount(){
        // this.loadAcc();
        // this.props.loadData();
        // console.log(this.props, 'from did mount');
    }


    //...................................

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
        //name editing
        handleSubjectChange=event=>{

            let textX = this.state.subject;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                subject: textX
                // name: textX.name
            });
        }
    
        //............................................
            //name editing
    handleEmailChange=event=>{

        let textX = this.state.email;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            email: textX
            // name: textX.name
        });
    }

    //............................................

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
            let textX = this.state.dp_image;
            textX = event.target.value
            console.log(textX, 'image path');
            this.setState({
                dp_image: textX
            });
        }   
        //...........................................
    //state checker before update
    Checker=(user)=>{
        let captureState = this.state;

        if(captureState.dp_image === ''){
            captureState.dp_image = 'https://pixabay.com/images/id-5307219/';}
        if(captureState.name === ''){
            alert('name is empty');
            }                                    else if(captureState.country === ''){
                                        alert('Please make sure country name.')}
                                        else{
                                            this.AddNow(user);
                                        }
                                        
                                        
                                    }
                                    //..............................................
    //add function
    AddNow=(user)=>{
        // console.log('id recieved', acc.user_id);
     
        //to get highest post id from old posts state
        console.log('got user in report', user);
        
        //   console.log(higher_id_posts, ' add post higher id old array');  
    //   console.log(higher_id_notification, ' add notification higher id old array');  
    
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
      //.........................................
      // console.log(this.state, 'state from add post');

      //msg is here
      
      let report_msg = {};
      let feedback_msg = {};
      let msg_type = this.state.msg_type;
      if(msg_type === 'report'){
          report_msg = {
              reported_post_id: this.state.post_id,
              name: this.state.name,
              email: this.state.email,
              country: this.state.country,
              region: this.state.region,
              subject: this.state.subject,
              description: this.state.description,
              send_time: {
                  date: dt, month: mn, year: yr
              }
            }
            this.props.send_feedback(feedback_msg);
            this.setState({
                edit: false,
                isEmpty: false,
                re_enter: false,            
                    dp_image: '',
                    name : '',
                    email: '',
                    country:'',
                    region: '',
                    subject: '',
                    description:'',
                    dp_image: '',
                    send_time: '',
                    post_id: '',
            });
        }else if(msg_type === 'feedback'){
            feedback_msg = {
                post_id: this.state.post_id,
                name: this.state.name,
                email: this.state.email,
            country: this.state.country,
            region: this.state.region,
            subject: this.state.subject,
            description: this.state.description,
            snap_shot: this.state.dp_image,
            send_time: {
                date: dt, month: mn, year: yr
            }
        }

        this.props.send_report(report_msg);
        this.setState({
            edit: false,
            isEmpty: false,
            re_enter: false,            
                dp_image: '',
                name : '',
                email: '',
                country:'',
                region: '',
                subject: '',
                description:'',
                dp_image: '',
                send_time: '',
                post_id: '',
        });

    }
      console.log("before submission msg", report_msg, 'feedback=>', feedback_msg);
      

            localStorage.setItem('isReport', null);

            this.setState({
                edit: false,
                isEmpty: false,
                re_enter: false,            
                    dp_image: '',
                    name : '',
                    email: '',
                    country:'',
                    region: '',
                    subject: '',
                    description:'',
                    dp_image: '',
                    send_time: '',
                    post_id: '',
            });
        
    }
        //...............................................
        //Re-enter function

    render() {
        // let acc = this.props.posts.posts[0];
        let posts_state = this.props.posts;
        let user = this.props.user;
        // console.log('posts recieved', posts_state, 'notifications', notifications_state,'from add post');
        
        // console.log('from local storage', local_posts);
        
        const { country, region,
            name,
            msg_type,
            subject,
            email,
            status,
            gender,
            // number: '',
            age_group,
            disability,
            location,
            description,
        dp_image } = this.state;

//to get





        return (
              <div className='mX'>
                <NavBar />
                <div className="myAdBox">
                    <p className="myPageTitle">
                        {localStorage.getItem('msg_type')==='report'? "REPORT": "FEEDBACK"}
                    </p>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl10">
                            <div>

                            <table>
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
                                    <td className='myProfileItemTitle'>Type</td>
                                    <td colSpan="2">
                                    <select style={{border: 'none',}} onChange={this.handleTypeChange}>
                                <option value={msg_type} disabled selected>{msg_type==='report'? "REPORT": "FEEDBACK"}</option>
                                      <option value="report">Report</option>
                                      <option value="feedback">Feedback</option>
                                      <option value="request">Request</option>
                                      <option value="other">Other</option>
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
                                    <td className='myProfileItemTitle'>Email</td>
                                    <td colSpan="2">
                                      <input placeholder="Person Name" value={email} onChange={this.handleEmailChange} id="person_name" type="text" className="myAPTxtBox validate" />
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
                                    <tr>    
                                    <td className='myProfileItemTitle'>Subject</td>
                                    <td colSpan="2">
                                      <input placeholder="Person Name" value={subject} onChange={this.handleSubjectChange} id="person_name" type="text" className="myAPTxtBox validate" />
                                    </td>
                                    </tr>

                                <tr>
                                    <td className='myProfileItemTitle'>Message</td>
                                    <td colSpan="2">
                                    <textarea id="textarea1APX" value={description} onChange={this.handleDescriptionChange} placeholder="Discription" className="materialize-textarea"></textarea>
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
                                    {msg_type !== 'report'?
                                    <></>:
                                    dp_image !== ''?
                                <tr>
                                        <td colSpan='3'>
                                        {/* <img src={require('../../media/dp_replacement.png')}  alt="Add_post Image" className='dp_styleXX circle responsive-img'/> */}
                                        your uploaded image is <p>
                                            {dp_image}
                                        </p>
                                        </td>
                                        </tr>
                                :
                                <tr>
                                    {/* <td className='myProfileItemTitle'>Upload image</td> */}
                                    <td colSpan="3">
                                    <input type="file" accept="image/*" onChange={this.handleImgChange} className="myAPImgUploadBtnX"/>
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
                                        <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.setState({edit: true}); this.adder() }}>Edit Add_post</button>    
                                    }
                                    </td>
                                </tr> */}
                                <tr>
                                    <td colSpan="2" className="center">
                                    <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.Checker(user)}}>Submit</button>    
                                    </td>
                                </tr>
                            </table>
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
        user: state.users,
        posts: state.posts,
        // notifications: state.notifications
    }
};

export default connect(mapStateToProps, {send_feedback, send_report})(Feed_Back);