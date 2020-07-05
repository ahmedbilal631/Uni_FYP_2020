import React, { Component } from 'react'
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
  } from 'native-base';
  import Carousel from 'react-native-looped-carousel';
  



export default class MySlider extends Component {

    openDrawer = () => {
        this.props.navigation.toggleDrawer();
      };

    render() {
        return (
          <View>
          <Carousel
            style={{width: deviceWidth, height: 250}}
            delay={2000}
            autoplay
            onAnimateNextPage={p => console.log(p)}
            //width={deviceWidth} height={250} indicatorAtBottom indicatorSize={Platform.OS === "android" ? 15 : 10} indicatorColor='#FFF' indicatorOffset={10} indicatorSize={10} delay={5000} loop={true}
          >
            <RNView>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('Story')}
                style={styles.slide}>
                <ImageBackground
                  style={styles.newsPoster}
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

                  <View style={styles.swiperTextContent}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.newsPosterHeader,
                        {color: appColor, fontSize: 18},
                      ]}>
                      An unwavering dream to return home
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
            <RNView>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('Story')}
                style={styles.slide}>
                <ImageBackground
                  style={styles.newsPoster}
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

                  <View style={styles.swiperTextContent}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.newsPosterHeader,
                        {color: appColor, fontSize: 18},
                      ]}>
                      An unwavering dream to return home
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
            <RNView>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('Story')}
                style={styles.slide}>
                <ImageBackground
                  style={styles.newsPoster}
                  source={require('../../media/SliderPackage.jpg')}>
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
                  <View style={styles.swiperTextContent}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.newsPosterHeader,
                        {color: appColor, fontSize: 18},
                      ]}>
                      An unwavering dream to return home
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </RNView>
          </Carousel>
        </View>
                    
        )
    }
}
