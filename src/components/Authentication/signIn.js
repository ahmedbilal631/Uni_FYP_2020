import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './signUpStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {loginUser, loadDataUser} from '../../redux/actions/UserAction/index';

//email validator
import * as EmailValidator from 'email-validator';


class SignIn extends Component {
    constructor(){
        super();
        this.state ={
            new_email: '',
            new_password: ''
    }}

    componentDidMount(){
        // this.props.loadDataUser();
        // console.log(this.props);
    }

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps.name,"next props")
    //     this.setState({
    //         name : nextProps.name
    //     })    
    // }
    //.........................................................
    //email change handler
    handleEmailChange=e=>{
         this.setState({
            new_email: e.target.value
        })
    }
    //..........................................................
    //pwd change handler
    handlePasswordChange=e=>{
        this.setState({
            new_password: e.target.value
        })
    }  
    //..........................................................
    //validation function before form submission
Checker= ()=>{
    //validation before submission
        let valid = false;
        //email
         if(EmailValidator.validate(this.state.new_email)){
            valid= true;
            }else{
            valid= false;
                alert('wrong email, please re-enter it.')
            return
            }
            //pwd validator
                 if(this.state.new_password != ''){
                     valid= true;
                     }else{
                         valid= false;
                         alert('please enter the password.')
                     return  
                     }

                                 //submission here
                                 if(valid){
                                     this.Login();
                                 }

}

    Login=()=>{
    console.log(this.state);
    //sending data
        this.props.loginUser({
            email: this.state.new_email,
            password: this.state.new_password
        }).then(
            window.location.assign('/home')
        )
        this.setState({
            new_email: '',
            new_password: ''
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
                              Sign in
                             </p>
        {/* <p>{this.state.name}</p> */}
                        </div>
                        </div>
                    <div className="myForm row">
                     <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="myInputBox"
                    value={this.state.new_email}
                    onChange={this.handleEmailChange}
                    />
                     <label htmlFor="email">Email</label>
                     </div>
                    {/* <div className="input-field">
                     <i className="material-icons prefix">phone</i>
                         <input id="icon_telephone" type="tel" className="myInputBox" />
                     <label htmlFor="icon_telephone">Telephone</label>
                    </div> */}
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="myInputBox"
                    value={this.state.new_password}
                    onChange={this.handlePasswordChange}
                    />
                     <label htmlFor="password">Password</label>
                     </div>
                    <div>
                        <button className="myBtn btn " onClick={this.Checker}>SIGN IN</button>
                    </div>
                    {/* </form> */}
                    <div className="row">
                    <div className="col s6 m6 l6 xl6 offset-s6"></div>
                    <div className="col s6 m6 l6 xl6 offset-s6">
                        <Link to="/signup">
                       <p className="myCreateNewAcc">
                           Create new account?
                           </p> 
                        </Link>
                        </div>
                    </div>
                    </div>
                    </div>
                    {/* <Link to='/home'>Home direct</Link> */}
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
        name: state.usersReducer
    }
};

export default connect(mapStateToProps, {loginUser, loadDataUser})(SignIn);