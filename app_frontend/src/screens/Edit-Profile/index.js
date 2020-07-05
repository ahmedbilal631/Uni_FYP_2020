import React, { Component } from "react";
import { ImageBackground, Image, StatusBar, ScrollView } from "react-native";
import {
  Text,
  Content,
  Item,
  Input,
  Form,
  Icon,
  View,
  Button,
  Label,
  Textarea,
  Container
} from "native-base";
import styles from "./style";
import {connect} from 'react-redux';


class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      cell: "",
      description: "",
      contry: "",
      appColor :'green',
      bgClr: '#fefbfb',
    };
  }

  componentWillReceiveProps(newProp) {
    this.setState({
      appColor:newProp.clr
    });
  }

//here is the component did mount method

componentDidMount() {
  this.setState({appColor: this.props.clr,})

 if(this.props.clr == "#fe3563"){
    this.setState({ bgClr: '#272324'})
  }
  else if(this.props.clr == "#009701"){
    this.setState({bgClr: '#272324'})
  } 
  // Dimensions.addEventListener('change', this.getOrientation);
}

  onSubmit = () => {
    console.log("====================================");
    console.log(this.state.Fname);
    console.log(this.state.Lname);
    console.log(this.state.cell);
    console.log(this.state.description);
    console.log(this.state.contry);
    console.log("====================================");
  };

  render() {
    const {appColor, bgClr} = this.state;

    //...my styling code is here
    const myLable = {
      // marginLeft: 3,
      fontWeight: 'bold',
      marginBottom:7,
      color: appColor,
    }
    //.............................
    //basic form style
    const txtBasicInfoStyle ={
      flex: 1, flexWrap: 'wrap',width: "100%",
      // borderWidth: 2,
      borderBottomColor: bgClr == '#fefbfb'?'black':'white',
      borderBottomWidth: 2,
      color: appColor,
      // borderBottomWidth:2,
    }
    //................................
    //detail area
    const txtDetailArea = {
      width:"100%",
      marginTop:5,
      borderBottomColor: bgClr == '#fefbfb'?'black':'white',
      borderBottomWidth: 2,
      color: appColor,
    }
    return (
      <Container style={styles.wrapper}>
        <View>
          <StatusBar backgroundColor={'#E6DBDD'} barStyle="dark-content" />
        </View>
        <View style={[styles.topcontent,{backgroundColor : appColor}]}>
          <Icon
            onPress={() => this.props.navigation.navigate("Profile")}
            type="AntDesign"
            name="close"
            style={styles.topCross}
          />
          <Text style={styles.topText}> Edit Profile </Text>
          <Text onPress = {this.onSubmit} style={styles.topsave}> Save </Text>
        </View>
        <ScrollView style={{backgroundColor: bgClr}}>
          <View style={styles.profileImageContainer}>
            <Image source={require("../../media/Edit-profile-top-image.png")} />
          </View>
          {/* Form Wala Part starts */}
          <Form style={styles.formStyle}>
            <View style={styles.flContainer}>
              <Item stackedLabel style={styles.firstNameWrapper} regular>
                {/* <Label style={styles.label}>First Name:-</Label> */}
                <Label style={myLable}>First Name:-</Label>
                <Input
                  style={txtBasicInfoStyle}
                  placeholder="Saif"
                  onChangeText={event => {
                    this.setState({
                      Fname: event
                    });
                  }}
                  placeholderTextColor="#808080"
                />
              </Item>
              <Item stackedLabel style={styles.firstNameWrapper} regular>
                <Label style={myLable}>Last Name:-</Label>
                <Input
                  style={txtBasicInfoStyle}
                  placeholder="Amervi"
                  onChangeText={event => {
                    this.setState({
                      Lname: event
                    });
                  }}
                  placeholderTextColor="#808080"
                />
              </Item>
            </View>
            <Item stackedLabel style={styles.phonenumberWrapper} regular>
              <Label style={myLable}>Country:-</Label>
              <Input
                // style={styles.firsNameStyle}
                style={txtBasicInfoStyle}
                placeholder="Pakistan"
                onChangeText={event => {
                  this.setState({
                    contry: event
                  });
                }}
                placeholderTextColor="#808080"
              />
            </Item>
            <Item stackedLabel style={styles.phonenumberWrapper} regular>
              <Label style={myLable}>Phone Number:-</Label>
              <Input
                style={txtBasicInfoStyle}
                placeholder="+92 324 7636236"
                onChangeText={event => {
                  this.setState({
                    cell: event
                  });
                }}
                placeholderTextColor="#808080"
              />
            </Item>
            <Item stackedLabel style={styles.phonenumberWrapper} regular>
              <Label style={myLable}>Description:-</Label>
              {/* <Input style={styles.firsNameStyle} placeholder="My Name Is Fayyaz . This is my detail" placeholderTextColor="#808080" /> */}
              <Textarea
                rowSpan={5}
                placeholder="Write some details about yourself, your job type, your educational and as you want to tell.."
                onChangeText={event => {
                  this.setState({
                    description: event
                  });
                }}
                style={txtDetailArea}
              />
            </Item>

          </Form>
          </ScrollView>
          <View style={{backgroundColor: bgClr}}>
        <Button
          onPress={this.onSubmit}
          full
          regular
          style={{
            marginVertical: 10,
            marginHorizontal: 2,
            backgroundColor:appColor,
            borderRadius: 20
          }}
          >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Save & Update
          </Text>
        </Button>
          </View>
      </Container>
    );
  }
}


const mapStateToProps = (state) =>{
  
  return {
    clr:state.colorReducer.color,
  }
}

export default connect(mapStateToProps,null)(SignUpScreen);












