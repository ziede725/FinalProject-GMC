import React, { useEffect, useState } from 'react' ; 
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components' ; 
import Seat from './Seat' ; 
import {useParams} from 'react-router-dom'
import {getScreenings, SetSeats} from '../../Redux/Actions/screening.actions'
import axios from 'axios';


const Wrapper = styled.div`
display: flex ; 
flex-wrap: wrap; 
position: absolute ; 
left: 20% ; 
top: 40% ; 
right : 20% ; 
border: 5px ; 
border-color: red ; 
border-style: dotted; 
padding: 40px ; 

`
const InlineContainer = styled.div`
display: flex ; `
const Explanation= styled.div`

`
const Box = styled.div`
width: 25px ; 
height: 25px ; 
background-color: ${props=> props.color} ; 
`

const RoomLayout= ({screening,setRefresh,refresh}) =>{
    const id = useParams() ; 
    const dispatch = useDispatch() ;

    const [seats,setSeats] = useState(screening?.seats) ; 
    const [price,setPrice] = useState(0) ; 
    useEffect(()=>{
        setSeats(screening?.seats)
    },[screening])
    const handleSubmit=()=>{
        console.log(seats)
        dispatch(SetSeats(id.screeningId,seats))
       
    }
    const handleCancel =async()=>{
       setRefresh(!refresh) ; 
    }
  
return(
    <>

        <Explanation>
            <InlineContainer>
            <Box color="red"/> 
             <span>: Reserved </span>
            </InlineContainer>
            <InlineContainer>
            <Box color="grey"/> 
             <span>: Available </span>
            </InlineContainer>
            <div>price:{price}</div>
            
        </Explanation>
        <Wrapper>
        {
            screening?.seats.map((el,index)=><Seat key={index} seats={seats} value={el}  setSeats={setSeats}  index={index}/>)
        }
        </Wrapper>

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
        
    </>
)
}

export default RoomLayout ; 