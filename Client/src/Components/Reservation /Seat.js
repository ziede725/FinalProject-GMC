import React, { useEffect, useState } from 'react' ; 
import styled from 'styled-components' ; 
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import { makeStyles } from '@material-ui/core';

const Chair=styled.button`
cursor: pointer;  
border:0 ; 
background-color: transparent; 
`
const useStyles = makeStyles({
    colorPrimary:{
        color:"green"
    },
    colorSecondary:{
        color:"red"
    },
    colorBlue:{
        color:"blue"
    }
}
   )
const Seat = ({seats,value,setSeats,index})=> {
    const [color,setColor] = useState("disabled") ;
    const classes = useStyles() ; 
    const [selectedSeats,setSelectedSeats] = useState() ; 
    const [seatValue,setSeatValue] = useState(value); 
    
    
useEffect(()=>{
    
    if(seatValue===1)
    {
        setColor("Secondary")
    }
    else{
        setColor("disabled")
    }
   
},[seats])

    const handleClick =()=>{
                 
        setSeats(seats&&seats.fill(1,index,index+1))
        setSeatValue(1); 
        setColor("action")
       
    }
    const handleHover =()=>{
        if(seatValue!==1)
        {
            setColor("primary")
        }
    
    }
    const handleMouseOut=()=>{
        if(seatValue !=1)
        {
            setColor('disabled')
        }
      
    }
    //disabled={Boolean(seatValue)}
    return (
        <>  
            <Chair  onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleMouseOut}>
            <EventSeatRoundedIcon classes={{colorPrimary:classes.colorPrimary , colorSecondary:classes.colorSecondary,colorAction:classes.colorBlue}}
             color={color} fontSize={"medium"}/>
            </Chair>
            
        </>
    )

}
export default Seat