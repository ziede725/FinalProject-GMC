 
import {GET_ROOMS ,GET_SCREENINGS,GET_RESERVATIONS,GET_SETTINGS, GET_SESSIONS} from '../Actions/actionTypes'
// {roomName:"salle1",roomCapacity: 30}
const initialState = {
    room:[],
    screenings:[],
    sessions:[], 
    reservations:[],
    settings:{},

}

const theaterReducer =(state=initialState,{type,payload})=>{

    switch(type)
    {

        case GET_ROOMS:
            if(payload)
            {
                return {...state, room: [...payload]}    
            }
            return state ; 

        case GET_SCREENINGS: 
            return {...state , screenings: [...payload]}

        case GET_RESERVATIONS: 
        return {...state , reservations:[...payload]}

        case GET_SETTINGS: 
        if(payload)
        {
            return {...state, settings:[...payload]}
        }
        return state ; 
        

        case GET_SESSIONS:
        
        return {...state, sessions:[...payload]}

        default : 
        return state ; 
    }



}
export default theaterReducer; 