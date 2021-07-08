import React,{useEffect,useState} from "react";
import RoomLayout from '../../Components/Reservation /RoomLayout';
import {useParams} from 'react-router-dom'
import axios from 'axios'
const Reservations = () => {
const id = useParams(); 
const [screening,setScreening]= useState() ; 
const [refresh,setRefresh] = useState(false) ;
const [response,setResponse] = useState() ;  
useEffect(async()=>{
  const res = await axios.get(`/api/screenings/${id.screeningId}`) ;
  await setResponse(res)
  console.log("refresh","here is the response:",response)
},[refresh]) 
useEffect(()=>{
  
  setScreening(response?.data.screening) ; 
  console.log(screening) ;
  console.log("response") 
},[response])

return(
<>
{response&&<RoomLayout screening={screening} refresh={refresh} setRefresh={setRefresh}/>}

</>
)
};

export default Reservations;
