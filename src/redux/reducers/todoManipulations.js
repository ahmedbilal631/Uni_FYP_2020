//in this reducer I will export all the manipulation for this todo app 

//here we will again import the actions type file again
import types from '../actions/actionsTypes';

//here we will import the data from firebase database...
import myTodoDB from '../../firebase/config';

// const initialState =[{
//     id: '',
//     completed: false,
//     text: ''
// }]





//here the reducer's code will be proceeded
export default (state=[], action)=>{
    switch(action.type){
        case types.addTask:
            console.log('yes Add call');
            return state=[
                ...state,
                {
                  // id: Math.floor(Math.random() * 1000),
                  completed: false,
                  text: action.payload.text,
                }];
                console.log('after add statee', state);
        case types.delTask:
          console.log("delCall", action.payload.id);
            return state.filter(todo =>
                todo.id !== action.payload.id
              );
        case types.editTask:
            console.log("edit call", action.payload);
              //here we will define a object pattren to store in state
            let inCommingPaylaod = {
              id: action.payload.id,
              completed: false,
              text: action.payload.text
            }

            const index = state.findIndex((item)=>{return item.id === action.payload.id}); 
            // console.log("before update", state);
            // console.log('index', index);
            
            //here we will build a process to update the task
            let tempState= state.slice(0, index);
            let tempStateX= state.slice(index);
            tempStateX = tempStateX.filter((item)=> item.id != action.payload.id);
            tempState.push(inCommingPaylaod);

            //this is my old practice to update the task
            // console.log('tem1',tempState);
            // console.log('temX',tempStateX);
            // console.log('inComming',inCommingPaylaod);
            // let tempStateX = state.splice(Number(index),Number(index)+1, "kjsklfhdskjf" );
            // let tempX = state.splice(index, (index+1));
            // console.log('tem2',tempX);

            //state concatenation is below
            state = tempState.concat(tempStateX);
            console.log("after update", state);
            return state;
        case types.compTask:
          console.log("completed call");          
          return state.map(todo =>
                todo.id === action.payload.id ?
                  {
                    ...todo,
                    completed: !todo.completed,
                  } :
                  todo
              );
        case types.loadData:
          console.log("yes loading data.....");
          myTodoDB.once('value').then(snapShot=>{
            snapShot.forEach(item=>{
              state.push({
                id: item.key, text: item.val().payload.text
              })
            })
          })
          console.log('after load state', state);
          return state= [...state]
    }
    return state;

}
