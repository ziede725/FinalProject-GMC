import React, { useEffect, useState } from 'react' ; 
import { useSelector } from 'react-redux';
import styled from 'styled-components' ; 
import Seat from './Seat' ; 
import {useParams} from 'react-router-dom'


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

const RoomLayout= () =>{
    const id = useParams() ; 
    const [screening] = useSelector(state=>state.screenings.filter(el=>el._id==id.screeningId)) ; 
    const [seats,setSeats] = useState([]) ; 
    const [value,setValue] = useState() ; 

    const handleReservation=(index,value)=>{   
        
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
            
        </Explanation>
        <Wrapper>
        {
            screening&& screening.seats.map((el,index)=><Seat handleReservation={handleReservation} value={el} index={index}/>)
        }
        </Wrapper>
        
    </>
)
}

export default RoomLayout ; 