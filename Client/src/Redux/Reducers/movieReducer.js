import {GET_MOVIES} from '../Actions/actionTypes'
const initialState={

    movies:[],

}

const movieReducer =(state=initialState,{type,payload})=>{

    switch(type){

        case GET_MOVIES: 
         return {...state, movies:[...payload]}
    
        default: 
        return state ; 
    }

  
}
export default movieReducer ; 