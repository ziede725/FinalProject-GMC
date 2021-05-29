import { GET_MOVIES, SET_LOCATION } from "../Actions/actionTypes";
const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: [...payload] };

    case SET_LOCATION:
      return { ...state, location: payload };
    default:
      return state;
  }
};
export default movieReducer;
