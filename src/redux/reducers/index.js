import {combineReducers} from 'redux';

//here we will import all kinds of reducers first
import UsersReducer from './usersReducer';
import Post_Reducer from './post_reducer';
import Notification_Reducer from './notification_reducer';
import Feedback_Reducer from './feedback_reducer';

//here the root reducer will combine all the reducers and then export the root.....
const rootReducer = combineReducers({
    users: UsersReducer,
    posts: Post_Reducer,
    notifications: Notification_Reducer,
    feedback: Feedback_Reducer,
});
export default rootReducer;