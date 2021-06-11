import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";
import axios from "axios";
import * as Yup from "yup";
import { Redirect, useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core"
import { GoogleLogin } from "react-google-login";
import {Typography} from '@material-ui/core'
import { SubmitButton } from "../../Components/DashboardComps/Buttons/submitButton";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {getUser, registerCustomer} from '../../Redux/Actions/actions'

const SignupSchema = Yup.object().shape({
  userName: Yup.string().min(4, "tooShort").max(50).required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must contain more than 6 caracters !")
    .max(15,"Password must be <16 caracters")
    .required("Required"),
});
const useStyles= makeStyles((theme)=>({
  fieldClass:{
    marginBottom: '10px',
   width:"100%"

},
})
)
const Wrapper= styled.div`
display: flex ; 
flex-direction: column ; 
width:100%;`
const ErrMsg = styled.div`
color:red ;
max-width:100% ;
 `

const RegistrationForm = () => {
  const [loggedIn , setLoggedIn] = useState(false) ; 
  const classes = useStyles() ; 
  const dispatch = useDispatch() ; 
  const history = useHistory() ; 
  const handleLogin = async (googleData) => {
    const res = await fetch("http://localhost:7200/api/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // store returned user somehow
    localStorage.setItem('token',data.token)
    dispatch(getUser()) ; 
    setLoggedIn(data.success)
    console.log('handle login used ?')
   
    
  };
  
  return (
  
 <>
  {loggedIn && <Redirect to = '/'/>}
  
      <Formik 
        initialValues={{
          userName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async ({
          email,
          password,
          userName,
          firstName,
          lastName,
        }) => {
        dispatch(registerCustomer({email,password,userName,firstName,lastName},history))}}
      >
        {({ values, errors, isSubmitting,handleBlur }) => (
          <Form>
           <Wrapper>
            <Typography variant='h4'>Register</Typography>
            <div width='100%'>
              <Field className={classes.fieldClass}
                placeholder="email"
                type="input"
                name="email"
                as={TextField}
                onBlur={handleBlur}
              />
              <ErrorMessage name="email" render={msg=><ErrMsg>{msg}</ErrMsg>}/>
              </div>
              <div>
              
              <Field className={classes.fieldClass}
                placeholder="password"
                type="password"
                name="password"
                as={TextField}
                onBlur={handleBlur}
              />
               <ErrorMessage name="password" render={msg=><ErrMsg>{msg}</ErrMsg>}/>
               </div>
               <div>
              <Field className={classes.fieldClass}
                placeholder="userName"
                type="input"
                name="userName"
                as={TextField}
                onBlur={handleBlur}
              />
                <ErrorMessage name="userName" render={msg=><ErrMsg>{msg}</ErrMsg>}/>
        
                </div>
                <div>
              <Field className={classes.fieldClass}
                
                placeholder="firstName"
                type="input"
                name="firstName"
                as={TextField}
                onBlur={handleBlur}
                fullWidth={true}
              />
              <ErrorMessage name="firstName" render={msg=><ErrMsg>{msg}</ErrMsg>}/>

              </div>
              <div>
              <Field className={classes.fieldClass}
               
                placeholder="lastName"
                type="input"
                name="lastName"
                as={TextField}
                onBlur={handleBlur}
                
              />
                <ErrorMessage name="lastName" render={msg=><ErrMsg>{msg}</ErrMsg>}/>
             </div>
             
       
        <SubmitButton type="submit" disabled={isSubmitting}>
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
      
   </>
  );
};

export default RegistrationForm;
