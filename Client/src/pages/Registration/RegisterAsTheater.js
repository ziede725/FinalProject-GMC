import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Button, Select, TextField ,MenuItem} from "@material-ui/core";
import * as Yup from "yup";
import { Redirect,useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core"
import { GoogleLogin } from "react-google-login";
import {Typography,Container} from '@material-ui/core'
import { registerTheater } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";
import { SubmitButton } from "../../Components/DashboardComps/Buttons/submitButton";
import styled from "styled-components";


const SignupSchema = Yup.object().shape({
  userName: Yup.string().min(4, "tooShort").max(50).required("Required"),
  
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must contain more than 6 caracters !")
    .max(15)
    .required("Required"),
  location:Yup.string().required("enter valid location")
});
const useStyles= makeStyles((theme)=>({
  fieldClass:{
    marginBottom: '10px'

}
})
)
const Wrapper= styled.div`
display: flex ; 
flex-direction: column ; 
align-items: center;`

const RegistrationFormTheater = () => {
  const classes = useStyles() ; 
  let history = useHistory() ; 
  const dispatch= useDispatch() ; 
  const handleLogin = (data)=>{
     console.log(data)
  }
  
  return (
  
  <div>

  <Formik 
        initialValues={{theaterName:"",
          userName: "",
          email: "",
          password: "",
         location:""
        }}
        validationSchema={SignupSchema}
        onSubmit={(user)=>{
        
         console.log(user)
          dispatch(registerTheater(user,history))
        }
        }
      >
       
        {({ values, errors, isSubmitting,handleChange }) => (
          
          <Form>
            <Wrapper>
            <h2> Register as Theater</h2>
            <Field className={classes.fieldClass}
                helperText={errors.theaterName}
                error={errors.theaterName}
                placeholder="Enter Theater Name"
                type="input"
                name="theaterName"
                as={TextField}
              />
              
              <Field className={classes.fieldClass}
                helperText={errors.email}
                error={errors.email}
                placeholder="email"
               
                type="input"
                name="email"
                
                as={TextField}
              />
         
              <Field className={classes.fieldClass}
                helperText={errors.password}
                error={errors.password}
                placeholder="password"
                type="input"
                name="password"
              
                
                as={TextField}
              />
        
              <Field className={classes.fieldClass}
                helperText={errors.userName}
                error={errors.userName}
                placeholder="userName"
                type="input"
                name="userName"
                as={TextField}
              />
              <Select 
          select
          labelId="Location"
          name="location"
          value={values.location}
          onChange={handleChange}
         >
          <MenuItem value="sfax">Sfax</MenuItem>
          <MenuItem value="tunis">Tunis</MenuItem>
          <MenuItem value="sousse">Sousse</MenuItem>
        </Select>
        
            
          
        <SubmitButton type="submit" >
              Create Account
            </SubmitButton>
       
           <GoogleLogin
              theme='dark'
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText="Sign in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={"single_host_origin"}
              disabled={false}
            />
       
          
       </Wrapper>
         
          </Form>
        )}
      </Formik>
      
    </div>
  );
};
export default RegistrationFormTheater;
