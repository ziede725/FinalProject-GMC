import React, { useState } from 'react' ; 
import { Formik, Field, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {makeStyles, TextField} from '@material-ui/core'
import {Button} from "@material-ui/core"
import styled from 'styled-components';
import {Paper} from '@material-ui/core'; 
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import {IconButton} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { changeTheaterPassword, editTheater } from '../../Redux/Actions/actions';


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

const useStyles = makeStyles((theme)=>({

    
        field:{
            margin:'12px' 

        },
        Paper:{
            width: "60%" ,
            height: 'fitContent', 
            margin:'3%'

        }
  
}))





const Settings =({user})=>{
    const classes=useStyles() ; 
    const [fullName,setFullName] = useState(user.theaterName) ; 
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
    console.log(user)
    const id = user._id
    const handleClick=()=>{
      dispatch(editTheater(id,fullName,email,userName,phone,address,city,town,zipCode))
      console.log(id,fullName,email,userName,phone,address,city,town,zipCode)
     
    }
    return(
        <>              
                <Wrapper>
                    <Paper className={classes.Paper}>
              <TextField className={classes.field}
                color='primary'
                placeholder="Enter full Name "
                type="input"
                name="fullName" 
                onChange={e=> setFullName(e.target.value)}
                defaultValue={fullName}
               
              />

              <TextField  className={classes.field}
                color='primary'
                disabled={true}
                placeholder="Enter email"
                type="input"
                name="email"
                defaultValue={email}
              
              />
               {/* <Field  className={classes.field}
                color='primary'
                helperText={errors.password}
                error={errors.password}
                placeholder="Change password"
                type="input"
                name="password"
                as={TextField}
              /> */}

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
                 <TextField  className={classes.field}
                placeholder="city"
                type="input"
                name="city"
                onChange={e=>setCity(e.target.value)}
                defaultValue={city}
              />
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

       
            
            <button type="submit" onClick={handleClick}>Submit</button>
            {/* <IconButton type="submit" disabled={isSubmitting} >
              <SaveOutlinedIcon/>
            </IconButton> */}
            
            </Paper>
            </Wrapper>

            <Wrapper>
              <Paper>
                <WrapperFlex>
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
                type="input"
                name="newPassword" 
                onChange={e=> setNewPassword(e.target.value)}
                defaultValue={null}
               
              />
              <StyledButton onClick={()=>dispatch(changeTheaterPassword(user._id,currentPassword,newPassword))}>Confirm</StyledButton>
              </WrapperFlex>
              </Paper>
            </Wrapper>
         
       
        
   
   
        </>
    )
}

export default Settings ; 