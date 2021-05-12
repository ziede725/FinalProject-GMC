 
import {ADD_ROOM,EDIT_ROOM,DELETE_ROOM,GET_ROOMS} from '../Actions/actionTypes'

const initialState = {
    rooms = [],
    screenings=[],
    reservations=[],
    settings={},

}

const theaterReducer =(state=initialState,{type,payload})=>{

    switch(type)
    {
        case ADD_ROOM:
            return {...state, rooms:[...rooms,{roomName:payload.roomName,roomCapacity:payload.roomCapacity}]}
        case DELETE_ROOM:

        case EDIT_ROOM: 

        case GET_ROOMS:

        default : 
        return state ; 
    }



}
export default theaterReducer; 