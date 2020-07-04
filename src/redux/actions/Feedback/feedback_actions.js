
//types are imported in types variable
import types from './types';






//.....................................................

//this is the action to add a new task in the list (SADA JEYA KAM)
export const send_feedback =(data)=>{
    return {
        type: types.feedback,
        payload: data,
    }
};

//..................................................
//this is the action to add a new task in the list (SADA JEYA KAM)
export const send_report =(data)=>{
    return {
        type: types.report,
        payload: data,
    }
};

//..................................................