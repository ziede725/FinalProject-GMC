import axios from "axios";

import { GET_SCREENINGS } from "./actionTypes";

export const getScreenings = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:7200/api/screenings");

    dispatch({ type: GET_SCREENINGS, payload: response.data.screenings });
  } catch (error) {
    alert(error);
  }
};
