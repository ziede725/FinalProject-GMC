import axios from 'axios'
import {GET_ROOMS, GET_SCREENINGS,GET_SESSIONS} from './actionTypes'

export const addRoom = (roomName, roomCapacity)=>async(dispatch)=>{
let token = localStorage.getItem('token') ; 
 try {
     const res = await axios.post("http://localhost:7200/api/rooms/add",{roomName,roomCapacity,token}) ; 
    
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
export const addScreening= (movieName, date,session, discount,visibility,roomName,price)=> async(dispatch)=>{
    let token = localStorage.getItem("token") ; 
    try {
        const payload = await axios.post(`http://localhost:7200/api/screenings/add/`,{token,movieName,date,session,discount,visibility,roomName,price})
       dispatch(getScreenings()); 
    } catch (error) {
        console.log(error)
        
    }
}
export const editScreening= (id,movieId, date,session, discount,visibility,roomId,price)=> async(dispatch)=>{
    let token = localStorage.getItem("token") ; 
    try {
        const payload = await axios.patch(`http://localhost:7200/api/screenings/${id}/edit`,{token,movieId,date,session,discount,visibility,roomId,price})
            dispatch(getScreenings()) ; 
    } catch (error) {
        console.log(error)
        
    }
}

export const getSession= ()=> async(dispatch) =>{
let token =localStorage.getItem("token")
try {
    const res = await axios.get(`http://localhost:7200/api/sessions/${token}`) ; 

    dispatch({type:GET_SESSIONS ,payload:res.data.sessions }) ; 
} catch (error) {
    
}    
}
export const addSession= (id,sessionName,order,startTime,endTime)=>async(dispatch)=>{

    try {
        const res = await axios.post(`http://localhost:7200/api/sessions/add` , {id,sessionName,order,startTime,endTime}) ; 
        dispatch(getSession()) ; 
    } catch (error) {
        
    }

}


export const editSesssion= (id,sessionName,order,startTime,endTime)=>async(dispatch)=>{

    let token = localStorage.getItem("token") ; 

    try {
        const res = await axios.patch(`http://localhost:7200/api/sessions/edit` , {id,token,sessionName,order,startTime,endTime}) ; 
        dispatch(getSession()) ; 
    } catch (error) {
        
    }

}


export const deleteSession= (id)=>async(dispatch)=>{

    let token = localStorage.getItem("token") ; 

    try {
        console.log('deleted session')
        const res = await axios.delete(`http://localhost:7200/api/sessions/delete` , {data:{token,id}}) ; 
        dispatch(getSession()) ; 
    } catch (error) {
        
    }

}




