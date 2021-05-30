import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import theaterReducer from "./theaterReducer";
import movieReducer from "./movieReducer";
import screeningReducer from "./screeningReducer";

const allReducers = combineReducers({
  root: rootReducer,
  theater: theaterReducer,
  movie: movieReducer,
  screenings: screeningReducer,
});

export default allReducers;
