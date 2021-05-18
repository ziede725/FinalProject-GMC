const {LOGIN_USER, LOGOUT,REGISTER_THEATER,REGISTER_CUSTOMER, GET_ERROR} = require('../Actions/actionTypes')

const initialState = {
    isAuth: false , 
    user:{} , 
    load : false ,
    error: "",

}

const rootReducer=(state=initialState,{type,payload})=>{
    switch(type)
    {
        case LOGIN_USER : 
        localStorage.setItem("token",payload.token) ;
        if(payload.user.role==="theater")
        {
            payload.history.push(`/theater/${payload.user.email}/dashboard`)
        } 
        return {...state ,user: payload.user , load: false ,isAuth:true }
        case LOGOUT: 
        localStorage.removeItem("token") ; 
        return {...state , user:{}, isAuth: false }
        case REGISTER_THEATER: 
        console.log(payload)
        localStorage.setItem("token",payload.token)
        return {...state , user:payload.user,isAuth: true ,load: false}

        case GET_ERROR: 
        console.log(payload)
        return {...state , error:payload}
        default : 
        return state ;
    } 
}
export default rootReducer ; 
