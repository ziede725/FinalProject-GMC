import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { Redirect,useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core"
import { GoogleLogin } from "react-google-login";
import {Typography,Container} from '@material-ui/core'
import { registerTheater } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";

const SignupSchema = Yup.object().shape({
  userName: Yup.string().min(4, "tooShort").max(50).required("Required"),
  
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must contain more than 6 caracters !")
    .max(15)
    .required("Required"),
});
const useStyles= makeStyles((theme)=>({
  fieldClass:{
    marginBottom: '10px'

}
})
)


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
        }}
        validationSchema={SignupSchema}
        onSubmit={(user)=>{
        
         
          dispatch(registerTheater(user,history))
        }
        }
      >
        {({ values, errors, isSubmitting,handleChange }) => (
          <Form>
            <Container>
            <Container>
            <Typography variant='h4'>MovieTheater Sign in</Typography>
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
        
            
             </Container>
        <Container>
        <Button className={classes.fieldClass} type="submit" >
              Create Account
            </Button>
        </Container>
           <Container>
           <GoogleLogin
              theme='dark'
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText="Sign in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={"single_host_origin"}
              disabled={false}
            />
           </Container>
          
            </Container>
         
          </Form>
        )}
      </Formik>
      
    </div>
  );
};
export default RegistrationFormTheater;
