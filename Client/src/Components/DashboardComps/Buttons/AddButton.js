import { IconButton } from '@material-ui/core';
import React, { useEffect } from 'react' ; 
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import styled from 'styled-components';

const WrapperFlex = styled.div`
display: flex ; 
justify-content : space-around ; 
align-items: center `
const AddButton=({onClick ,layout})=>{
   

    return(
         // Conditional rendering depending on props layout true or false 
         // True means Add Room : false => add a screening 
            <IconButton onClick={onClick} >
                {layout?
                <WrapperFlex>
                     <AddCircleOutlineOutlinedIcon/>
                <span>Add a room </span>
                </WrapperFlex>
                    
                
               :<WrapperFlex>
                    <AddCircleOutlineOutlinedIcon/>
                <span>Add a screening </span>
               </WrapperFlex>
               }
                
            </IconButton>
       
    )
}
export default AddButton ; 