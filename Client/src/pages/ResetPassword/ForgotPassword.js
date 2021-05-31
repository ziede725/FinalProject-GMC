import React,{useState} from 'react' ;
import axios from 'axios' ;  


const ForgotPassword = () =>
{   const [email,setEmail] = useState() ; 

    const handleClick=()=>{
        axios.post('http://localhost:7200/test',{email})
    }
    const handleChange = (e)=>{
        setEmail(e.target.value) ;  
    }

    return(
        <>
        <label>Enter your Email: </label>
        <input placeholder='Email' onChange={handleChange}></input>
        <button onClick={handleClick}> Send Email</button>
        
        </>
    )
}
export default ForgotPassword ; 