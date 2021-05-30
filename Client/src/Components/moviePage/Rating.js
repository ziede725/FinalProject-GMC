
import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router'
import styled from 'styled-components'
import {rateMovie} from '../../Redux/Actions/movie.actions'

const Wrapper = styled.div`
color: white ; 
`

const Rating=({movie})=>{
const dispatch= useDispatch() ; 
const [edit,setEdit]= React.useState(true)
const [value,setValue] = React.useState(5)
const user = useSelector(state=>state.root.user)
const auth = useSelector(state=>state.root.isAuth)
const id= useParams() ; 
// console.log(user)
// console.log(auth)

const handleChange=(rating)=>{

if(auth)
{   
    setEdit(false) ; 
    setValue(rating);
    dispatch(rateMovie(movie._id,rating,user._id))
}
else{
    <Redirect to ='/login'/>
}

   
}
    return(
        <>
        <Wrapper>
            <h5>Rate this movie ! </h5>
            <ReactStars
            value={value}
            onChange={(rating)=>handleChange(rating)}
            edit={true}

            
            />

        </Wrapper>
        
        </>
    )
}
export default Rating; 