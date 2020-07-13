//here we will again import the actions type file again
import types from '../actions/postAction/post_types';

import Dummy_Profile from '../../media/dummy_profile.jpg';
//here a dumy id data for testing
import Dummy_State from './dummy_posts';


let initial_state = [];
let dum_state =  Dummy_State
let local_stored_posts = JSON.parse(localStorage.getItem('posts_state'));
if(local_stored_posts === null){
  initial_state = dum_state;
}else{
  initial_state = local_stored_posts;
}

//reducer starts here
export default (state= initial_state, action)=>{
    switch(action.type){

      //...............................Add post............................
        case types.add_post:
          state = [
            ...state, action.payload.post
          ]
                console.log('now post state', state);
                localStorage.setItem('posts_state', JSON.stringify(state));
                return state;  
                
                //..............................................Update...............  
                case types.update_post:
                  console.log('update post from reducer', action.payload);
                  let _post = action.payload.post;
                  state = state.filter((i)=>i.post_id !== _post.post_id);
                  state.push(_post); 
                  localStorage.setItem('posts_state', JSON.stringify(state));
          console.log('after update', state); 
          return state; 
          
          //.............................Delete post................................
          case types.del_post:
            console.log('delet post from post-reducer', action.payload);
            // let _id = action.payload.id;
            state = state.filter((item)=> item.post_id !== action.payload.id);
            localStorage.setItem('posts_state', JSON.stringify(state));
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