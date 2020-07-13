import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './signUpStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addUser, loadDataUser} from '../../redux/actions/UserAction/index';


//email validator
import * as EmailValidator from 'email-validator';


class SignUp extends Component {
    constructor(){
        super();
        this.state ={
            new_name: '',
            new_email: '',
            new_number: '',
            new_country: '',
            new_password: '',
            new_profile_pic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-dkctp&psig=AOvVaw3olSzBinTKgBab5vQB5A-e&ust=1592716228546000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjm3b_Qj-oCFQAAAAAdAAAAABAD',
            accounts: []
    }}

    componentDidMount(){
        // window.jQuery(document).ready(function(){
        //     window.jQuery('.toast').toast();
        //   }); 


        // this.props.loadDataUser();
        // console.log(this.props);
    }

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.accounts,"next props")
    //     this.setState({
    //         accounts : nextProps.accounts
    //     })    
    // }

    handleNameChange=event=>{
        this.setState({
            new_name: event.target.value 
        })
    }
    handleEmailChange=e=>{
  
            this.setState({
                new_email: e.target.value
            })
    }
    handleNumberChange=e=>{
        // console.log(typeof(Number(e.target.value)));
        // console.log((e.target.value).length);
            this.setState({
                new_number: e.target.value
            })
        
    }
    handlePasswordChange=e=>{
        this.setState({
            new_password: e.target.value
        })
    }
    
    //............................................................
      //Email validation method is here
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

//...................................................................

//validation function before form submission
Checker= ()=>{
       //validation before submission
    let valid = false;
       //email
    // let grab_email = this.state.new_email;
    // let grab_email = this.state.new_email;
    // let validation_result = EmailValidator.validate(grab_email);
    if(EmailValidator.validate(this.state.new_email)){
        valid= true;
    }else{
        valid= false;
            alert('wrong email, please re-enter it.')
            return
            }
            if(this.state.new_name != ''){
                valid= true;
                }else{
                    valid= false;
                    alert('Name not entered, please re-enter it.')
                    return
                    }
                    if(this.state.new_password != ''){
                        valid= true;
                        }else{
                            valid= false;
                            alert('please enter the password.')
                        return  
                        }
                            if(this.state.new_number != ''){
                                let collect_val = this.state.new_number;
                                let type_checker = typeof(Number(collect_val));
                                
                                let length_checker = collect_val.length;
                                if(type_checker == 'number'){
                                    if(length_checker > 8){
                                        valid= true;
                                    }           
                                }else{
                                    valid= false;
                                    alert('please enter a correct contact number, with country code - X.')
                                    return
                                    }
                                }else{
                                    valid= false;
                                    alert('please enter a correct contact number, with country code. - Y')
                                    return
                                    }

                                    //submission here
                                    if(valid){
                                        this.adder();
                                    }

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
    render() {
        return (
              <div className='mX'>
                <NavBar />
                <div className="myBody">
                <div className="container ">
                <div className="myContainer">

                    <div className=" row">
                        <div className="col s12 m12 l12 xl12">
                         <p className="myFormTitle">
                              Sign Up
                             </p>
        {/* <p>{this.state.name}</p> */}
                        </div>
                        </div>
                    {/* <form action="">
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                        <span className='material-icons' id='icon' style={{float:'left', marginTop: '0.65em'}}>account_circle</span>
                        <input type="text" className='myTxtBox myTxtname'  placeholder="Full Name"/>
                        </div>
                    </form> */}
                    <div className="myForm row">
                {/* <form className="XX"> */}
                  <div id="myTxtBoxCoverX" className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                     <input id="icon_prefix"
                      style={{border: 'none'}}
                     value={this.state.new_name}
                     onChange={this.handleNameChange}
                      type="text" className="input-field validate " />
                    <label htmlfor="icon_prefix">First Name</label>
                    </div>



                    {/* <div className="input-field">
                    <i className="myIcon material-icons prefix ">account_circle</i>
                    <input id=" icon-prefix" type="text" className="myTxtBoxX"
                                                       value={this.state.new_name}
                                                       onChange={this.handleNameChange}                 
                    />
                     <label htmlFor="icon_prefix" className="myTxtLable">Full Name</label>
                     </div> */}
                     <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="myInputBox" 
                    value={this.state.new_email}
                    onChange={this.handleEmailChange} 
                    />
                     <label htmlFor="email">Email</label>
                     </div>
                    <div className="input-field">
                     <i className="material-icons prefix">phone</i>
                         <input id="icon_telephone" type="tel" className="myInputBox"
                                             value={this.state.new_number}
                                             onChange={this.handleNumberChange}
                         />
                     <label htmlFor="icon_telephone">Cell Number</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="myInputBox"
                                        value={this.state.new_password}
                                        onChange={this.handlePasswordChange}
                    />
                     <label htmlFor="password">Password</label>
                     </div>
                    <div>
                        <button className="myBtn btn " onClick={this.Checker}>SIGN UP</button>
                    </div>
                    {/* </form> */}
                    <div className="row">
                    <div className="col s6 m6 l6 xl6 offset-s6"></div>
                    <div className="col s6 m6 l6 xl6 offset-s6">
                       <Link to='/signin'>
                       <p className="myCreateNewAcc">
                           Already have an account?
                           </p> 
                       </Link>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <SubFooter />
                </div>
                  
        )
    }
}
//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        accounts: state.users
    }
};

export default connect(mapStateToProps, {addUser, loadDataUser})(SignUp);