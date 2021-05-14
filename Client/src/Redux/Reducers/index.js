import { combineReducers } from 'redux';
import rootReducer from './rootReducer'; 
import theaterReducer from './theaterReducer'

const allReducers = combineReducers({
    root: rootReducer, theater:theaterReducer 
});

export default allReducers;