import { IconButton } from '@material-ui/core';
import React, { useState } from 'react' ; 
import {Wrapper} from '../SideMenu'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditScreeningModal from '../Modals/editScreeningModal'

const EditScreeningButton=({ id,published,date})=>{
const [open,setOpen]= useState(false) ; 


const handleModal=(published)=>{
    if(published==="Public")
    {
        alert("you can't edit a screening already public")
    }else {
        setOpen(!open)
    }
  
} 
   
    return(
        <Wrapper>
            <EditScreeningModal id={id} open={open} setOpen={setOpen} prevDate={date}/>              
            <IconButton onClick={()=>handleModal(published)}>
                <EditOutlinedIcon/>
            </IconButton>
            
        </Wrapper>
    )
}
export default EditScreeningButton ; 