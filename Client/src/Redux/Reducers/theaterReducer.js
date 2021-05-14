 
import {GET_ROOMS ,GET_SCREENINGS,GET_RESERVATIONS,GET_SETTINGS} from '../Actions/actionTypes'
// {roomName:"salle1",roomCapacity: 30}
const initialState = {
    room:[],
    screenings:[],
    reservations:[],
    settings:{},

}

const theaterReducer =(state=initialState,{type,payload})=>{

    switch(type)
    {

        case GET_ROOMS:
            return {...state, room: [...payload]}

        case GET_SCREENINGS: 
            return {...state , screenings: [...payload]}

        case GET_RESERVATIONS: 

        case GET_SETTINGS: 

        default : 
        return state ; 
    }



}
export default theaterReducer; 