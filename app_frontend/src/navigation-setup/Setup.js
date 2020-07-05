import {Icon} from 'native-base';
import {AsyncStorage} from 'react-native';
import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

// import HomeScreen from "../screens/ActiveCases";
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/login';
import ProfileScreen from '../screens/ShowProfile';
import PersonelDetailScreen from '../screens/PersonelDetails';
import SignUpScreen from '../screens/signup';
import EditProfile from '../screens/Edit-Profile';
import NotificationScreen from '../screens/notificationScreen';
import SearchScreen from '../screens/searchScreen';
import AddPersons from '../screens/AddForm';
import DrawerScreen from '../screens/Sidebar';
import EditPostScreen from '../screens/EditPost';
import ActiveCasesScreen from '../screens/ActiveCases';
import ResolvedCasedScreen from '../screens/ResolvedCases';
import ShowResolvedDetail from '../screens/ShowResolvedDetails';
import AboutusScreen from '../screens/AboutUs';
import SettingScreen from '../screens/SettingScreen';
import LoginWithAzure from '../screens/azure';
import Feedback from '../screens/FeedBack';

import SplashScreen from '../screens/SplashScreen/SplashScreen';

//redux imports for colors
import {connect} from 'react-redux';
import {userLogout} from '../redux/actions/UserActions';


const HomeStack = createStackNavigator(
  {
    Homes: HomeScreen,
    PersonDetail: PersonelDetailScreen,
    Profile: ProfileScreen,
    ProfileEdit: EditProfile,
    EditPost: EditPostScreen,
    ActiveCases: ActiveCasesScreen,
    ResolvedCases: ResolvedCasedScreen,
    ResolvedCaseDetail: ShowResolvedDetail,
    Aboutus: AboutusScreen,
    Settings: SettingScreen,
    Feedback: Feedback,
  },
  {
    headerMode: 'none',
  },
);

const AddStack = createStackNavigator(
  {
    AddPerson: AddPersons,
  },
  {
    headerMode: 'none',
  },
);

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    headerMode: 'none',
  },
);

const NotificationsStack = createStackNavigator(
  {
    Notifications: NotificationScreen,
  },
  {
    headerMode: 'none',
  },
);

const MyTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Notifications: NotificationsStack,
    Search: SearchStack,
    LetsAdd: AddStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        let clr;
        // let clr = AsyncStorage.getItem('myClr');
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Notifications') {
          iconName = `notifications-outline`;
        } else if (routeName === 'Search') {
          iconName = `search`;
        } else if (routeName === 'LetsAdd') {
          iconName = `ios-person-add`;
        }
        // focused ? (clr = '#05CE1D') : (clr = 'gray');
        focused ? (clr  = '#fe3562') : (clr = '#009700');
        return (
          <Icon
            style={{color: `${clr}`}}
            type="Ionicons"
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      // activeTintColor: '#05CE1D',
      activeTintColor: '#fe3562',
      // inactiveTintColor: 'gray',
      inactiveTintColor: "#009700",
      style: {
        // borderTopColor: 'grey',
        borderTopColor: "#009700",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
    },
  },
);

const Splash = createStackNavigator(
  {
    SplashScreen: SplashScreen,
  },
  {
    index: 0,
    headerMode: 'none',
  },
);

const NonAuth = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
    azure: LoginWithAzure,
  },
  {
    index: 0,
    headerMode: 'none',
  },
);

const RootNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    NonAuth: NonAuth,
    Tabs: MyTabNavigator,
  },
  {
    initialRouteName: 'Splash',
  },
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    RootNavigator: RootNavigator,
  },
  {
    contentComponent: props => <DrawerScreen {...props} />,
  },
);

export default createAppContainer(MyDrawerNavigator);
