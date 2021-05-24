import { IconButton } from '@material-ui/core';
import React from 'react' ; 
import {Wrapper} from '../SideMenu'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';



const DeleteButton=({handleClick})=>{

    return(
        <Wrapper>
            <IconButton color="primary" onClick={handleClick}>
                <DeleteOutlineOutlinedIcon/>
            </IconButton>
        </Wrapper>
    )
}
export default DeleteButton ; 