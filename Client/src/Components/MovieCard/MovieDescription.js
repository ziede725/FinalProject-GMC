import React from 'react' ; 
import styled from 'styled-components'


const Container = styled.div`
position: absolute ;
display: flex ; 
flex-direction : column ; 
justify-content: space-between;
align-items: center; 
width: 20% ; 
height: 300px ;
top: 15% ;
left: 10% ;  
border:4px ; 
border-radius: 16px ; 
background-color: #00132e ; 


`
const Background= styled.div`  
width: 100% ; 
img {
    width: 100% ; 
    height: 140% ; 
    margint-top: 0 ; 
    margin-left:0 !important; 
    border-radius: 16px;
   object-fit: cover ; 
   magint-bottom:20px ; 
}
`

const TrailerButton = styled.button`
margin-top:20% ; 
margin-right: 3% !important; 
width: 40% ; 
padding:5px ; 
font-size: 16px ; 
font-weight: bold ; 
border-radius: 14px ; 
transition: 0.3s; 
height: 40%;
color:#ffffff; 
background-color:#00132e;
border:0 ; 
&: hover{
    color: black;
    opacity:0.9 ; 
    background-color: #f9bf00;
    
}
`

const BookButton = styled.button`
margin-top:20% ; 
margin-left: 3% !important; 
width: 40%;
padding: 5px ; 
font-size: 16px ; 
font-weight: bold ; 
border:0 ; 
border-radius: 14px ; 
transition: 0.3s ; 
height: 40%;
 

&: hover{
    background-color:#b00407 ; 
    color: #e0cecf ; 
    opacity:0.8
  
}

`
const ButtonWrapper= styled.div`
display:flex ; 
width: 100% ; 
height: 30%;
flex-direction: row; 
justify-content: center ;
margin-bottom: 20px ;
position: absolute; 
bottom: 0 ; 
`



const MovCard =({imgURL })=>{

    return(
        <>
        <Container>
            <Background>
            <img src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/12/c3c28d4a-f776-4924-99cb-b53a4023e247/801x410_avatar.jpg"></img>
            {/* <p>HELLO WORLD</p> */}
            </Background>
            <ButtonWrapper>
           
            <TrailerButton>Watch Trailer</TrailerButton>
            <BookButton>Book now!</BookButton>
            </ButtonWrapper>
            
        </Container>
        </>
    )
}

export default MovCard ; 