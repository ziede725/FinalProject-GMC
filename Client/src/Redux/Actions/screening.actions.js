import axios from "axios";

import { GET_SCREENINGS } from "./actionTypes";

export const getScreenings = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/screenings");

    dispatch({ type: GET_SCREENINGS, payload: response.data.screenings });
  } catch (error) {
    alert(error);
  }
};
export const SetSeats = (id,seats)=> async (dispatch) => {
console.log(id)
  try {
    const response = await axios.patch(`/api/screenings/editSeat/${id}`,{seats}) ; 
    console.log(response) ; 
    console.log("dispatching before error")
    
  } catch (error) {
 
    console.log(error.response) 
  }
}
  
