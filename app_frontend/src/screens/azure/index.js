import React from 'react';
import {Image } from 'react-native';
import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2'
import Axios from 'axios';
// The application registration (must match Azure AD config)
var credentials = {
  client_id: '2fa55851-89e0-4ccf-8b86-2a682bdb13d9',
  client_secret: 'prJaOuSFMppLGa9E2bCScRR',
  scope: 'User.Read'
};

import {connect} from 'react-redux';

import {azureLogin} from '../../redux/actions/UserActions';

class AzureAuth extends React.Component {

	constructor(props){

		
		super(props);
		this.state = {
			loader:false
		}
		this.azureInstance = new AzureInstance(credentials);

		this._onLoginSuccess = this._onLoginSuccess.bind(this);
	}
	
	_onLoginSuccess(){
		this.azureInstance.getUserInfo().then(result => {
			console.log(result);
			let data = {
				name: result.displayName,
				email: result.userPrincipalName,
				cell: '0303-4766669'
			}
			this.props.azureLogin(data);
			this.props.navigation.navigate('Homes');
			this.setState({loader:true})
			
			
 
		}).catch(err => {
			console.log(err);
		})
	}


    render() {
        return (
		  
            <AzureLoginView
            	azureInstance={this.azureInstance}
            	loadingMessage="Loading ...."
            	onSuccess={this._onLoginSuccess}
            /> 
			
        );
    }
}

export default connect(null, {azureLogin})(AzureAuth);
