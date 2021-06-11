import React,{useState ,useEffect} from 'react' ; 
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'


const ResetPassword =()=>{
    let token = useParams() ; 
    const history = useHistory() ; 
    const [newPassword,setNewPassword] = useState() ; 
    const [password, setPassword] =useState() ; 
    const [serverRes,setServerRes]=useState() ; 


    useEffect(()=>{
        console.log(serverRes) ; 
        if(serverRes&&serverRes.data.success)
        {   alert("Passowrd Changed succesfully !")
            history.push("/login") ; 
        }
      
    },[serverRes])

const handleClick=async()=>{
    if(newPassword===password)
    {
        const response = await axios.post(`passwordReset/${token.token}`,{password})
        setServerRes(response)
    }
    else{
        alert("Passwords entered do not match, try again") ; 
    }
}
    return(
        <>
        <input placeholder="Enter new password" onChange={(e)=>setNewPassword(e.target.value)} required='true'></input>
        <input placeholder='Re-enter password' onChange={(e)=> setPassword(e.target.value)} required='true'></input>
        <button type="submit" onClick={handleClick}>Confirm</button>
        </>
    )
}
export default ResetPassword;
