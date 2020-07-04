//here we will again import the actions type file again
import types from '../actions/UserAction/actionsTypes';

import Dummy_Profile from '../../media/dummy_profile.jpg';
// import dum_read_notification_list from '../reducers/notification_reducer'
//getting notifications
// let get_read_notification_list =[];
let get_read_notification_list = JSON.parse(localStorage.getItem('saved_read_notifications'));




//here a dumy id data for testing
const dumyId = {
  user_id: 'xyz123',
  name : 'Sultan',
  fname: 'Wada Sultan',
  gender:'male',
  cnic: '30302020920904',
  email: 'asdf@gmail.com',
  number:'030008887689',
  address:'asda fgfh jknkjo ads',
  country:'Turkey',
  region: 'Ankara',
  password:'1234asdf',
  dp_image:                    'https://cdn.pixabay.com/photo/2016/03/27/17/40/black-and-white-1283231_960_720.jpg'
  ,
  followed_posts: [7891779300000,7891779300009,7891779300004,7891779300006],
  notification_on: true,//about the functionality activatoin of notification
  notification_keep: [],//to store imp notifications
  notification_read: get_read_notification_list=== null?[191919,]: get_read_notification_list,
  // notification_read: get_read_notification_list,
}

//reducer starts here
export default (state=dumyId, action)=>{
    switch(action.type){
        case types.addUser:
            console.log('yes called to sign up');
            // return state=[
            //     ...state,
                
            //       // id: Math.floor(Math.random() * 1000),
            //     //   completed: false,
            //      action.payload,
            //     ];
            return state;
        //....................................................
        //login        
        case types.loginUser:
          console.log('login call at reducer', action.payload);
          let grab_mail = action.payload.email;

          // let extract_acc = state.filter((item)=> item.email == grab_mail);
          //  const index = state.findIndex((item)=>{return item.email === grab_mail});
          //  if(index != -1){
          //    console.log('logged in', state[index].email);
          //   console.log('acc',state[index]);
            //identifier for post distinciton
            localStorage.setItem('post_creator_email', grab_mail);
            //id identifier
            localStorage.setItem('acc_id', state.user_id);
            // return state = state[index]
          // }else{
            // console.log('not found acc', grab_mail);
            return  state 
          // }
          //...................................................                  
          case types.updateUser:
          console.log('update user from reducer', action.payload);
          let _id = action.payload.id;
          console.log('after update', state); 
          return state;
          // case types.loadData:
          //   console.log(" data is loading," + state);
          //   return state;
            //...................................................
            case types.deleteUser:
              console.log('delete user from reducer', action.payload);
              window.location.assign(window.location.hostname + '/signup');
              // let _id = action.payload.id;
              // console.log('after update', state); 
              return state;
                //...................................................
          case types.read_notification:
            let old = state.notification_read;
            // let saved_read = localStorage.getItem('saved_read_notificaitons');
            // old = saved_read.length > old.length? saved_read  

            
            for(let i =0; i<action.payload.read.length; i++){
              console.log(action.payload.read[i]);
              old.push(action.payload.read[i]);  
              console.log(action.payload.read[i], old);
            }
            localStorage.setItem('saved_read_notifications',JSON.stringify(old));  
            console.log('read notifications from reducers', old);
            // state = {...state};
            console.log('after read notification update state', state);
            return state;
          // }
        default:
            return state;
            }}