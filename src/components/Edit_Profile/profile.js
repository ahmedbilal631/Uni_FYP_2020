import React, { Component } from 'react';
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import './editProfileStyle.css';
import SideLink from '../Side_Panel/side_links';

import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import {connect} from 'react-redux';
import {addUser, loadDataUser, updateUser,deleteUser} from '../../redux/actions/UserAction/index';
import Dp_Replacement from '../../media/dp_replacement.png'
import Side_Links from '../Side_Panel/side_links';


class Profile extends Component {
    constructor(){
        super();
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

            // recievedUsers: this.props.recievedUsers,
    }
    console.log(this.state, 'from construct');    
}

    loadAcc=()=>{
        this.setState({
            name: this.props.recievedUsers[0].name
        });
        console.log(this.state, 'from did mount');
    }
    componentDidMount(){
        window.jQuery(document).ready(function(){
            window.jQuery('.modal').modal();
          });
        // this.loadAcc();
        this.props.loadDataUser();
        console.log(this.props, 'from did mount');
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.names,"next props")
        this.setState({
            names : nextProps.names
        })    
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
    //fname editing control
    handleFnameChange=event=>{
        let textX = this.state.fname;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            fname: textX
        });
    }

    //...........................................
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
        handleEmailChange=event=>{
        let textX = this.state.email;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            email: textX
        });
    }
    //...........................................
        //address editing control
        handleAddressChange=event=>{
            let textX = this.state.address;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                address: textX
            });
        }    
        //...........................................
         //Country editing control
        handleCountryChange=event=>{
        let textX = this.state.country;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            country: textX
        });
    }
    //...........................................
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
      //cnic editing control
         handleCnicChange=event=>{
        let textX = this.state.cnic;
        textX = event.target.value
        // console.log(textX);
        this.setState({
            cnic: textX
        });
    }
    //...........................................
        //email editing control
        handlePasswordChange=event=>{
            let textX = this.state.password;
            textX = event.target.value
            // console.log(textX);
            this.setState({
                password: textX
            });
        }   
        //...........................................
    //state checker before update
    Checker=(acc)=>{
        let captureState = this.state;
        if(captureState.name === ''){
            captureState.name = acc.name;}
            if(captureState.email === ''){
                captureState.email = acc.email;}
                if(captureState.fname === ''){
                    captureState.fname = acc.fname;}
                    if(captureState.gender === ''){
                        captureState.gender = acc.gender;}
                        if(captureState.cnic === ''){
                            captureState.cnic = acc.cnic;}
                            if(captureState.number === ''){
                                captureState.number = acc.number;}
                                if(captureState.address === ''){
                                    captureState.address = acc.address;}
                                    if(captureState.country === ''){
                                        captureState.country = acc.country;}
                                        if(captureState.password === ''){
                                            captureState.password = acc.password;}
                                            if(captureState.dp_image === ''){
                                                captureState.dp_image = acc.dp_image;}
        
                this.UpdateNow(acc);

    }
    //..............................................
    //update function
    UpdateNow=(acc)=>{
        console.log('id recieved', acc.user_id);
        
        console.log(this.state, 'state from update');
        
            this.props.updateUser({
                user_id: acc.user_id,
                name : this.state.name,
                fname: this.state.fname,
                gender: this.state.gender,
                cnic: this.state.cnic,
                email: this.state.email,
                number:this.state.number,
                address:this.state.address,
                country:this.state.country,
                password:this.state.password,
                dp_image: this.state.dp_image,
            })
            this.setState({
                edit: false,
                re_enter: false,
            });
        
    }
        //...............................................
        //Re-enter function
        //..............................................
        //Delete account function
                        //Main search functions
                        Delete_Acc=(user)=>{
                            this.props.deleteUser(user);
                            
            
                            console.log('called  user to delete acc.', user);
                            toast('Account got deleted.',  {
                                position: "bottom-left",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
            
                            window.location.assign('/signup');
                            // browser.history.deleteAll();
                        }
                            //function to close the modal
    closeModal=()=>{
        // alert('yes close');

        window.jQuery(document).ready(function(){
            window.jQuery('.modal').sidenav('close');
          });   
}
//...........................................

    adder=()=>{
    console.log(this.state);
    
        this.props.addUser({text: this.state.name});
        this.setState({
            name: ''
        });
    }

    //..................................................

    render() {
        let acc = this.props.user;
        console.log(acc);
        return (
              <div className='mX'>
                <NavBar />
                <div className="myAdBox">
                    <p className="myPageTitle">
                        PROFILE
                    </p>
                    <div  className="dp_Box_Style">
                            {acc.profile_image === ''? 
                        // <p className="place_for_dp_Text">DP</p>    
                        <img width="150px"
                        src={
                        Dp_Replacement
                        }
                         alt="Profile Image" className='dp_styleX circle responsive-img'/>
                        :
                        <img src={acc.dp_image} width="150px" height="300px" alt="Profile Image" className='dp_styleX circle responsive-img'/>
                    }
                            </div>

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
                                    <tr>    
                                    <td className='myProfileItemTitle'>Name</td>
                                    <td colSpan="2">
                                        {(this.state.edit === true) || (this.state.re_enter === true)?
                                        <input placeholder={acc.name} id="person_name"  onChange={this.handleNameChange} type="text" className="myAPTxtBox validate" />
                                        :
                                        acc.name                                       
                                    }
                                    </td>
                                    </tr>
                                    {/* } */}
                                    <tr>
                                    <td className='myProfileItemTitle'>Father name</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.fname} id="father_name" onChange={this.handleFnameChange} type="text" className="myAPTxtBox validate"  />
                                        :
                                        acc.fname                                       
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Gender</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.gender} id='gender' onChange={this.handleGenderChange} type="text" className="myAPTxtBox validate"  />
                                        :
                                        acc.gender                                       
                                    }
                                    </td>
                                </tr>                                    
                                <tr>
                                    <td className='myProfileItemTitle'>Email</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.email} id="email" onChange={this.handleEmailChange} type="email" className="myAPTxtBox validate"  />
                                        :
                                        acc.email                                       
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>CNIC</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.cnic} id="cnic" onChange={this.handleCnicChange} type="text" className="myAPTxtBox validate"  />
                                        :
                                        acc.cnic                                       
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Address</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.address} id="address" onChange={this.handleAddressChange} type="text" className="myAP/TxtBox validate"  />
                                        :
                                        acc.address                                       
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Country</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.country} id="country" onChange={this.handleCountryChange} type="text" className="myAP/TxtBox validate"  />
                                        :
                                        acc.country                                       
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Phone #</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.number} id="phone" onChange={this.handleNumberChange} type="tel" className="myAP/TxtBox validate"  />
                                        :
                                        acc.number                                       
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='myProfileItemTitle'>Password</td>
                                    <td colSpan="2">
                                        {this.state.edit?
                                        <input placeholder={acc.password} id="password" onChange={this.handlePasswordChange} type="password" className="myAP/TxtBox validate"  />
                                        :
                                        acc.password                                       
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/home"><button className="btn myUpdateBtnX myBtn">Home</button></Link>    
                                    </td>
                                    <td>
                                        {this.state.edit?
                                        <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.Checker(acc)}}>Update</button>    
                                        :
                                        <button className="btn myUpdateBtnX myBtn" onClick={()=>{this.setState({edit: true})}}>Edit Profile</button>    
                                    }
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="center">
                                    <button data-target="modal4" className="btn myBtn modal-trigger" >Delete Account</button>    
                                    </td>
                                </tr>
                            </table>
                            </div>
                        </div>
                        <div className="col s12 m4 l4 xl2">
                        <div className="section table-of-contents">
                            <Side_Links />                                       
                            </div>
                        </div>
                        <div>
                         <div id="modal4" className="modal">
                           <div className="modal-content center">
                              <h4 className="yellow text-red bold">WARNING!</h4>
                              <p>Are you really want to delete your account?</p>
                          </div>
                         <div className="modal-footer">
                            <Link to="#!" onClick={this.closeModal} className="modal-close waves-effect waves-green btn-flat">Cancel</Link>
                            <p onClick={()=>{this.Delete_Acc(acc)}} className="modal-close waves-effect waves-green btn-flat">Confirm</p>
                         </div>
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
        user: state.users
    }
};

export default connect(mapStateToProps, {addUser, loadDataUser, updateUser, deleteUser})(Profile);