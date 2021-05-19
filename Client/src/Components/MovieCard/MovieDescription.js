import React from 'react' ; 
import styled from 'styled-components'


const Container = styled.div`
position: absolute ;
display: flex ; 
flex-direction : column ; 
justify-content: space-around;
align-items: center; 
width: 20% ; 
height: 300px ;
top: -15% ;
left: 10% ;  
border:4px ; 
border-radius: 16px ; 
background-color: #00132e ; 


`
const Background= styled.div`  
width: 100% ; 
position: absolute ; 
top: 0 ; 
height: 70% ;  
img {
    width: 100% ; 
    height: 100% !important ; 
    margint-top: 0 !important ; 
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
font-weight: normal ; 
border-radius: 14px ; 
transition: 0.3s; 
height: 40%;
color:#ffffff; 
cursor: pointer; 
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
font-weight: normal ; 
border:0 ; 
border-radius: 14px ; 
transition: 0.3s ; 
height: 40%;
cursor: pointer; 
 

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
            <img src={imgURL}></img>
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