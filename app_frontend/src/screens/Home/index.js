import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Share,
  View as RNView,
  Platform,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import {
  View,
  Text,
  Icon,
  Card,
  CardItem,
  Body,
  Container,
  Drawer,
  Button,
  Spinner,
  Row,
} from 'native-base';

import {Grid, Col} from 'react-native-easy-grid';
import Carousel from 'react-native-looped-carousel';

import {styles1} from './style';
import {connect} from 'react-redux';
import ImageView from 'react-native-image-view';
import EndPoint from '../../endpoint';
import styles from './sliderCSS.js';

Drawer.defaultProps.styles.mainOverlay.elevation = 0;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appColor: '#05CE1D',
      appLogoClr: 'pink',
      themeClr: 'light',
      bgClr: '#fefbfb',
      missingPersons: [],
      // loader: true,
      loader: false,
      isImageViewVisible: false,
      orientation: Dimensions.get('screen').width > 600? 'landscape': 'portrait',
      getWidth: Dimensions.get('screen').width,
    };
  }

  componentWillReceiveProps(newProp){
    // alert('sjkhkd');
    this.setState({
      appColor:newProp.clr,
      bgClr: newProp.clr == '#fe3563'?'#272324':newProp.clr == '#009701'? '#272324': '#fefbfb',
    });
    return {
      missingPersons: newProp.missingPersons,
      loader: false,
    }  
  }
  // getDerivedStateFromProps(props, state) {
  
  //   return {
  //     missingPersons: props.missingPersons,
  //     loader: false,
  //   }
  // }
//my addition
componentWillUpdate(props, state){
  return true;
}
// getDerivedStateFromProps(newProp) {
//   this.setState({
//     appColor:newProp.clr,
//     bgClr: newProp.clr == '#fe3563'?'#272324':newProp.clr == '#009701'? '#272324': '#fefbfb',
//   });
  // if(this.state.appColor == '#009700'){
  //   this.setState({appLogoClr: 'green'});
  // }
  // else if(this.state.appColor == "#fe3563"){
  //   this.setState({themeClr: 'darkPink', bgClr: '#272324'})
  // }
  // else if(this.state.appColor == "#009701"){
  //   this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
  // }
// }
// componentWillReceiveProps(newProp) {
//   // this.setState({
//   //   appColor:newProp.clr
//   // }
//   // if(this.state.appColor == '#009700'){
//   //   this.setState({appLogoClr: 'green'});
//   // }
//   // else if(this.state.appColor == "#fe3563"){
//   //   this.setState({themeClr: 'darkPink', bgClr: '#272324'})
//   // }
//   // else if(this.state.appColor == "#009701"){
//   //   this.setState({themeClr: 'darkGreen', bgClr: '#272324'})
//   // }
// }

