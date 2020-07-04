///this is the actions containing file, from here all actions will be exported for notification


//types are imported in types variable
import types from './types';






//.....................................................

//this is the action to add a new task in the list (SADA JEYA KAM)
export const add_notification =(data)=>{
    return {
        type: types.add_notification,
        payload: data,
    }
};

//..................................................

//this is update action
export const update_notification =(data)=>{
    return{
        type: types.update_notification,
        payload: data,
    }    
}
//................................................

//this is delete action
export const del_notification =(data)=>{
    return{
        type: types.del_notification,
        payload: data,
    }    
}
//................................................



