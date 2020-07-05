import React, { Component } from "react";
import { StatusBar, ImageBackground, ScrollView, Image } from "react-native";
import DisplayLogo from '../../DisplayLogo';
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
  Content
} from "native-base";
import {connect} from 'react-redux';
import { styles } from "./style";

class AboutUs extends Component {

   constructor(props) {
     super(props)
     this.state = {
      appColor: '',
      themeClr: 'light',
      bgClr: '#fefbfb', 
      logoClr : 'pink',

     }
   }

componentWillReceiveProps(newProp) {
 
    this.setState({
      appColor:newProp.clr
    });
  }

  //....................................

  //Component did mount is here
  componentDidMount() {
    this.setState({appColor: this.props.clr})
    if(this.props.clr == '#009700'){
      this.setState({logoClr: 'green'});
    }
    else if(this.props.clr == "#fe3563"){
      this.setState({logoClr: 'darkPink', bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({logoClr: 'darkGreen', bgClr: '#272324'})
    } 
    // Dimensions.addEventListener('change', this.getOrientation);
  }

  //.....................................



  render() {
    const {appColor, bgClr} = this.state;
    console.debug(this.state.appColor);
    const statusBarClr = '#E6DBDD';

   
    return (
      <Container>
        <StatusBar backgroundColor={statusBarClr} barStyle="dark-content" />
        <View style={[styles.header,{backgroundColor: appColor}]}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={styles.headerIcon}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />
          <Text style={styles.heading}>About Us</Text>
          <Text></Text>         
        </View>

        <ScrollView style={{backgroundColor: bgClr}}>
          <View style={{marginTop: -15, paddingVertical: 0}}>
           <DisplayLogo />
           </View>

            <View style={{paddingHorizontal: 15, marginVertical: 15}}>
              <Text style={{textAlign:'justify', color: bgClr == '#fefbfb'? 'black': 'white'}}>
              <Text style={{fontWeight: 'bold', color: appColor,}}>Lets Find_ 
              </Text>
                 is a plateform where You can find your persons, who are missing. This app can help you a lot,
                 in tracing your lost ones.
              </Text>
            </View>

        <View style={[styles.contactHeadView,{ backgroundColor: appColor}]}>
          <View>
            <Icon
              style={styles.contectIcon}
              type="FontAwesome"
              name="facebook"
            />
          </View>
          <View>
            <Icon style={styles.contectIcon} type="Entypo" name="twitter" />
          </View>
          <View>
            <Icon
              style={styles.contectIcon}
              type="AntDesign"
              name="googleplus"
              />
          </View>
          <View>
            <Icon style={styles.contectIcon} type="Entypo" name="skype" />
          </View>
        </View>

        <View style={styles.creditsContainer}>
          <View>
            <Text style={{color: appColor, marginVertical: 5}}>Credits</Text>
          </View>
          <View>
            <Card style={styles.headerCardContainer}>
              <CardItem style={styles.headerCardItem}>
                <Body style={{ borderRadius: 10 }}>
              
                    <View style={styles.cardBody}>
                      <View style={styles.creditorsThumbail}>
                        <Thumbnail
                          large
                          source={require("../../media/naveed.jpg")}
                          style={{width: 70, height: 70}}
                        />
                      </View>
                      <View style={styles.AboutApp}>
                        <View>

                          <Text style={styles.devName}>Naveed Sarwar</Text>
                        </View>
                        <View>
                          <Text style={styles.devDescription}>
                          Full Stack MERN and Cloud Native Engineer
                          </Text>
                        </View>
                      </View>
                    </View>
                </Body>
              </CardItem>
            </Card>

            <Card style={styles.headerCardContainer}>
              <CardItem style={styles.headerCardItem}>
                <Body style={{ borderRadius: 10 }}>
              
                    <View style={styles.cardBody}>
                      <View style={styles.creditorsThumbail}>
                        <Thumbnail
                          large
                          source={require("../../media/faizan.jpg")}
                          style={{width: 70, height: 70}}
                          />
                      </View>
                      <View style={styles.AboutApp}>
                        <View>

                          <Text style={styles.devName}>Faizan Amin</Text>
                        </View>
                        <View>
                          <Text style={styles.devDescription}>
                          Data Scientist Solution Experts
                          </Text>
                        </View>
                      </View>
                    </View>
                </Body>
              </CardItem>
            </Card>
          </View>
        </View>
       </ScrollView>
      </Container>
    );
  }
}


const mapStateToProps = (state) =>{
  
  return {
    clr:state.colorReducer.color,
  }
}

export default connect(mapStateToProps,null)(AboutUs);