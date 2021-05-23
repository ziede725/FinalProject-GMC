import React, { useEffect } from 'react' 
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import SessionModal from '../../Components/DashboardComps/Modals/addSessionModal'
import { getSession } from '../../Redux/Actions/theater.actions'

const StyledButton = styled.button`

`


const Sessions = ()=>{
 const [open,setOpen]= useState(false) ; 
 const dispatch=useDispatch() ; 

 useEffect(()=>{
    dispatch(getSession()) ; 
 },[])
    return (
        <>
        <SessionModal open={open} setOpen={setOpen}/>
        <StyledButton onClick={()=>setOpen(!open)}>Add Session</StyledButton>
        
        </>
    )
}

export default Sessions ; 