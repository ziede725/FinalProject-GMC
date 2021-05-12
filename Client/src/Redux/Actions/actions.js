import axios from 'axios';
import {LOGIN_USER} from './actionTypes' ; 


const loginUser = (user,history)=>async (dispatch) => {

    try {
        let result = await axios.post("http://localhost:7200/api/login",user) ;
        console.log(result.data) 
        dispatch({type: LOGIN_USER , payload: result.data})
        history.push('/') ; 
    }
    catch(error)
    {
        // dispatch({type : FAIL_USER , payload: error.response.data.errors})
        console.log(error) ; 
    }
}
export default loginUser



// export const register = (user, history) => async (dispatch) => {
//     dispatch({ type: LOAD_USER });
//     try {
//       let result = await axios.post("/api/user/register", user);
//       //succees action
//       dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token,msg}
//       history.push("/profile");
//     } catch (error) {
//       // fail
//       dispatch({ type: FAIL_USER, payload: error.response.data.errors });
//     }
//   };
  
//   export const login = (user, history) => async (dispatch) => {
//     dispatch({ type: LOAD_USER });
//     try {
//       let result = await axios.post("/api/user/login", user);
//       dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token,user}
//       history.push("./profile");
//     } catch (error) {
//       dispatch({ type: FAIL_USER, payload: error.response.data.errors });
//     }
//   };
  
//   export const current = () => async (dispatch) => {
//     try {
//       const config = {
//         headers: {
//           authorization: localStorage.getItem("token"),
//         },
//       };
//       let result = await axios.get("/api/user/current", config);
//       dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
//     } catch (error) {
//       dispatch({ type: FAIL_USER, payload: error.response.data });
//     }
//   };
  
//   // logout
//   export const logout = () => {
//     return {
//       type: LOGOUT_USER,
//     };
//   };
  
//   export const videErrors = () => {
//     return {
//       type: "VIDE_ERRORS",
//     };
//   };