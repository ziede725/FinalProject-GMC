import axios from 'axios';
import {LOGIN_USER,LOGOUT, REGISTER_THEATER,LOAD_USER,REGISTER_CUSTOMER,GET_USER, GET_ERROR} from './actionTypes' ; 

export const loginUser = (user, history) => async (dispatch) => {
    try {
        let result = await axios.post("http://localhost:7200/api/login",user) ;
        
        if(result.data.user.role==="theater")
        {
            history.push(`/theater/${user.email}/dashboard`)
        }else{
                history.push('/')
        }
        dispatch({type: LOGIN_USER , payload: {...result.data,history}})
      
         
    }
    catch(error)
    {
        // dispatch({type : FAIL_USER , payload: error.response.data.errors})
       console.log(error)
          
    }
} 
export const logOut = (history)=> async (dispatch)=>{

    
    try {
        dispatch({type: LOGOUT,payload:history}) ; 
       
    } catch (error) {
        console.log(error) ; 
    }
}
export const registerCustomer=(user,history) => async(dispatch)=>{
    try {
        let response = await axios.post('http://localhost:7200/api/customers/register',user)
        history.push('/')
        dispatch({type: REGISTER_CUSTOMER , payload:{...response.data,history}})
    } catch (error) {
        console.log(error)
    }
}
export const registerTheater=(user,history) => async (dispatch)=>{

    
    try {
       
        let response = await axios.post("http://localhost:7200/api/theaters/register",user)
        if(response.data.user.role==="theater")
        {
            history.push(`/theater/${user.email}/dashboard`)
        }
        dispatch({type:REGISTER_THEATER,payload:{...response.data,history}})
    } catch (error) {
        alert(error.response.data.error)
        
    }
}
export const getUser=()=> async(dispatch)=>{
let token = localStorage.getItem('token')
    try {
            const res= await axios.get(`http://localhost:7200/api/login/${token}`); 
            dispatch({type: GET_USER , payload:{...res.data}})
    } catch (error) {
        
    }
}

export const editTheater = (id,theaterName, email,userName,phoneNumber,address,city,town,zipcode)=> async(dispatch)=>{

    try {
        const res = await axios.patch(`http://localhost:7200/api/theaters/${id}/edit`,{theaterName,email,userName,phoneNumber,address,city,town,zipcode})
        alert(res.data.message)
     dispatch(getUser())
    return res ;    
    } catch (error) {
        console.log(error)
        
    }
}

export const changeTheaterPassword=(id,currentPassword,newPassword)=> async(dispatch)=>{
    try {
        const res = await axios.patch(`http://localhost:7200/api/theaters/${id}/reset-password`,{currentPassword,newPassword})
     return res.data ; 
   
    } catch (error) {
       
        return error.response.data ; 
    }
}


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
