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
    }
}
   )
const Seat = ({setValue,valeur,value,index})=> {
    const [color,setColor] = useState("disabled") ;
    const classes = useStyles() ; 
    console.log(Boolean(value))
    
    
useEffect(()=>{
    if(value===1)
    {
        setColor("Secondary")
    }
   
})

    const handleClick =()=>{
        console.log("Button clicked") ; 
    }
    const handleHover =()=>{
        if(value!==1)
        {
            setColor("primary")
        }
    }
    const handleMouseOut=()=>{
        if(value !==1)
        {
            setColor("disabled")
        }
    }
     
    return (
        <>  
            <Chair disabled={Boolean(value)} onClick={()=>handleReservation(index,value)} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            <EventSeatRoundedIcon classes={{colorPrimary:classes.colorPrimary , colorSecondary:classes.colorSecondary}} color={color} fontSize={"medium"}/>
            </Chair>
            
        </>
    )

}
export default Seat