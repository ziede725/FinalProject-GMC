import axios from 'axios'
import {ADD_ROOM,DELETE_ROOM,EDIT_ROOM,GET_ROOMS} from './actionTypes'


const addRoom = ({roomName,roomCapacity})=>(dispatch)=>{
let token = localStorage.getItem('token') ; 
 try {
     const res = await axios.post("http://localhost:7200/api/rooms/add",{roomName,roomCapacity,token}) ; 
     dispatch({type:ADD_ROOM ,payload:res.data})   
     
 } catch (error) {
     console.log(error)
}
}
export default addRoom;

