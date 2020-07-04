
//notification reducer proceedure is here

//here we will again import the actions type file again
import types from '../actions/NotificatoinsAction/types';

//here a dumy id data for testing

let initial_notification = [
  {
    notification_date: 2020628,
    notification_id: 786000,
    notification_status: "posted",
    post_creator_id: "xyz123",
    post_id: 7891779300000,
  },
  {
    notification_id: 786001,
    post_id: 7891779300001,
    post_creator_id: 'xyz123',
    notification_date: 2020628, //for new notification identificaiton
    notification_status: 'posted', // posted , updated
  },
  // {
  //   notification_date: 2020628,
  //   notification_id: 786002,
  //   notification_status: "posted",
  //   post_creator_id: "xyz12x",
  //   post_id: 7891779300002,
  // },
  // {
  //   notification_date: 2020628,
  //   notification_id: 786003,
  //   notification_status: "posted",
  //   post_creator_id: "xyz12d",
  //   post_id: 7891779300003,
  // },
]
// let dum_state = initial_notification;
// let initial_state = [];
// let local_stored_notifications = JSON.parse(localStorage.getItem('notifications_state'));
// if(local_stored_notifications === null){
//   initial_state = initial_notification;
// }else{
//   initial_state = local_stored_notifications;
// }

//reducer starts here
export default (state=initial_notification, action)=>{
    switch(action.type){

      //...............................Add notification............................
        case types.add_notification:
            console.log('called to notifications state', state);
            state = [
                ...state, action.payload.notification
            ]
            console.log('now notifications state', state);
                localStorage.setItem('notifications_state', JSON.stringify(state));
                return state;  
                //..............................................Update...............  
                case types.update_notification:
                  console.log('update notification from reducer', action.payload);
                  state = state.filter((i)=>i.post_id !== action.payload.notification.post_id);
                  state.push(action.payload.notification);
                  console.log('after update', state); 
                  localStorage.setItem('notifications_state', JSON.stringify(state));
          return state 
          
          //.............................Delete post................................
          case types.del_notification:
            console.log('delet post from post-reducer', action.payload);
            // let _id = action.payload.id;
            state = state.filter((item)=> item.post_id !== action.payload.id);
            console.log('after delete', state); 
            return state;
          //......................All posts........................................
          case types.set_posts:
            console.log('you sent posts setting request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', action.payload.interest);
            return state ={post_interest: action.payload.interest, ...state};
            //......................All posts........................................
          case types.all_posts:
            console.log('you sent all post request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', 'all');
            return state;

          //.............................Recent posts............................
          case types.recent_posts:
            console.log('you sent recent post request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', 'recent');
            return state;
          //...............................Your post............................
          case types.your_posts:
            console.log('you sent your post request post-reducer', action.payload);
            localStorage.setItem('display_posts_setting', 'your');
            return state;       

          //............................Load data............................
        // case types.loadData:
        //   console.log(" data is loading," + state);
        //   return state;



        default:
            return state;
            }}