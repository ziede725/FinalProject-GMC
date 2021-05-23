import React, { useEffect } from 'react' 
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import SessionModal from '../../Components/DashboardComps/Modals/addSessionModal'
import { getSession } from '../../Redux/Actions/theater.actions'
import SessionTable from '../../Components/DashboardComps/Tables/SessionsTable'
import {useSelector} from 'react-redux'

const StyledButton = styled.button`

`
const Sessions = ()=>{
 const [open,setOpen]= useState(false) ;
 const sessions=useSelector(state=>state.theater.sessions) ;  
 const [order,setOrder]=useState(sessions.length) ;
 const dispatch=useDispatch() ; 

 useEffect(()=>{
    setOrder(sessions.length+1) 
    console.log(order)
    
 })
 useEffect(()=>{
    dispatch(getSession())
 },[])
    return (
        <>
        <SessionModal open={open} setOpen={setOpen} order={order} sessions={sessions}/>
        <StyledButton onClick={()=>setOpen(!open)}>Add Session</StyledButton>
        <SessionTable/>

        
        </>
    )
}

export default Sessions ; 