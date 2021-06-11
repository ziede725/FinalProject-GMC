import React,{useState} from 'react' ;
import axios from 'axios' ;  


const ForgotPassword = () =>
{   const [email,setEmail] = useState() ; 

    const handleClick=async()=>{
        try {
            const result =  await axios.post('http://localhost:7200/test',{email}) ; 
        if(result.data.success)
        {
            return alert('A confirmation Link has been Sent to your email,please check it! ')
        }     
        } catch (error) {
            console.log(error) ; 
        }
        
    
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