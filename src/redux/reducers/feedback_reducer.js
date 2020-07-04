
//notification reducer proceedure is here

//here we will again import the actions type file again
import types from '../actions/Feedback/types';

//here a dumy id data for testing

//reducer starts here
export default (state={}, action)=>{
    switch(action.type){

      //...............................send feed back............................
        case types.feedback:
            console.log('feedback sent');
                return state; 
                      //...............................send report............................
        case types.report:
            console.log('report sent');
                return state;  
                //..............................................Update...............  
        case types.loadData:
          console.log(" data is loading," + state);
          return state;
        default:
            return state;
            }}