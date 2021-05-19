
import React, { useEffect } from 'react' ; 
import styled from 'styled-components' ; 



const TabButton = styled.button`


&: hover {
   border-bottom-color:red ; 
   cursor:pointer; 
}

`
const Wrapper= styled.div`
position: absolute ; 
top:42% ; 
left: 60% ; 
display: flex ; 

`



const Tab=({setContent})=>{

    return (
        <>
        <Wrapper>
            <TabButton onClick={()=>setContent(true)}>Overview
             
            </TabButton>
            <TabButton onClick={()=>setContent(false)}>Reviews
            </TabButton>
        </Wrapper>
       
        </>
    )
}
export default Tab ; 