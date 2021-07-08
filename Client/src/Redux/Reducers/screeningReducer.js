import { GET_SCREENINGS } from "../Actions/actionTypes";
const initialState = 
[

]
const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SCREENINGS:
      return [...payload];

    default:
      return state;
  }
};
export default movieReducer;
