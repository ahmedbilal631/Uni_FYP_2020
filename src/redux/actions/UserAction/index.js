///this is the actions containing file, from here all actions will be exported


//types are imported in types variable
import types from './actionsTypes';

import Dummy_User from '../../reducers/dummy_user';




//.....................................................
//here by using middleware and firebase database
// we are exporting data to db
// export const addTask =(payload)=> async dispatch=>{
//     myTodoDB.push({
//         payload
//     }).then((dispatch({
//         type: types.loadData,
//         // type: types.addTask,
//         // payload
//     })))
// };
 ////.............................................

//this is the action to add a new task in the list (SADA JEYA KAM)
export const addUser =(payload)=>{
    return {
        type: types.addUser,
        payload
    }
};

//..................................................
//login action
export const loginUser = (data)=>{
    // let grab_mail = data.email;
    //        const index = Dummy_User.findIndex((item)=>{return item.email === grab_mail});
    //        if(index != -1){
    //          console.log('logged in', Dummy_User[index].email);
    //         console.log('acc',Dummy_User[index]);
    //        }

    return{
        type: types.loginUser,
        payload: data
    }
}
//.................................................

//this is update action
export const updateUser =(payload)=>{
    return{
        type: types.updateUser,
        payload
    }    
}
//...................................................
//this is update action
export const deleteUser =(payload)=>{
    return{
        type: types.updateUser,
        payload
    }    
}
//...................................................
// to get load the stored data from database to local redux store state...
export const loadDataUser = ()=>{
    console.log("yes call for load");
    return {
        type: types.loadData
    }
};
//............................................................
// to get read notifications separate..
export const read_notification = (data)=>{
    return {
        type: types.read_notification,
        payload: data,
    }
};