import React, { Component } from 'react';
import NavBar from '../Header/NavBar/navBar';
import SubFooter from '../Footer/Sub_Footer';
import './addPostStyle.css';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addUser, loadData} from '../../redux/actions/UserAction';


class AddPost extends Component {
    constructor(){
        super();
        this.state ={
            name : '',
            email: '',
            number: '',
            password: ''
    }}

    componentDidMount(){
        this.props.loadData();
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.names,"next props")
        this.setState({
            names : nextProps.names
        })    
    }

    handleChange=event=>{
        let textX = this.state;
        textX.name = event.target.value
        console.log(textX);
        this.setState({
            name: textX.name
        })
    }

    adder=()=>{
    console.log(this.state);
    
        this.props.addUser({account_data: this.state});
        this.setState({
            name: '',
            email: '',
            number: '',
            password: ''
        });
    }

    render() {
        return (
              <div className='mX'>
                <NavBar />
                <div className="myAPBody">
                <div className="container ">
                <div className="myAPContainer">

                    <div className=" row">
                        <div className="col s12 m12 l12 xl12">
                         <p className="myFormTitle">
                              Report a person</p>
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
                    {/* <div className="input-field">
                    <i className="myIcon material-icons prefix ">account_circle</i>
                    <input id="icon_prefix" type="text" className="myTxtBox"
                                                       value={this.state.name}
                                                       onChange={this.handleChange}                    
                    />
                     <label htmlFor="icon_prefix" className="myTxtLable">Person Name</label>
                     </div> */}
                     <div className="myAPSelectDiv input-field">
                        <select className='display'>
                        {/* <option value="" disabled selected>Choose your option</option> */}
                         <option selected value="missing">Missing</option>
                        <option value="found">Found</option>
                          {/* <option value="3">Option 3</option> */}
                        </select>
                    </div>

                     <div className="myAPTxtBoxDiv input-field">
                      <input placeholder="Person Name" id="persom_name" type="text" className="myAPTxtBox validate" />
                        {/* <label for="first_name">First Name</label> */}
                    </div>
                    <div className="myAPTxtBoxDiv input-field">
                      <input placeholder="Location/Address" id="persom_name" type="text" className="myAPTxtBox validate" />
                        {/* <label for="first_name">First Name</label> */}
                    </div>
                     
                     <div className="input-field">
                        <select className='display'>
                        <option value="" disabled selected>Age Group</option>
                         <option value="1">Under 15yrs</option>
                        <option value="2">16-18yrs</option>
                          <option value="3">19-21yrs</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <select className='display'>
                        <option value="" disabled selected>Gender</option>
                         <option value="1">Male</option>
                        <option value="2">Female</option>
                          <option value="3">Others</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <select className='display'>
                        <option value="" disabled selected>Select Disability(if any)</option>
                         <option value="1">Mentally Disable</option>
                        <option value="2">Hearing Loss/Deafness</option>
                          <option value="3">Memory Loss</option>
                          <option value="3">Speech/Language Disorder</option>
                          <option value="3">Vision Loss/Blindness</option>
                          <option value="3">Any Physical Disability</option>
                          <option value="3">Others</option>
                          <option value="3">Not Disbaled</option>
                        </select>
                    </div>
                    <div className="input-field">
                 <textarea id="textarea1AP" placeholder="Discription" className="materialize-textarea"></textarea>
                 {/* <label for="textarea1">Textarea</label> */}
                    </div>
                    <div className="myAPImgUploadOutline input-field">
                        <div className="row">
                            <div className="col s6 m6 l6 xl6">
                             <span>Uplaod an image</span>
                            </div>
                            <div className="col s6 m6 l6 xl6">
                            <input type="file" accept="image/*" className="myAPImgUploadBtn"/>
                            </div>
                        </div>
                    </div>
 
                    <div>
                        <button className="myBtn btn " onClick={this.adder}>SUBMIT & POST</button>
                    </div>
                    {/* </form> */}
                    <div className="row">
                    <div className="col s6 m6 l6 xl6 offset-s6"></div>
                    <div className="col s6 m6 l6 xl6 offset-s6">
                       {/* <Link to='/signin'>
                       <p className="myCreateNewAcc">
                           Already have an account?
                           </p> 
                       </Link> */}
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
        names: state.users
    }
};

export default connect(mapStateToProps, {addUser, loadData})(AddPost);