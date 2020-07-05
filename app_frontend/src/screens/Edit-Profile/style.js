import { StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default styles = StyleSheet.create({
    topcontent:{
        flexDirection:"row",
        padding:12,
        justifyContent: "space-between"
    },
    privacyText:{
      color: 'white',
      fontSize:12,
      marginLeft:14
    },
    topText:{
      color:'#fff',
      fontWeight: 'bold',
      
    },
    topCross:{
        color: '#fff'
    },
    topsave:{
    color:"#fff"
    },
    profileImageContainer:{
        alignItems: 'center',
        marginTop:25
    },
    formStyle:{
        marginTop:25,
        marginLeft:5,
        marginRight:5
    },
    flContainer:{
        justifyContent: "space-between",
        flexDirection:"row",
    },
    firstNameWrapper:{
        width: '49%',
        // borderWidth:5,
        // borderColor:"#E6E6E6",
        padding:3,
        // borderRadius:4
    },
    lastNameWrapper:{
        width: '49%',
    },
    firsNameStyle:{
        flex: 1, flexWrap: 'wrap',width: "100%",
        borderWidth: 2, 
    },
    label:{
        marginLeft:7,
        marginBottom:7,
        color:"#9B9B9B"
    },
    phonenumberWrapper:{
        width: '99%',
        // borderWidth:10,
        // borderColor:"#E6E6E6",
        padding:3,
        // borderRadius:4,
        marginLeft:2,
        marginRight:2,
        marginTop:5
    },
    detailArea:{
        width:"100%",
        marginTop:5
    }
  })