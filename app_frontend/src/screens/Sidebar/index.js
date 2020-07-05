import React, { Component } from 'react';
import {
  Text,
  Image,
} from 'react-native';
import {  Content,  ListItem, Icon, Left, Body, Button,View } from 'native-base';
import { styles } from './style';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/actions/UserActions';

import {registerUser} from '../../redux/actions/UserActions';

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      appColor :'#05CE1D',
      appLogoClr: 'pink',
      themeClr: 'light',
      bgClr: '#fefbfb'
    }
  }
  
  componentWillReceiveProps(newProp) {
    this.setState({
      appColor:newProp.clr,
      bgClr: newProp.clr == '#fe3563'?'#272324':newProp.clr == '#009701'? '#272324': '#fefbfb',
    });

    // this.setState({
    //   appColor:newProp.clr
    // });
    // if(this.state.appColor == '#009700'){
    //   this.setState({appLogoClr: 'green'});
    // }
    // else if(this.state.appColor == "#fe3563"){
    //   this.setState({themeClr: 'darkPink', bgClr: '#272324'})
    // }
    // else if(this.state.appColor == "#009701"){
    //   this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
    // }
  }
  componentDidMount() {
    this.setState({ appColor:this.props.clr });
    if(this.props.clr == '#009700'){
      this.setState({appLogoClr: 'green'});
    }
    else if(this.props.clr == "#fe3563"){
      this.setState({themeClr: 'darkPink', bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
    }
  }


  logout = () =>{
    this.props.userLogout();
    this.props.navigation.navigate("NonAuth");
  }
   
  


  render() {
          // const {userStatus,user} = this.props;
          const userStatus = true;
          const user = "ali";

          const {appColor} = this.state;
          let bgClr= this.state.bgClr;
          const statusBarClr = '#E6DBDD';
          let logoImg = '../../media/finalLogoPink.png';
          // const appColor = '#009700'
          // const appColor = '#009700'green
          // const appColor = '#ba0000'lightred
          // const appColor = '#800000'darkred
          // const appColor = '#000080'betterblue
          // const appColor = '#02075d'Navi
          // console.log(userStatus);
          
    return (
      <Content style={styles.sidebarWrapper}>
        <Content style={styles.sideBarTopPanel, {backgroundColor: appColor, paddingVertical:12}}>
          {userStatus ? 
          <View>
          <Image source={require("../../media/naveed.jpg")} style={{ width: 70, height: 70, borderRadius: 100,  alignSelf: "center" }} />
          <Text style={{ alignSelf: "center", fontWeight: "bold", marginTop: 5, color: '#fefbfb' }} >
          {
          // user.name
        }
        ALI
          </Text>
          </View>
          :
          <View>
          <Image source={require("../../media/show-profile.png")} style={{ alignSelf: "center" }} />

          <Text
          onPress={() => this.props.navigation.navigate("SignUp")}
          style={{ alignSelf: "center", marginTop: 5, color: '#fefbfb' }} >Register Yourself</Text>
         </View>
          }
        </Content>
        <Content>
        {userStatus ? 
          <View style={{backgroundColor: bgClr}}> 
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Homes")}>
            <Left>
              <Button style={{ backgroundColor:appColor, color: '#fefbfb'}}>
                <Icon onPress={() => this.props.navigation.navigate("Homes")} active name="home" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0  }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Home</Text>
            </Body>
          </ListItem>

          
          <ListItem onPress={() => this.props.navigation.navigate("Profile")} icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("Profile")} active name="user" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>My Profile</Text>
            </Body>
          </ListItem>
           
          <ListItem onPress={() => this.props.navigation.navigate("Notifications")} icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("Notifications")} active name="notifications-outline" type="Ionicons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Notifications</Text>
            </Body>
          </ListItem>

          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("AddPerson")}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("AddPerson")} active name="add-user" type="Entypo" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Post Now</Text>
            </Body>
          </ListItem>

          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("ActiveCases")}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("ActiveCases")} active name="dashboard" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }} >
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Active Posts</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("ResolvedCases")}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("ResolvedCases")} active name="suitcase" type="FontAwesome" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Resolved Cases</Text>
            </Body>
          </ListItem>
          
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Search")}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("Search")} active name="search" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }} >
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Search</Text>
            </Body>
          </ListItem>
          
    
          <Text style={{ borderTopWidth: 1, height: 0, borderColor: "#bfbfbf" }} ></Text>
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Settings")}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("Settings")} active name="setting" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Settings</Text>
            </Body>
          </ListItem>
          <ListItem icon style={styles.barLinkContainer} onPress={() => this.props.navigation.navigate("Aboutus")}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("Aboutus")} active name="info" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }} >
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>About</Text>
            </Body>
          </ListItem>
          
          <ListItem onPress={() => this.props.navigation.navigate("Feedback")} icon style={styles.barLinkContainer} >
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("Feedback")} active name="feedback" type="MaterialIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Feedback</Text>
            </Body>
          </ListItem>
          <Text style={{ borderTopWidth: 1, height: 0, borderColor: "#bfbfbf" }} ></Text>

           </View> :
          
          <Text style={{textAlign:'center',marginTop:20,color:appColor, backgroundColor: bgClr}}>Please Login First For Any Activity</Text>
           
          }

            {/* user login,logout */}
          {userStatus ?
          <View style={{backgroundColor: bgClr}}>
          <ListItem onPress={this.logout} icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={this.logout} active name="logout" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Logout</Text>
            </Body>
          </ListItem>
          </View> 
          :
          <View style={{backgroundColor:bgClr}}>
          <ListItem
          onPress={() => this.props.navigation.navigate("Login")}
           icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon  onPress={() => this.props.navigation.navigate("Login")} active name="login" type="AntDesign" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Login</Text>
            </Body>
          </ListItem>

          <ListItem 
          onPress={() => this.props.navigation.navigate("SignUp")}
           icon style={styles.barLinkContainer}>
            <Left>
              <Button style={{ backgroundColor: appColor }}>
                <Icon onPress={() => this.props.navigation.navigate("SignUp")} active name="account-plus-outline" type="MaterialCommunityIcons" />
              </Button>
            </Left>
            <Body style={{ borderBottomWidth: 0 }}>
              <Text style={{ fontSize: 15, fontWeight:'bold', color: appColor }}>Register</Text>
            </Body>
          </ListItem>
          </View>
          }

        </Content>
      </Content>
    );
  }
}
const mapStateToProps = (state) =>{
  
  return {
    clr:state.colorReducer.color,
    userStatus:state.userReducer.userStatus,
    user:state.userReducer.user,
    registerLoader:state.userReducer.registerLoader
  }
}

export default connect(mapStateToProps,{userLogout})(Sidebar);