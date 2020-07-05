import React, { Component } from 'react';
import { StatusBar,ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon , View} from 'native-base';
import styles from './style';
import {connect} from 'react-redux';

class notificationScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
         appColor :'green',
         userNotification:[]
        }
      }
   
   componentWillReceiveProps(newProp) {
       this.setState({
         appColor:newProp.clr,
         userNotification:newProp.userNotification
       });
     }
   
     componentDidMount() {
       this.setState({ appColor:this.props.clr,userNotification:this.props.userNotification });
     }

    render() {
        const {appColor} = this.state;
        return (
            <Container>
                <View>
                    <StatusBar
                        backgroundColor={appColor}
                        barStyle="light-content"
                    />
                </View>
                <View style={[styles.header,{backgroundColor:appColor}]}>
                    {/* <Icon 
                     onPress={() => this.props.navigation.goBack()}
                    type="AntDesign" name="arrowleft" style={{ color: "#fff",  }} /> */}
                    
                    <Text></Text>
                    
                    <Text style={{ color: "#fff",fontSize:22 }}>Notifications</Text>
                    <Text></Text>
                </View>
                <ScrollView>
                <Content>
                  {this.state.userNotification.length >=1 ?

this.state.userNotification.map((data, index) => {
            
    return (
        <List key={index}>
                        <ListItem>
                            <Left>
                                <Text>{data.name} {data.status} Person! Check</Text>
                            </Left>
                            <Right>
                                <Icon
                                
                                onPress={() =>
                                    this.props.navigation.navigate("PersonDetail", {
                                      data: {
                                        id: data.id,
                                        name: data.name,
                                        status: data.status,
                                        post_By: data.post_By,
                                        age: data.age,
                                        gender: data.gender,
                                        disability: data.disability,
                                        description: data.description,
                                        location: data.location,
                                        mobile: data.mobile,
                                        image: data.image
                                      }
                                    })
                                  }

                                name="arrow-forward" />
                            </Right>
                        </ListItem>
                       
                    </List>
                 
    );
  })
                  

: 
                    
                  <Text style={{textAlign:'center',fontWeight:'bold',marginTop:10}}>No Notification yet!</Text> }
                    
                </Content>
                </ScrollView>
            </Container>
        );
    }
}

const mapStateToProps = (state) =>{
  
    return {
      clr:state.colorReducer.color,
      userNotification:state.missingPersons.userNotification
    }
  }
  
  export default connect(mapStateToProps,null)(notificationScreen);