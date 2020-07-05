import axios from "axios";
import EndPoint from "../../../endpoint/";
import { Toast } from "native-base";

export const GETUSER = "GETUSER";
export const GETERR = "GETERR";

export const USERLOGOUT = "USERLOGOUT";
export const USERREGESTER = "USERREGESTER";
export const USERLOGINERROR = 'USERLOGINERROR'
export const USERLOGIN = 'USERLOGIN'

export const AZURELOGIN = 'AZURELOGIN'
// fetch all todos from indexedDB in the form of array
export function getUser() {
  return dispatch => {
    axios
      .get(EndPoint + "/logginUserData")
      .then(res => {
        console.log("Res");
        console.log(res.data);

        dispatch({
          type: GETUSER,
          payload: res.data
        });
      })
      .catch(err => {
        
        console.log("err");
        console.log(err);
        dispatch({
          type: GETERR,
          payload:"change"
        });
      });
  };
}


export function azureLogin(data) {

return {
  type:AZURELOGIN,
  payload:data
}
  
}

//login

// fetch all todos from indexedDB in the form of array
export function getStartUserLogin(data) {
  return dispatch => {
    axios
      .post(EndPoint + "/loginuser",data)
      .then(res => {
        console.log("Res");
        console.log(res.data);
        if (res.data._id) {
          Toast.show({
            text: "Sucesfully login",
            buttonText: "ok",
            type: 'success'
          });
  
          dispatch({
            type: USERLOGIN,
            payload: res.data
          });
        } else {
          
        Toast.show({
          position: "top",
          text: "Error occoured! Try Again",
          buttonText: "cancel",
          type: "danger"
        });

        dispatch({
          type: USERLOGINERROR,
          payload:'err'
        });
        }
       
      })
      .catch(err => {

        console.log("err");
        console.log(err);
  
        Toast.show({
          position: "top",
          text: "Error occoured! Try Again",
          buttonText: "cancel",
          type: "danger"
        });

        dispatch({
          type: USERLOGINERROR,
          payload:err
        });

      });
  };
}

// logout
export function userLogout() {
  return dispatch => {
    axios
      .post(EndPoint + "/logoutUser")
      .then(res => {
        console.log("Res");
        console.log(res.data);
        if (res.data === "Sucesfully logout") {
          Toast.show({
            text: "Sucesfully logout",
            buttonText: "ok",
            type: "success"
          });

          dispatch({
            type: USERLOGOUT,
            payload: res.data
          });
        } else {
          Toast.show({
            position: "top",
            text: "Error occoured! Try Again",
            buttonText: "cancel",
            type: 'danger'
          });
        }
      })
      .catch(err => {
        console.log("err");
        console.log(err);
        Toast.show({
          position: "top",
          text: "Error occoured! Try Again",
          buttonText: "cancel",
          type:'danger'
        });
      });
  };
}

// register
export function registerUser(data) {

  return (dispatch) => {

        axios.post(EndPoint+'/registeruser',data)
        .then((res)=>{

            if (res.data === 'success'){

          Toast.show({
                  text: "Sucesfully Register",
                  buttonText: "ok",
                  type: "success"
                })

            dispatch({
               type: USERREGESTER,
               payload:'success',
              });
          }
          else {
              Toast.show({
                  position:'top',
                  text: "Error occoured! Try Again",
                  buttonText: "cancel",
                  type: "danger"
                })

            dispatch({
               type: USERREGESTER,
               payload:Math.random(),
                 });

          }

        })
        .catch((err)=>{
            console.log("err");
            console.log(err);
            Toast.show({
              position:'top',
              text: "Error occoured! Try Again",
              buttonText: "cancel",
              type: "danger"
            })

            dispatch({
              type: USERREGESTER,
              payload:Math.random()
             });
        })

  };
}
