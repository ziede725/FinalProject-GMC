import { IconButton } from '@material-ui/core';
import React, { useState } from 'react' ; 
import {Wrapper} from '../SideMenu'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditModal from '../Modals/editModal'


const EditButton=({ roomNamee,id,roomCapacityy})=>{
const [open,setOpen]= useState(false)

const handleModal=()=>{
    setOpen(!open)
}

   
    return(
        <Wrapper>
              <EditModal roomNamee={roomNamee} roomCapacityy={roomCapacityy} open={open} handleModal={handleModal} id={id}  />
            <IconButton onClick={()=>handleModal()}>
                <EditOutlinedIcon/>
            </IconButton>
            
        </Wrapper>
    )
}
export default EditButton ; 