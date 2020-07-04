import {createStore, applyMiddleware} from 'redux';

//import root reducer here
import rootReducer from './reducers';

//here we will import redux-thunk, to use it as middleware
import thunk from 'redux-thunk';


//here the store will be exported with given reducers
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;