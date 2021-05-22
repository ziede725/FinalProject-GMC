import axios from 'axios';
import React, { useEffect } from 'react' ; 
import { useSelector } from 'react-redux';



const Dash = ()=>{
    const user = useSelector(state=> state.root.user)
    
    return (
        <>
        {/* <h1> welcome {user.theaterName} </h1>
        <h2>this is your mail {user.email}</h2> */}
       
        </>
    )
}
export default Dash; 