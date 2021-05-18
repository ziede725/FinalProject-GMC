import React from 'react' ; 
import styled from 'styled-components'
import MovCard from '../../Components/MovieCard/MovieDescription'
import Tab from '../../Components/moviePage/Tab'

const Container = styled.div`


`
const UpperSection = styled.section`
width: 100% ;
background-color:black ; 
height:100% ;
position: relative;

`
const Background= styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1 ; 
opacity:0.95;
img {
    width: 100% ; 
    height: 40% ; 
    object-fit:cover ; 
}
`
const LowerSection = styled.section`
background-color:blue ; 
position:absolute; 
top:100px; 
`

const MoviePage =()=>{

return(
    <>
    <UpperSection>
        <Background>
            <img src="https://img.freepik.com/free-photo/dark-grunge-style-scratched-metal-surface_1048-12951.jpg?size=626&ext=jpg"/>
            {/* <img src='https://image.freepik.com/free-photo/empty-wooden-table-with-smoke-float-up-dark-background_68495-135.jpg'/> */}
            <MovCard>

            </MovCard>
            {/* <Tab>Overview</Tab>
            <Tab>Reviews</Tab> */}
        </Background>


    </UpperSection>
    <LowerSection>
  Hello
    </LowerSection>

    </>
)

}

export default MoviePage ; 