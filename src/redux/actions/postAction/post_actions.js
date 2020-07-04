///this is the actions containing file, from here all actions will be exported


//types are imported in types variable
import types from './post_types';






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
export const add_post =(data)=>{
    return {
        type: types.add_post,
        payload: data,
    }
};

//..................................................

//this is update action
export const update_post =(data)=>{
    return{
        type: types.update_post,
        payload: data,
    }    
}
//................................................

//this is update action
export const del_post =(data)=>{
    return{
        type: types.del_post,
        payload: data,
    }    
}
//................................................

//this will provide posts settings
export const set_posts =(data)=>{
    return{
        type: types.set_posts,
        payload: data,
    }    
}
//......................................................


//this will provie all posts
export const all_post =(data)=>{
    console.log('called', data);
    
    return{
        type: types.all_post,
        payload: data,
    }    
}
//......................................................

//this will extract recent posts
export const recent_post =(data)=>{
    return{
        type: types.recent_post,
        payload: data,
    }    
}
//......................................................
//this will extract your posts
export const your_post =(data)=>{
    return{
        type: types.your_post,
        payload: data,
    }    
}
//......................................................


// to get load the stored data from database to local redux store state...
export const loadData = ()=>{
    console.log("yes call for load");
    return {
        type: types.loadData
    }
};
//........................................................

// to get image recognition test result by stored data from database to local redux store state...
export const search_by_image = (data)=>{
    console.log("yes call for search by image");
    return {
        type: types.search_by_image,
        payload: data
    }
};
//........................................................

