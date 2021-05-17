import { combineReducers } from 'redux';
import rootReducer from './rootReducer'; 
import theaterReducer from './theaterReducer'
import movieReducer from './movieReducer'

const allReducers = combineReducers({
    root: rootReducer, theater:theaterReducer ,movie:movieReducer
});

export default allReducers;