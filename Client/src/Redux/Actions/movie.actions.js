import axios from "axios";
import { GET_MOVIES, SET_LOCATION } from "./actionTypes";

export const addMovie =
  (
    title,
    runTime,
    Language,
    Overview,
    date,
    distributor,
    genres,
    trailerUrl,
    img
  ) =>
  async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:7200/api/movies/create",data)
       
        dispatch(getMovies())
    } catch (error) {
        // alert(error.response.data.error); 
    }
}

export const getMovies=()=> async(dispatch)=>
{
    try {
        const response = await axios.get("http://localhost:7200/api/movies")
        
        
        dispatch({type:GET_MOVIES, payload:response.data.movies})
    } catch (error) {
      alert(error)
    }
  };


export const setLocation = (location) => (dispatch) => {
  dispatch({
    type: SET_LOCATION,
    payload: location,
  });
};

export const rateMovie = (movieId, reviews, customerId) => async (dispatch) => {
  const rating = reviews;
  try {
    const review = await axios.post(`http://localhost:7200/api/reviews`, {
      rating,
      customerId,
      movieId,
    });
    const movie = await axios.patch(
      `http://localhost:7200/api/movies/${movieId}`,
      rating
    );

    dispatch({ type: GET_MOVIES, payload: movie.payload.data });
  } catch (error) {
    alert(error.response.data.error);
  }
};
