import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// import './search.css';
// 
import NavBar from '../Header/NavBar2/navBar2';
import SubFooter from '../Footer/Sub_Footer';
import Footer from '../Footer/Main_Footer/footer';
import Side_Links from '../Side_Panel/side_links';
// import By_age_search from './by_age_search';

//redux
import {connect} from 'react-redux';
// import {addUser, loadData} from '../../redux/actions/UserAction/index';
// import { set_posts, loadData, all_post } from '../../redux/actions/postAction/post_actions';
import {  read_notification, loadDataUser, deleteUser } from '../../redux/actions/UserAction/index';


class Setting extends Component {
state =  {
    posts: [],
    user: {},

    post_time: '',

    //......
    proceed_search: false,
    show_results: false,
    display_posts: [],
}

        //..........................................    
        componentDidMount(){
            window.jQuery(document).ready(function(){
                window.jQuery('.modal').modal();
              });
            
              this.setState({
                //   posts: this.props.loadData(),
                  user: this.props.loadDataUser(),
              });
            //   this.props.loadData();         
              this.props.loadDataUser();
                        }

                        Confirm_First=(user)=>{

                        }
    //function to close the modal
    closeModal=()=>{
        // alert('yes close');

        window.jQuery(document).ready(function(){
            window.jQuery('.modal').sidenav('close');
          });   
}
//...........................................

                        //Main search functions
            Delete_Acc=(user)=>{
                this.props.deleteUser(user);
                

                console.log('called  user to delete acc.', user);
                toast('make sure to delete.',  {
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




        return (
            <div className="myNotiMainBody">
                <NavBar />
                <div className="myAdBox">
                <p className="myPageTitle">SETTINGS</p>
                <div>
        {/* <button onClick={()=>{toast('yes I am here..')}}>Notify !</button> */}
        <ToastContainer />
      </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l8 xl9">
                            <div className="myLeftPanel">
                                <p>
                                <Link to='/profile'><button onClick={()=>{localStorage.setItem('user_id', user.user_id)}} className="btn myBtn">Account settings</button></Link>
                                </p>
                                <p>
                                <button data-target="modal3" className="btn myBtn modal-trigger" >Delete Account</button>
                                </p>

                                </div>
                        </div>
                        <div className="col s0 m1 l1 xl1"></div>
                        <div>
                         <div id="modal3" className="modal">
                           <div className="modal-content center">
                              <h4 className="yellow text-red bold">WARNING!</h4>
                              <p>Are you really want to delete your account?</p>
                          </div>
                         <div className="modal-footer">
                            <Link to="#!" onClick={this.closeModal} className="modal-close waves-effect waves-green btn-flat">Cancel</Link>
                            <p onClick={()=>{this.Delete_Acc(user)}} className="modal-close waves-effect waves-green btn-flat">Confirm</p>
                         </div>
                        </div>
                            </div>

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

export default connect(mapStateToProps, {loadDataUser, deleteUser})(Setting);
// export default Setting