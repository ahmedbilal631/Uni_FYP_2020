import React, { Component } from "react";
import { StatusBar, ImageBackground, Image,AsyncStorage } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  View,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Content,
  Switch,
  ListItem
} from "native-base";
import { connect } from "react-redux";
import { styles } from "./style";
import {getStartChangeColor} from '../../redux/actions/colorActions';

// var appColor="#34495e";
var appColor="#fe3562";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nativePink: true,
      green:false,
      darkPink: false,
      darkGreen:false,
      appColor: '#05CE1D',
      appLogoClr: 'pink',
      themeClr: 'light',
      bgClr: '#fefbfb',
      // nightblack:false,
      // darkorange:false
    };
  }

  
  componentDidMount() {
    this.setState({
      appColor: this.props.clr,
    });
    if(this.props.clr == '#009700'){
      this.setState({appLogoClr: 'green'});
    }
    else if(this.props.clr == "#fe3563"){
      this.setState({themeClr: 'darkPink', bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
    }
    appColor= this.props.clr;
     switch (appColor) {
      //  case '#34495e':
       case '#fe3562':
       {
        this.setState({
          nativePink:true,
          green:false,
          darkPink: false,
          darkGreen:false,
          // nightblack:false,
          // darkorange:false,
        })
        break;
      }
      // case '#05CE1D':
      case '#009700':
       {
        this.setState({
          nativePink:false,
          green:true,
          darkPink: false,
          darkGreen:false,
          // nightblack:true,
          // darkorange:false,
        })
        break;
      }

      // case '#f39c12':
      case '#fe3563':
       {
        this.setState({
          // darkorange:true,
          // nightblack:false,
          nativePink:false,
          green:false,
          darkPink: true,
          darkGreen:false,
          
        })
        break;
      }
      case '#009701':
        {
         this.setState({
           // darkorange:true,
           // nightblack:false,
           nativePink:false,
           green:false,
           darkPink: false,
           darkGreen:true,
           
         })
         break;
       }
         
       default:
         break;
     }

    

  }
  

  nativePinkApply = () => {
    if (this.state.nativePink !== true) {
      this._storeData('#fe3562');
      // this._storeData('#34495e');
      this.setState({
        nativePink:true,
        green:false,
        darkPink:false,
        darkGreen:false,
        // blue:false,
        // red:false,
        // darkorange:false,
      })
    }
  };

  greenApply = () => {
    if (this.state.green !== true) {
      this._storeData('#009700');
      // this._storeData('#34495e');
      this.setState({
        nativePink:false,
        green:true,
        darkPink:false,
        darkGreen:false,
        // blue:false,
        // nightblack:false,
        // darkorange:false,
      })
    }
  };

 //dark themes are here
  DarkPinkApply = () => {
    if (this.state.darkPink !== true) {
      this._storeData('#fe3563');
      // this._storeData('#34495e');
      this.setState({
        nativePink:false,
        green:false,
        darkPink:true,
        darkGreen:false,
        // red:false,
        // darkorange:false,
      })
    }
  };
  DarkGreenApply = () => {
    if (this.state.darkGreen !== true) {
      this._storeData('#009701');
      // this._storeData('#34495e');
      this.setState({
        nativePink:false,
        green:false,
        darkPink:false,
        darkGreen:true,
        // red:false,
        // darkorange:false,
      })
    }
  };

  //blue color theme is here
/*
  blueApply = () => {
    if (this.state.blue !== true) {
      this._storeData('#000080');
      // this._storeData('#34495e');
      this.setState({
        nativePink:false,
        green:false,
        blue:true,
        red:false,
        darkorange:false,
      })
    }
  };

  redApply = () =>{
    if (this.state.red !== true) {
      this._storeData('#ba0000');
    this.setState({
      red:true,
      green:false,
      blue:false,
      nativePink:false,
      darkorange:false,
      
    })
  }
}

darkOrangeApply =() => {
  if (this.state.darkorange !== true) {
    this._storeData('#f39c12');
  this.setState({
    darkorange:true,
    green:false,
    blue:false,
    red:false,
    nativePink:false,
    
  })
}
}
*/

_storeData = async (val) => {
  appColor = val;
  this.props.getStartChangeColor(val);
  try {
    await AsyncStorage.setItem('color', val);
  } catch (error) {
    console.log('err',error);
    
    // Error saving data
  }
}



  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  componentWillReceiveProps(newProp){
    // alert('sjkhkd');
    this.setState({
      appColor:newProp.clr,
      bgClr: newProp.clr == '#fe3563'?'#272324':newProp.clr == '#009701'? '#272324': '#fefbfb',
    });
  }

  render() {
    const {bgClr, appColor} = this.state;
    //my styling code is here
    const listItemClr = bgClr == '#272324'?'#fefbfb':'black';
    return (
      <Container>

        <StatusBar backgroundColor={'#E6DBDD'} barStyle="dark-content" />
        <View style={[styles.header,{backgroundColor:appColor,}]}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />

          <Text style={styles.heading}>Settings</Text>
          
          <Text></Text>
          
        </View>

        <View style={{backgroundColor: bgClr, height: '100%'}}>


        <View style={{alignItems:'center',marginTop:10,marginBottom:10}}>
           
           <Text style={{fontWeight:'bold',color:appColor}}> Choose Your Favourite Theme </Text>
           
         </View>

        <ListItem icon style={{borderBottomColor: listItemClr, borderBottomWidth: 2}}>
          <Left>
            <Button style={
             {backgroundColor: "#fe3562"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: listItemClr, fontWeight: 'bold'}}>Pink Theme</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.nativePink}
              onValueChange={this.nativePinkApply}
            //   onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "#fe3562"}}
              // trackColor={{false:"lightgray" , true: "#34495e"}}

            />
          </Right>
        </ListItem>

        <ListItem icon style={{borderBottomColor: listItemClr, borderBottomWidth: 2}}>
          <Left>
            <Button style={
              {backgroundColor: "#009700"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: listItemClr, fontWeight: 'bold'}}>Green Theme</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.green}
              onValueChange={this.greenApply}
            //   onTintColor="#00ff00"
            //   tintColor=
            trackColor={{false:"lightgray" , true: "#009700"}}
              // trackColor={{false:"lightgray" , true: "#34495e"}}
            />
          </Right>
        </ListItem>
{/* dark modes are here */}
        <ListItem icon style={{borderBottomColor: listItemClr, borderBottomWidth: 2}}>
          <Left>
            <Button style={
             {backgroundColor: "#433d3e"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: listItemClr, fontWeight: 'bold'}}>Pink-Dark Mode</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.darkPink}
              onValueChange={this.DarkPinkApply}
            //   onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "#fe3563"}}
              // trackColor={{false:"lightgray" , true: "#34495e"}}
              />
          </Right>
        </ListItem>

        <ListItem icon style={{borderBottomColor: listItemClr, borderBottomWidth: 2}}>
          <Left>
            <Button style={
             {backgroundColor: "#433d3e"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
            <Text style={{color: listItemClr, fontWeight: 'bold'}}>Green-Dark Mode</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.darkGreen}
              onValueChange={this.DarkGreenApply}
            //   onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "#009701"}}
              // trackColor={{false:"lightgray" , true: "#34495e"}}
              />
          </Right>
        </ListItem>

        </View>


        {/* <ListItem icon>
          <Left>
          <Button style={
             {backgroundColor: "#000080"} }>
             <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
          </Left>
          <Body>
          <Text>Blue Theme</Text>
          </Body>
          <Right>
            <Switch
              value={this.state.blue}
              onValueChange={this.blueApply}
            //   onTintColor="#00ff00"
            //   tintColor=
              trackColor={{false:"lightgray" , true: "#000080"}}
              // trackColor={{false:"lightgray" , true: "#34495e"}}
              />
          </Right>
          </ListItem>
          
        <ListItem icon>
        <Left>
            <Button style={
             {backgroundColor: "#ba0000"} }>
             <Icon  type="Ionicons" name="ios-color-palette" />
             </Button>
             </Left>
             <Body>
            <Text>Red Theme</Text>
          </Body>
          <Right>
            <Switch
            value={this.state.red}
            onValueChange={this.redApply}
              // onTintColor="#00ff00"
            //   tintColor=
            trackColor={{false:"lightgray" , true: "#ba0000"}}

            />
            </Right>
        </ListItem>


        <ListItem icon>
        <Left>
        <Button style={
             {backgroundColor: "#f39c12"} }>
              <Icon  type="Ionicons" name="ios-color-palette" />
            </Button>
            </Left>
            <Body>
            <Text>Orange</Text>
            </Body>
          <Right>
            <Switch
            value={this.state.darkorange}
              onValueChange={this.darkOrangeApply}
              // onTintColor="#00ff00"
            //   tintColor=
            trackColor={{false:"lightgray" , true: "#f39c12"}}

            />
            </Right>
          </ListItem> */}
         

      </Container>
    );
  }
}


const mapStateToProps = state => {
  return {
    clr:state.colorReducer.color
  };
};


export default connect(mapStateToProps,{getStartChangeColor})(componentName);