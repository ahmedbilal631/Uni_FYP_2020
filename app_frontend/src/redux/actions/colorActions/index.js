import { AsyncStorage } from "react-native";

export const COLORCHANGE = "COLORCHANGE";
// fetch all todos from indexedDB in the form of array
export function getStartChangeColor(data) {
    
  return {
      type:COLORCHANGE,
      payload:data
  };
}

export function getStartColorFromStorage() {
    return async (dispatch) => {
        try {
            const value = await AsyncStorage.getItem('color');
              if (value !== null) {
                // console.log('valueasdf',value);
                dispatch({
                  type:COLORCHANGE,
                  payload:value
              });
            }
           } catch (error) {
             console.log('err',error);
             
             // Error retrieving data
           }
}
}


// _retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('color');
//         console.log('data res',value);
//         if (value !== null) {
//           // console.log('valueasdf',value);
//           return {
//             type:COLORCHANGE,
//             payload:value
//         };
//       }
//      } catch (error) {
//        console.log('err',error);
       
//        // Error retrieving data
//      }
//   }
