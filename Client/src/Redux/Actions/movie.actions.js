import axios from 'axios'
import {GET_MOVIES} from './actionTypes' ; 


export const addMovie=(title,runTime,Language, Overview ,date, distributor ,genres ,trailerUrl, img)=>async(dispatch)=>{


    try {
        const response = await axios.post("http://localhost:7200/api/movies/create",{title,runTime,Language, Overview ,date, distributor ,genres ,trailerUrl, img})
        
        dispatch(getMovies())
    } catch (error) {
        alert(error.response.data.error); 
    }
}

export const getMovies=()=> async(dispatch)=>
{
    try {
        const response = await axios.get("http://localhost:7200/api/movies/")
        console.log(response)
        dispatch({type:GET_MOVIES, payload:response.data.data})
    } catch (error) {
        alert(error.response.data.error)
    }
}

export const rateMovie=(id,reviews)=> async(dispatch)=>{

    try {
        
        const movie =await axios.patch(`http://localhost:7200/api/movies/:${id}`,reviews) ; 
        const review= await axios.post(`http://localhost:7200/reviews/`,reviews)
    } catch (error) {
        alert(error.response.data.error);
    }
}