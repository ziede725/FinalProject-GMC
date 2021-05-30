import React, { useEffect, useState } from 'react' ; 
import {makeStyles, TextField} from '@material-ui/core'
import styled from 'styled-components';
import {Paper} from '@material-ui/core'; 
import { useDispatch, useSelector } from 'react-redux';
import { changeTheaterPassword, editTheater } from '../../Redux/Actions/actions';
import {Autocomplete} from '@material-ui/lab'
import { set } from 'mongoose';


const Wrapper = styled.div`
display: flex ; 
flex-direction: row ; 
justify-content: space-between ; 
flex-wrap: wrap ; 
margin: 2%; 
width: 70% ; 
align-items : center; 

`
const StyledButton = styled.button`

`
const WrapperFlex= styled.div`
display: flex ; 
flex-direction: column ; 
justify-content: space-around ; 
`
const Error =styled.span`
font-size: 14px ; 
color : red ; 
`
const FlexRow =styled.div`
display:flex ; 
flex-direction : row ; 
justify-content: space-around ; 

`
const FormTitle = styled.h4`
color: blue ; 
position: relative ; 
left: 20px ; 
font-size: 20px ;
font-family: "Gill Sans", sans-serif; 
`
const useStyles = makeStyles((theme)=>({

    
        field:{
            margin:'12px' 

        },
        Paper:{
            width: "fitContent" ,
            height: 'fitContent', 
            margin:'3%',
            paddingLeft:'20px',
            paddingBottom:'20px',

        },
        root:{
          width:"67%",
          marginLeft:"12px",
        },
        background:{
          backgroundColor:'#f3f2f7',
          height:"100vh"
        }
  
}))





const Settings =({user})=>{
    const classes=useStyles() ; 
    const [theaterName,setTheaterName] = useState(user.theaterName) ; 
    const [email,setEmail]= useState(user.email) ; 
    const [userName,setUserName]= useState(user.userName) ; 
    const [phone,setPhone]= useState(user.phoneNumber) ; 
    const [address,setAddress]= useState(user.address) ; 
    const [city,setCity]= useState(user.city) ; 
    const [town,setTown]= useState(user.town) ; 
    const [zipCode,setZipCode]= useState(user.zipcode) ; 
    const [currentPassword,setCurrentPassword] = useState("") ; 
    const [newPassword,setNewPassword] = useState("") ; 
    const dispatch= useDispatch() ; 
    const [response,setResponse] = useState("") ; 
    const [error,setError] = useState("") ; 
    const cities = ["Tunis","Sousse","Sfax"]
    const id = user._id
    const handleClick=()=>{
      
      const response= dispatch(editTheater(id,theaterName,email,userName,phone,address,city,town,zipCode))
      
     
    }
    const handlePassword = async()=>{
    
        const response= await dispatch(changeTheaterPassword(user._id,currentPassword,newPassword))  
     
        if(response.success)
        {
          // setResponse(response.message) ; 
          setError(null) ; 
          alert(response.message) ; 
          setResponse(response.message)
         
       
        }
        else{
          
          setError(response.error)
        }
    }
  
    return(
        <>       
        <div className={classes.background}>
        <FlexRow>     
                <Wrapper>
                    <Paper className={classes.Paper}>
                      <FormTitle>Profile Infos</FormTitle>
              <TextField className={classes.field}
                color='primary'
                placeholder="Enter Theater Name "
                type="input"
                name="theaterName" 
                onChange={e=> setTheaterName(e.target.value)}
                defaultValue={theaterName}
               
              />

              <TextField  className={classes.field}
                color='primary'
                disabled={true}
                placeholder="Enter email"
                type="input"
                name="email"
                defaultValue={email}
              
              />
        

              <TextField  className={classes.field}
                color='primary'
                onChange={(e)=>setUserName(e.target.value)}
                placeholder="User Name"
                type="input"
                name="userName"
                defaultValue={userName}
              />

              <TextField  className={classes.field}
                placeholder="Phone Number"
                type="input"
                name="phone"
                onChange={e=> setPhone(e.target.value)}
                defaultValue={phone}
              />

                <TextField  className={classes.field}
                placeholder="Address"
                type="input"
                name="address"
                onChange={e=>setAddress(e.target.value)}
                defaultValue={address}
              />
               
               <Autocomplete
        id="combo-box-demo"
        options={cities}
       getOptionLabel={(option) => option}
       style={{ width: 300 }}
       defaultValue={city}
       
       onChange={(event,value)=> value && setCity(value)}
       
       renderInput={(params) => <TextField type="input" {...params} className={classes.root} label=" * City"  />}/>
     
                 <TextField  className={classes.field}
                placeholder="Town"
                type="input"
                name="town"
                onChange={e=>setTown(e.target.value)}
                defaultValue={town}
              />
                 <TextField  className={classes.field}
                placeholder="Zip code "
                type="input"
                name="zipcode"
                onChange={e=>setZipCode(e.target.value)}
                defaultValue={zipCode}
              />
              <div>
              <button type="submit" onClick={handleClick}>Submit</button>
              </div>
          
            {/* <IconButton type="submit" disabled={isSubmitting} >
              <SaveOutlinedIcon/>
            </IconButton> */}
            
            </Paper>
            </Wrapper>

            <Wrapper>
              <Paper className={classes.Paper}>
                <WrapperFlex>
                  <FormTitle>Change Passowrd </FormTitle>
              <TextField className={classes.field}
                color='primary'
                placeholder="Enter current password "
                type="input"
                name="currentPassword" 
                onChange={e=> setCurrentPassword(e.target.value)}
                defaultValue={null}
               
               
              />
               <TextField className={classes.field}
                color='primary'
                placeholder="Enter new password "
                type="password"
                name="newPassword" 
                onChange={e=> setNewPassword(e.target.value)}
                defaultValue={null}
               
              />
              {error&& <Error>{error}</Error>}
               
              <StyledButton onClick={handlePassword}>Confirm</StyledButton>
              </WrapperFlex>
              </Paper>
            </Wrapper>
            </FlexRow>  
            </div>
         
       
        
   
   
        </>
    )
}

export default Settings ; 