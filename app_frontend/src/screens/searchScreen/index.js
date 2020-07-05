import React, {Component} from 'react';
import axios from 'axios';
import {
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Modal,
  Share,
} from 'react-native';
import {
  View,
  Text,
  Item,
  Input,
  Icon,
  Card,
  CardItem,
  Body,
  Container,
  Picker,
  Form,
  Button,
  Toast,
  Spinner,
} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import styles from './style';
import EndPoint from '../../endpoint';
import {connect} from 'react-redux';
import {search} from '../../redux/actions/SearchAction';
import ImageView from 'react-native-image-view';

const options = {
  title: 'Select Option',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      postShow: false,
      selectedStatus: '',
      selectedDisability: '',
      selectedGender: '',
      selectedAgeGroup: '',
      filterLocation: '',
      image: '',
      searchName: '',
      loader: false,
      onlineURL: false,
      appColor: '#05CE1D',
      fakeArray: [],
      isImageViewVisible: false,
      currentImage: [
        {
          source: {
            uri:
              'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
          },
        },
      ],
    };
  }
  uploadImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        this.setState({
          image: source,
        });
      }
    });
  };

  componentWillReceiveProps(newProp) {
    this.setState({
      appColor: newProp.clr,
    });
  }
  componentDidMount() {
    this.setState({appColor: this.props.clr});
  }

  onSubmit = () => {};
  onStatusChange(value) {
    this.setState({
      selectedStatus: value,
    });
  }
  onDisabilityChange(value) {
    this.setState({
      selectedDisability: value,
    });
  }
  onGenderChange(value) {
    this.setState({
      selectedGender: value,
    });
  }
  onAgeGroupChange(value) {
    this.setState({
      selectedAgeGroup: value,
    });
  }
  toggleFilter = () => {
    const {show} = this.state;
    this.setState(preState => {
      return {
        show: !preState.show,
      };
    });
  };

  SearchHandler = () => {
    const image = this.state.image;
    if (image == '') {
      Toast.show({
        text: 'Please Select an image to search',
        type: 'warning',
        duration: 3000,
      });
    } else {
      this.props.search(image);
      this.setState({
        loader: true,
      });

      const data = new FormData();
      data.append('image', {
        uri: this.state.image.uri,
        type: 'image/jpeg',
        name: `${new Date().getTime()}.jpg`,
      });

      this.setState({
        loader: true,
      });

      axios
        .post(`${EndPoint}/searchbyimage`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(res => {
          console.log('The Response search by image', res.data.output);
          if (res.data.output == undefined) {
            this.setState({
              fakeArray: [],
              loader: false,
              postShow: true,
            });
          } else {
            this.setState({
              fakeArray: res.data.output,
              loader: false,
              postShow: true,
            });
          }
        })
        .catch(err => {
          this.setState({loader: false});
          console.log('ERROR', err);
        });
    }
  };

  filterHandler = () => {
    if (
      this.state.selectedStatus == 'Status' ||
      this.state.selectedDisability == 'Disability' ||
      this.state.selectedGender == 'Gender' ||
      this.state.selectedAgeGroup == 'Age Group'
    ) {
      this.setState({
        selectedStatus: '',
        selectedDisability: '',
        selectedGender: '',
        selectedAgeGroup: '',
      });
    } else if (
      this.state.selectedStatus == '' &&
      this.state.selectedDisability == '' &&
      this.state.selectedGender == '' &&
      this.state.selectedAgeGroup == '' &&
      this.state.filterLocation == '' &&
      this.state.searchName == ''
    ) {
      Toast.show({
        text: 'Select atleast one field',
        type: 'warning',
        duration: 3000,
      });
    } else {
      var data = {
        name: this.state.searchName,
        status: this.state.selectedStatus,
        disability: this.state.selectedDisability,
        gender: this.state.selectedGender,
        age: this.state.selectedAgeGroup,
        location: this.state.filterLocation,
      };

      this.setState({
        loader: true,
      });

      let datas = {
        filters: {
          name: this.state.searchName,
          status: this.state.selectedStatus,
          disability: this.state.selectedDisability,
          gender: this.state.selectedGender,
          age: this.state.selectedAgeGroup,
          location: this.state.filterLocation,
        },
      };

      axios
        .post(EndPoint + '/searchbyfilters', datas)
        .then(res => {
          this.setState({
            fakeArray: res.data.output,
            postShow: true,
            loader: false,
          });
        })
        .catch(err => {
          this.setState({loader: false});
          console.log('err');
          console.log(err);
        });
    }
  };

  render() {
    const {userStatus} = this.props;
    const {isImageViewVisible, currentImage, appColor} = this.state;
    const statusBarClr = '#E6DBDD';
    return (
      <Container>
        <View>
          <StatusBar backgroundColor={statusBarClr} barStyle="dark-content" />
        </View>

        {/* <View style={{backgroundColor: appColor,}}>
          <Icon
            onPress={() => this.props.navigation.goBack()}
            style={{marginLeft: 5, fontWeight:'bold',color:'white'}}
            type="MaterialCommunityIcons"
            name="keyboard-backspace"
          />
          </View> */}

        <View style={[styles.searchContainer, {backgroundColor: appColor}]}>
          <Item style={styles.itemStyle1}>
            <TouchableOpacity
              style={styles.searchInput}
              onPress={this.uploadImage}>
              <Input
                placeholder="Search By Image"
                editable={false}
                value={this.state.image.uri}
                // style={{color: '#fe3562'}}
                placeholderTextColor={appColor}
              />
              <TouchableOpacity
                style={styles.cameraIconBtn}
                onPress={this.SearchHandler}>
                <Icon style={{marginTop: 10, color: appColor}} type="Entypo" name="camera" />
              </TouchableOpacity>
            </TouchableOpacity>
          </Item>
          <TouchableOpacity
            style={styles.filterContainer}
            onPress={this.toggleFilter}>
            <Icon style={{color: 'white'}} name="text" type="Entypo" />

            <Text style={{color: 'white', fontWeight: 'bold'}}>
              More Search Options
            </Text>
          </TouchableOpacity>
          {this.state.show ? (
            <View style={styles.filtersContainer}>
              <Form>
                <View>
                  <Item>
                    <Input
                      placeholder="Search by Name"
                      style={{color: '#fff'}}
                      placeholderTextColor="#fff"
                      onChangeText={name =>
                        this.setState({
                          searchName: name
                            .toLowerCase()
                            .split(' ')
                            .map(
                              s => s.charAt(0).toUpperCase() + s.substring(1),
                            )
                            .join(' '),
                        })
                      }
                    />
                    <Icon
                      active
                      name="user"
                      type="EvilIcons"
                      style={{color: '#fff'}}
                    />
                  </Item>

                  <Item>
                    <Input
                      placeholder="Location"
                      style={{color: '#fff'}}
                      placeholderTextColor="#fff"
                      onChangeText={loaction => {
                        this.setState({
                          filterLocation: loaction
                            .toLowerCase()
                            .split(' ')
                            .map(
                              s => s.charAt(0).toUpperCase() + s.substring(1),
                            )
                            .join(' '),
                        });
                      }}
                    />
                    <Icon
                      active
                      name="search-location"
                      type="FontAwesome5"
                      style={{color: '#fff'}}
                    />
                  </Item>
                </View>
                <View style={styles.selectBoxesContainer}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={
                        <Icon
                          name="ios-arrow-down-outline"
                          style={{color: '#fff'}}
                        />
                      }
                      style={{width: '49%', color: '#fff'}}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedStatus}
                      onValueChange={this.onStatusChange.bind(this)}>
                      <Picker.Item label="Status" value="Status" />
                      <Picker.Item label="Missing" value="Missing" />
                      <Picker.Item label="Found" value="Found" />
                    </Picker>
                  </Item>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{width: '49%', color: '#fff'}}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedDisability}
                      onValueChange={this.onDisabilityChange.bind(this)}>
                      <Picker.Item label="Disability" value="Disability" />
                      <Picker.Item
                        label="Mentally Disable"
                        value="Mentally Disable"
                      />
                      <Picker.Item
                        label="Hearing Loss and Deafness"
                        value="Hearing Loss and Deafness"
                      />
                      <Picker.Item label="Memory Loss" value="Memory Loss" />
                      <Picker.Item
                        label="Speech and Language Disorder"
                        value="Speech and Language Disorder"
                      />
                      <Picker.Item
                        label="Vision Loss and Blindness"
                        value="Vision Loss and Blindness"
                      />
                      <Picker.Item
                        label="Any Physical Disability"
                        value="Any Physical Disability"
                      />
                      <Picker.Item label="Others" value="Others" />
                      <Picker.Item label="Not Disabled" value="Not Disabled" />
                    </Picker>
                  </Item>
                </View>
                <View style={styles.selectBoxesContainer}>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={
                        <Icon
                          name="ios-arrow-down-outline"
                          style={{color: '#fff'}}
                        />
                      }
                      style={{width: '49%', color: '#fff'}}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedGender}
                      onValueChange={this.onGenderChange.bind(this)}>
                      <Picker.Item label="Gender" value="Gender" />
                      <Picker.Item label="Male" value="Male" />
                      <Picker.Item label="Female" value="Female" />
                    </Picker>
                  </Item>
                  <Item picker>
                    <Picker
                      mode="dropdown"
                      iosIcon={<Icon name="ios-arrow-down-outline" />}
                      style={{width: '49%', color: '#fff'}}
                      placeholderIconColor="#fff"
                      selectedValue={this.state.selectedAgeGroup}
                      onValueChange={this.onAgeGroupChange.bind(this)}>
                      <Picker.Item label="Age Group" value="Age Group" />
                      <Picker.Item label="1 to 5" value="1 to 5" />
                      <Picker.Item label="6 to 10" value="6 to 10" />
                      <Picker.Item label="11 to 15" value="11 to 15" />
                      <Picker.Item label="16 to 20" value="16 to 20" />
                      <Picker.Item label="21 to 25" value="21 to 25" />
                      <Picker.Item label="26 to 30" value="26 to 30" />
                      <Picker.Item
                        label="30 to Greater"
                        value="30 to Greater"
                      />
                    </Picker>
                  </Item>
                </View>

                <Button
                  bordered
                  success
                  style={styles.filterBtn}
                  onPress={this.filterHandler}>
                  <Text style={{color: 'white'}}>Search</Text>
                </Button>
              </Form>
            </View>
          ) : (
            <View />
          )}
        </View>

        {this.state.loader ? (
          <View>
            <Spinner color={appColor} />
          </View>
        ) : this.state.postShow ? (
          <ScrollView>
            {this.state.fakeArray.length >= 1 ? (
              <View>
                <Text
                  style={{color: appColor, fontWeight: 'bold', marginLeft: 11}}>
                  Top Results
                </Text>

                {this.state.fakeArray.map((data, index) => {
                  return (
                    <View key={index} style={styles.cardContainer}>
                      <Card>
                        <CardItem>
                          <Body>
                            <View style={styles.cardInnerContainer}>
                              <View>
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
                                    style={styles.filterImage}
                                    source={{
                                      uri: `${EndPoint}/data/${data.status}/${data.image}`,
                                    }}
                                  />
                                </TouchableOpacity>
                              </View>
                              <View style={styles.textContainer}>
                                <TouchableOpacity
                                  style={{width: '100%'}}
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
                                  <View style={styles.cardHeader}>
                                    <Text>{data.name}</Text>

                                    <Text style={{color: appColor}}>
                                      {data.status}
                                    </Text>
                                  </View>

                                  <View>
                                    <Text style={styles.nameText}>
                                      Posted By {data.post_By} @{' '}
                                      {data.createdat}
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
                                  </View>

                                  <View style={styles.cardHeader}>
                                    <Text
                                      style={styles.readMore}
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
                                      style={styles.shareIcon}
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
            ) : (
              <View>
                <Text style={{textAlign: 'center', marginTop: 100}}>
                  No Record Found Yet! Try Again
                </Text>
              </View>
            )}
          </ScrollView>
        ) : (
          <Text
            style={{
              textAlign: 'center',
              marginTop: 100,
              paddingHorizontal: 20,
            }}>
            Find Your Loved once, From Above Search Area
          </Text>
        )}

        {userStatus ? (
          <TouchableOpacity
            style={[
              styles.addNewButton,
              {backgroundColor: appColor, shadowColor: appColor},
            ]}
            onPress={() => this.props.navigation.navigate('AddPerson')}>
            <Icon
              type="AntDesign"
              name="plus"
              style={{fontSize: 20, color: '#fff'}}
              color="white"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              styles.addNewButton,
              {backgroundColor: appColor, shadowColor: appColor},
            ]}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Icon
              type="AntDesign"
              name="plus"
              style={{fontSize: 20, color: '#fff'}}
              color="white"
            />
          </TouchableOpacity>
        )}

        <ImageView
          images={currentImage}
          imageIndex={0}
          onClose={() => this.setState({isImageViewVisible: false})}
          isVisible={isImageViewVisible}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    userStatus: state.userReducer.userStatus,
    clr: state.colorReducer.color,
    SearchStories: state.SearchReducer.SearchStories,
  };
};

export default connect(mapStateToProps, {search})(SearchScreen);
