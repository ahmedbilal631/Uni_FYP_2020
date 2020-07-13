import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as routes from "./admin_routes";

//pages
// import HomePage from '../components/Home/home';
// import AdminPage from '../components/Admin/Main_page/main_page';
import PostsManagementPage from '../Posts_management/index';

//redux connection
// import {loadData} from '../redux/actions/UserAction/index';
import {connect} from 'react-redux';
// import Notifications from "../components/Notifications/notifications";

class Admin_Routes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''}
    }
  componentDidMount(){
    // this.props.loadData();
  }

  render() {
    // let account = this.props.account;
    // let check_login = localStorage.getItem('acc_id');


    return (
      <Router>
        {/* <BrowserRouter > */}
        <Switch>
          {/* <Route exact path={routes.HOME_PAGE} component={HomePage} /> */}
          {/* <Route exact path={routes.ADMIN} component={AdminPage} /> */}
          <Route exact path={routes.POSTS_MANAGEMENT} component={PostsManagementPage} />
          {/* <Route exact path={routes.CHECKOUT} component={CheckOutPage} /> */}
          {/* <Route exact path={routes.LEARNER_DRIVER} component={LearnerDriver} /> */}
          {/* <Route exact path={routes.DRIVING_INSTRUCTOR} component={DrivingInstructor} /> */}
          </Switch>
          
      </Router>
    );
  }
}
//here the redux data will be converted into props
const mapStateToProps=(state)=>{
  return{
      account: state.usersReducer
  }
};
export default connect(mapStateToProps, null)(Admin_Routes);
// export default Routes