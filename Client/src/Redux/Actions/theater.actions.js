import axios from 'axios'
import {GET_ROOMS, GET_SCREENINGS} from './actionTypes'


export const addRoom = (roomName, roomCapacity)=>async(dispatch)=>{
let token = localStorage.getItem('token') ; 
 try {
     const res = await axios.post("http://localhost:7200/api/rooms/add",{roomName,roomCapacity,token}) ; 
     console.log('payload')
     const payload = await axios.get('http://localhost:7200/api/rooms',{ params: { token }})
   
     dispatch(getRooms())
     dispatch({type:GET_ROOMS,payload:payload.data.data} ) ;  
     
 } catch (error) {
     console.log(error)
}
}
export const deleteRoom = (id)=>async (dispatch)=>{
    let token = localStorage.getItem("token")
    try {
        const res = await axios.delete(`http://localhost:7200/api/rooms/${id}`) ;
        dispatch(getRooms()) 
       
    } catch (error) {
        console.log(error)
    }


}

export const editRoom=(roomName,roomCapacity,id)=> async(dispatch)=>{
    let token = localStorage.getItem("token")

    try {
       const res = await axios.patch(`http://localhost:7200/api/rooms/${id}`,{roomName,roomCapacity})
       dispatch(getRooms())
    } catch (error) {
        console.log(error)
    }

}
export const getRooms = ()=> async(dispatch)=>{
    let token = localStorage.getItem("token") ; 

    try {
     
        const payload = await axios.get('http://localhost:7200/api/rooms',{ params: { token }})
        
        dispatch({type:GET_ROOMS,payload: payload.data.data})
    } catch (error) {
        console.log(error)
    }
}

export const getScreenings= ()=> async(dispatch)=>{
    let token = localStorage.getItem("token") ; 
    try {
        const payload = await axios.get(`http://localhost:7200/api/screenings/theater/`,{params:{token}})
        console.log(payload.data.screenings)
        dispatch({type:GET_SCREENINGS , payload: payload.data.screenings})
    } catch (error) {
        console.log(error)
        
    }
}

export const deleteScreening= (id)=> async(dispatch)=>{
    let token = localStorage.getItem("token") ; 
    try {
        
        const payload = await axios.delete(`http://localhost:7200/api/screenings/${id}`,{params:{token}})
        dispatch(getScreenings())
    } catch (error) {
        console.log(error)
        
    }
}
export const addScreening= (movieName, date,startTime,endTime, discount,visibility,roomName,price)=> async(dispatch)=>{
    let token = localStorage.getItem("token") ; 
    try {
        const payload = await axios.post(`http://localhost:7200/api/screenings/add/`,{token,movieName,date,startTime,endTime,discount,visibility,roomName,price})
       dispatch(getScreenings()); 
    } catch (error) {
        console.log(error)
        
    }
}
export const editScreening= (id,movieName, date,startTime,endTime, discount,visibility,roomName,price)=> async(dispatch)=>{
    let token = localStorage.getItem("token") ; 
    try {
        const payload = await axios.patch(`http://localhost:7200/api/screenings/${id}/edit`,{token,movieName,date,startTime,endTime,discount,visibility,roomName,price})
            dispatch(getScreenings()) ; 
    } catch (error) {
        console.log(error)
        
    }
}


