import React from 'react' 
import { useState } from 'react'
import styled from 'styled-components'
import SessionModal from '../../Components/DashboardComps/Modals/addSessionModal'

const StyledButton = styled.button`

`


const Sessions = ()=>{
 const [open,setOpen]= useState(false) ; 



    return (
        <>
        <SessionModal open={open} setOpen={setOpen}/>
        <StyledButton onClick={()=>setOpen(!open)}>Add Session</StyledButton>
        
        </>
    )
}

export default Sessions ; 