getOrientation = () => {
  if (Dimensions.get('window').width < Dimensions.get('window').height) {
    this.setState({ orientation: 'portrait',
    //  myHeight: Dimensions.get('screen').height,
  getWidth: Dimensions.get('screen').width
  });
  } else { this.setState({ orientation: 'landscape',
  //  myHeight: Dimensions.get('screen').height,
  // myWidth: Dimensions.get('screen').width 
  getWidth: Dimensions.get('screen').width 
});
 }
  // this.changeOrientation();
};




  componentDidMount() {
    // if(this.props.missingPersons.length > 0) {
    //   this.setState({
    //     loader: false
    //   })
    // }
    Dimensions.addEventListener('change', this.getOrientation);
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
  }

  openDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  // For loader temporary

  render() {
    console.log(
      'missing persons lists is here *****',
      this.props.missingPersons,
      this.state.loader
    );
    const deviceWidth = Dimensions.get('window').width;
    const {userStatus} = this.props;
    const {isImageViewVisible, currentImage, appColor} = this.state;
  ///my variables  
    // const zong = '#009700';
    let {bgClr}= this.state;
    const statusBarClr = '#E6DBDD';
    let logoImg = '../../media/finalLogoPink.png';
  
  const {orientation, getWidth} = this.state;
  let newsPoster =  {
    height: 330,
    width: getWidth < 600? '100%': getWidth,
    // width: 640,
    flexGrow: 0,
    position: "relative",
    
  }; 
  let newsPosterX =  {
    height: 330,
    width: '100%',
    flexGrow: 1,
    position: "relative"
  }; 
  let   slide = {
    flexGrow: 1,
    width: getWidth,
    height: 330,
    backgroundColor: "transparent"
  };
  let sliderTextBoardStyle ={
    width: getWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 40,
    position: "absolute",
    top:'50%',
    paddingHorizontal: 20,
    alignSelf:'center',
    // textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }

  //.............................
  // let myclr = AsyncStorage.getItem('color');
  // const myclr = AsyncStorage.getItem('color');
  
    return (
      <Container style={{backgroundColor: bgClr}}> 
        <View>
          <StatusBar backgroundColor={statusBarClr} barStyle="dark-content" />
        </View>

        <ScrollView>
        <View>
    {/* <Text>my orientation + {orientation} + width + {getWidth} + color + {bgClr} + myclr +  </Text> */}
          <Carousel
            style={{width: getWidth, height: 250, flex: 1,}}
            delay={2000}
            autoplay
            onAnimateNextPage={p => console.log(p)}
            width={getWidth} height={250} indicatorAtBottom indicatorSize={Platform.OS === "android" ? 15 : 10} indicatorColor='#FFF' indicatorOffset={10} indicatorSize={10} delay={5000} loop={true}
          >
            <RNView>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('Story')}
                style={slide}
                // style={{width: '100%'}}
                >
                <ImageBackground
                  // style={orientation == 'portrait'?styles.newsPoster:styles.newsPosterX}
                  style={newsPoster}
                  // style={orientation == 'landscape'? newsPoster :{width: '100%'}}
                  source={require('../../media/SliderPackage/Pic_1.jpg')}>
                  <Button
                    transparent
                    style={{position: 'absolute', top: 7}}
                    transparent
                    onPress={() => this.openDrawer()}>
                    <Icon name="menu" style={{color: appColor, fontSize: 30}} />
                  </Button>
                  <Button
                    style={{position: 'absolute', top: 10, right: 5}}
                    transparent>
                    <Icon
                      onPress={() => this.props.navigation.navigate('Search')}
                      type="EvilIcons"
                      active
                      name="search"
                      style={{color: appColor, fontSize: 25}}
                    />
                  </Button>

                  <View 
                  // style={styles.swiperTextContent}
                  style={sliderTextBoardStyle}
                  >
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.newsPosterHeader,
                        {
                          color: appColor,
                           fontSize: 18,  paddingVertical: 5,   },
                      ]}>
                      I am affraid of kidnappers, Help me
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
            <RNView>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('Story')}
                // style={styles.slide}>
                style={slide}>
                <ImageBackground
                  // style={orientation == 'portrait'?styles.newsPoster:styles.newsPosterX}
                  style={newsPoster}
                  source={require('../../media/SliderPackage/Pic_2.jpg')}>
                  <Button
                    transparent
                    style={{position: 'absolute', top: 7}}
                    transparent
                    onPress={() => this.openDrawer()}>
                    <Icon name="menu" style={{color:appColor, fontSize: 30}} />
                  </Button>
                  <Button
                    style={{position: 'absolute', top: 10, right: 5}}
                    transparent>
                    <Icon
                      onPress={() => this.props.navigation.navigate('Search')}
                      type="EvilIcons"
                      active
                      name="search"
                      style={{color: appColor, fontSize: 25}}
                    />
                  </Button>

                  <View style={sliderTextBoardStyle}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.newsPosterHeader,
                        {color: appColor, fontSize: 18, },
                      ]}>
                      I miss my parents
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
            <RNView>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('Story')}
                // style={styles.slide}>
                style={slide}>
                <ImageBackground
                  // style={orientation == 'portrait'?styles.newsPoster:styles.newsPosterX}
                  style={newsPoster}
                  source={require('../../media/SliderPackage/Pic_3.jpg')}>
                  <Button
                    transparent
                    style={{position: 'absolute', top: 7}}
                    transparent
                    onPress={() => this.openDrawer()}>
                    <Icon name="menu" style={{color: appColor, fontSize: 30}} />
                  </Button>
                  <Button
                    style={{position: 'absolute', top: 10, right: 5}}
                    transparent>
                    <Icon
                      onPress={() => this.props.navigation.navigate('Search')}
                      type="EvilIcons"
                      active
                      name="search"
                      style={{color: appColor, fontSize: 25}}
                    />
                  </Button>
                  <View style={sliderTextBoardStyle}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.newsPosterHeader,
                        {color: appColor, fontSize: 18, },
                      ]}>
                      An unwavering dream to return home
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
{/* my Addition */}
            <RNView>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('Story')}
                // style={styles.slide}>
                style={slide}>
                <ImageBackground
                  style={newsPoster}
                  source={require('../../media/SliderPackage/Pic_4.jpg')}>
                  <Button
                    transparent
                    style={{position: 'absolute', top: 7}}
                    transparent
                    onPress={() => this.openDrawer()}>
                    <Icon name="menu" style={{color: appColor, fontSize: 30}} />
                  </Button>
                  <Button
                    style={{position: 'absolute', top: 10, right: 5}}
                    transparent>
                    <Icon
                      onPress={() => this.props.navigation.navigate('Search')}
                      type="EvilIcons"
                      active
                      name="search"
                      style={{color: appColor, fontSize: 25}}
                    />
                  </Button>
                  <View style={sliderTextBoardStyle}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.newsPosterHeader,
                        {color: appColor, fontSize: 18, },
                      ]}>
                      Its time to meet your missing child
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>

          </Carousel>
        </View>

        {/* PLus Button Ends*/}

        <Text style={{color: appColor, fontWeight: 'bold', marginLeft: 11}}>
          Recent Stories
        </Text>

        {this.state.loader ? (
          <Spinner style={{marginTop: 30}} color={appColor} />
        ) : this.props.missingPersons.length == 0 ? (
          <Text
            style={{textAlign: 'center', color:'#9C9495', fontWeight: 'bold', marginTop: 30}}>
            No Stories Yet
          </Text>
        ) : (
            <View>

            {this.props.missingPersons.map((data, index) => {
              console.log("Data", data)
              return (
                <View key={index} style={styles1.cardContainer}>
                  <Card>
                    <CardItem>
                      <Body>
                        <View style={styles1.cardInnerContainer}>
                          <View>
                            {/* here model  */}

                            <TouchableOpacity
                              onPress={() =>
                                this.setState({
                                  isImageViewVisible: true,
                                  currentImage: [
                                    {
                                      source: {
                                        uri: `${EndPoint}/data/${data.status}/${data.image}`,
                                      },
                                    },
                                  ],
                                })
                              }>
                              <Image
                                style={styles1.filterImage}
                                source={{
                                  uri: `${EndPoint}/data/${data.status}/${data.image}`,
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                          <View style={styles1.textContainer}>
                            <TouchableOpacity
                              style={{width: '100%'}}
                              onPress={() =>
                                this.props.navigation.navigate('PersonDetail', {
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
                                    image: data.image,
                                  },
                                })
                              }>
                              <View style={styles1.cardHeader}>
                                <Text>{data.name}</Text>

                                <Text style={{color: appColor}}>
                                  {data.status}
                                </Text>
                              </View>

                              <View>
                                <Text style={styles1.nameText}>
                                  Posted by {data.post_By}
                                </Text>
                              </View>

                              <View
                                style={{
                                  flexDirection: 'row',
                                  paddingTop: 5,
                                }}>
                                <Icon
                                  style={{marginLeft: -5}}
                                  type="EvilIcons"
                                  name="location"
                                />
                                <Text style={{fontSize: 13}}>
                                  {data.location}
                                </Text>

                                <Icon
                                  style={{
                                    fontSize: 14,
                                    marginLeft: 6,
                                    marginTop: 1,
                                    marginRight: 2,
                                  }}
                                  name="md-time"
                                  type="Ionicons"
                                />

                                <Text style={{fontSize: 12}}>
                                  {data.createdat}
                                </Text>
                              </View>

                              <View style={styles1.cardHeader}>
                                <Text
                                  style={styles1.readMore}
                                  onPress={() =>
                                    this.props.navigation.navigate(
                                      'PersonDetail',
                                      {
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
                                          image: data.image,
                                        },
                                      },
                                    )
                                  }>
                                  Read More
                                </Text>

                                <Icon
                                  onPress={() => {
                                    Share.share({
                                      message: `*Missing Person Alert* \n Name: *${data.name}* \n Age: *${data.age}* \n Gender: *${data.gender}* \n Disability: *${data.disability}* \n Location: *${data.location}* \n Contact No.: *${data.mobile}*`,
                                      url:
                                      'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',
                                      title: 'Wow, did you see that?',
                                    });
                                  }}
                                  style={styles1.shareIcon}
                                  type="AntDesign"
                                  name="sharealt"
                                />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>
                </View>
              );
            })}
            </View>
        )}

        <ImageView
          images={currentImage}
          imageIndex={0}
          onClose={() => this.setState({isImageViewVisible: false})}
          isVisible={isImageViewVisible}
          />
          </ScrollView>
      </Container>
      // </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus,
    missingPersons: state.missingPersons.homeStories,
    loader: state.missingPersons.loader,
    clr: state.colorReducer.color
  };
};

export default connect(mapStateToProps, null)(Home);
