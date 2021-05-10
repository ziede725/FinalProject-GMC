import { IconButton } from '@material-ui/core';
import React from 'react' ; 
import {Wrapper} from '../SideMenu'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';




const DeleteButton=()=>{

    const handleClick=()=>{
        console.log('hello')
    }
    return(
        <Wrapper>
            <IconButton onClick={()=>handleClick()}>
                <EditOutlinedIcon/>
            </IconButton>
        </Wrapper>
    )
}
export default DeleteButton ; 