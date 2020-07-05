import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    loginContainer: {
      // alignItems:'center',
      marginTop: 30,
      justifyContent: 'center',
      flex: 1,
    },
    inputStyle: {
      color: '#fff'
    },
    itemStyle: {
      marginVertical: 8,
      borderBottomWidth: 1,
    },
    formStyle: {
      marginHorizontal: 20
    },
    viewStyle: {
      // height: 200,
      // width : '75%',
      alignItems: 'center',
      // paddingBottom: 10,
      padding: 5,
      
      // zIndex: 1,
    },
    viewDirection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 30
    },
    viewAccount:
    {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5%',
  
    },
  
    barStyle: {
      fontSize: 30,
      color: 'white',
      paddingHorizontal: 15
    }
    ,
    signUpStyle: {
      color: '#90a578',
      fontSize: 18
    },
    loginStyle: {
      fontSize: 19,
      color: 'white'
    },
    forgetStyle: {
      textAlign: 'right',
      color: 'white'
    },
    socialIcon:{
      paddingVertical: 15,
      paddingHorizontal:15,
      borderColor:'white',borderWidth:2,
      borderRadius: 60,
      marginVertical:10,
      marginHorizontal:10,
      color:'white'},
      socialIconG:{
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderColor:'white',
        borderWidth:1,
        marginVertical:10,
        marginHorizontal:10,
      }
  
  })