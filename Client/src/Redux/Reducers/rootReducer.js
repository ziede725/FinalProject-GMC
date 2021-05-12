const {LOGIN_USER} = require('../Actions/actionTypes')

const initialState = {
    isAuth: false , 
    user:{} , 
    load : false ,

}

const rootReducer=(state=initialState,{type,payload})=>{
    switch(type)
    {
        case LOGIN_USER : 
        localStorage.setItem("token",payload.token) ; 
        return {...state ,user: payload.user , load: false ,isAuth:true }


        default : 
        return state ;
    } 
}
export default rootReducer ; 
