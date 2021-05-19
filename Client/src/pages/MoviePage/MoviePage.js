import React, { useState } from 'react' ; 
import styled from 'styled-components'
import MovCard from '../../Components/MovieCard/MovieDescription'
import Tab from '../../Components/moviePage/Tab'
import Image from '../../assets/krists-luhaers-AtPWnYNDJnM-unsplash.jpg'
import Rating from '../../Components/moviePage/Rating'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
const Container = styled.div`


`
const UpperSection = styled.section`
width: 100% ; 
height:40% ;
position: absolute;

`
const Background= styled.div`
position:static;
z-index:-1 ; 
opacity:0.95;
height: 50%;
width: 100% ; 
img {
    width: 100% ; 
    height: 100% ; 
    object-fit:cover ; 
}
`
const LowerSection = styled.section`
background-color:#000817; 
position: absolute ; 
height: 500px ; 
width: 100% ; 

top: 187px ;
`
const Overview = styled.div`
background-color: inherit ; 
position : relative ; 
left:30% ;  
width: 70% ;  
`
const Reviews = styled.div`
background-color: inherit ; 
position : relative ; 
left:30% ;  
width: 70% ;  
`

const MoviePage =()=>{
    const [content,setContent]=useState(false) ; 
    const {id} = useParams() ; 
    const movies = useSelector(state=>state.movie.movies)
    const movie = movies.find(el=>el._id===id)
    console.log(movie)

return(
    <>
    <UpperSection>
        <Background>
            <img src={Image}/>
            {/* <img src='https://image.freepik.com/free-photo/empty-wooden-table-with-smoke-float-up-dark-background_68495-135.jpg'/> */}
          

        <Tab setContent={setContent} content={content} ></Tab>
        <Tab setContent={setContent} content={content} ></Tab>
            
        </Background>

        
    </UpperSection>
    <LowerSection>
        {content?
           <Overview>OVERVIEW</Overview> :<Reviews>reviews</Reviews>}
            <Rating></Rating>        
        

    <MovCard imgURL={movie.img} />
    </LowerSection>

    </>
)

}

export default MoviePage ; 