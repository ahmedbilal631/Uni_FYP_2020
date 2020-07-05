import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar,ScrollView } from 'react-native';
import { Text, Content, Item, Input, Form, Icon, View, Button, CheckBox , Container} from 'native-base';
import styles from './style';
import {connect} from 'react-redux';

class ShowProfile extends Component {


    constructor(props) {
        super(props)
        this.state = {
         appColor :'green',
         bgClr: '#fefbfb',
        }
      }
   
   componentWillReceiveProps(newProp) {
       this.setState({
         appColor:newProp.clr
       });
     }
   
//here is the component did mount method

componentDidMount() {
    this.setState({appColor: this.props.clr})
  
   if(this.props.clr == "#fe3563"){
      this.setState({ bgClr: '#272324'})
    }
    else if(this.props.clr == "#009701"){
      this.setState({bgClr: '#272324'})
    } }

    //.............................................

    render() {

        const {appColor, bgClr } = this.state;
        const {user} = this.props;

        //my style code is here
        //stat style
        const statisticalDataStyle = {color: appColor, fontSize: 20, fontWeight: "bold", textAlign: "center", };
        //....................................
        //stat headings
        const statisticalDataHeadingStyle = {color: '#9C9495', fontSize: 15,  textAlign: "center", };
        //...................................
        //profile item style
        const profileItem = {marginTop: 20, flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 2, borderBottomColor: appColor}
        //.................................
        //profile items headings
        const profileItemType   = {color: '#9C9495', fontSize: 15, fontWeight: 'bold',}
        //................................
        //profile items value style
        const profileItemValue   = {color: appColor, fontSize: 15, fontWeight: 'bold',}
        //description style
        const descriptionStyle = {marginTop: 12, borderWidth: 1, borderColor: appColor, padding: 4, justifyContent:'center' }
        //description title style
        const descriptionTitle   = {color: '#9C9495', fontSize: 15, fontWeight: 'bold',}
        //description text
        const descriptionText   = {color: appColor, fontSize: 15,}


        return (
            <Container style={styles.wrapper}>
                <View>
                    <StatusBar
                        backgroundColor={'#E6DBDD'}
                        barStyle="dark-content"
                    />
                </View>
                <View style={[styles.topcontent,{ backgroundColor: appColor}]}>
                    <Icon
                    onPress={() => this.props.navigation.goBack()}
                    type='Ionicons' name='ios-arrow-round-back' style={styles.topCross} />
                    {/* <Text style={styles.topText}> @{user.name} </Text> */}
                    <Text style={styles.topText}> @saifamervi </Text>
                    <Text style={styles.topsave}>  </Text>
                </View>
                <ScrollView style={{backgroundColor: bgClr}}>
                <Content style={styles.bodyContent}>
                    <View style={styles.profileHead}>
                        <Image source={require('../../media/show-profile.png')} style={styles.profileImage} />
                        <View style={styles.mrgTop}>
                            {/* <Text style={styles.total}> 2 </Text> */}
                            <Text style={statisticalDataStyle}> 2 </Text>
                            {/* <Text style={styles.history}> Posts </Text> */}
                            <Text style={statisticalDataHeadingStyle}> Posts </Text>
                        </View>
                        <View style={styles.mrgTop}>
                            <Text style={statisticalDataStyle}> 1 </Text>
                            <Text style={statisticalDataHeadingStyle}> Missing </Text>
                        </View>
                        <View style={styles.mrgTop}>
                            <Text style={statisticalDataStyle}> 1 </Text>
                            <Text style={statisticalDataHeadingStyle}> Found </Text>
                        </View>
                    </View>


                    <View style={profileItem}>
                        {/* <Text h2>{user.name}</Text> */}
                        <Text style={profileItemType}>Full name :</Text>
                        <Text style={profileItemValue}>Saif Amervi</Text>
                    </View>

                    <Content style={styles.contactUs}>
                    <View style={profileItem}>
                        {/* <Text h2>{user.name}</Text> */}
                        <Text style={profileItemType}>Country :</Text>
                        <Text style={profileItemValue}>Pakistan</Text>
                    </View>
                        {/* <View style={styles.contactInfo}> */}
                        <View style={profileItem}>
                            <Text style={profileItemType}>Phone Number :</Text>
                            {/* <Text style={{ color: appColor}}>{user.cell}</Text> */}
                            <Text style={profileItemValue}>030302902783</Text>
                        </View>
                        <View style={profileItem}>
                            <Text style={profileItemType}>Email Address :</Text>
                            {/* <Text  style={{ color: appColor}}>{user.email}</Text> */}
                            <Text  style={profileItemValue}>saif786@gmail.com</Text>
                        </View>
                        <View style={descriptionStyle}>
                        {/* <Text h2>{user.name}</Text> */}
                        <Text style={descriptionTitle}>Description :</Text>
                        <Text style={descriptionText}>Hi, This is me Saif Amervi. I am part time YouTuber but full time programmer.
                        I belong to Punjab Pakistan. I am very excited to see this app. This help me a lot in finding out my pichalla janam.
                        So, don't worry. This is just a dummy text, I wrote for testing purpose.
                        </Text>
                        </View>
                        <View>
                            <Button full 
                            style={[styles.editBtn,{ backgroundColor:appColor, borderRadius: 20,}]} 
                            onPress={() => this.props.navigation.navigate('ProfileEdit')}
                            >
                                <Text style={{fontWeight: 'bold'}}>Edit Profile</Text>
                            </Button>
                        </View>
                    </Content>

                </Content>
                </ScrollView>
            </Container>

        );
    }
}


const mapStateToProps = (state) =>{
  
    return {
      clr:state.colorReducer.color,
      user:state.userReducer.user,
    }
  }
  
  export default connect(mapStateToProps,null)(ShowProfile);