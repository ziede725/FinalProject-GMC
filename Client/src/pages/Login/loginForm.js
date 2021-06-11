import React ,{useState} from "react";
import { Formik, Field, Form } from "formik";
import {  makeStyles, TextField, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { GoogleLogin } from "react-google-login";
import {Link} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux' ; 
import  {getUser, loginUser}  from "../../Redux/Actions/actions";
import {Redirect, useHistory} from 'react-router-dom'
import  styled from 'styled-components'
import {SubmitButton} from '../../Components/DashboardComps/Buttons/submitButton'
import axios from 'axios'
require("dotenv").config();
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6)
    .max(15)
    .required("Required"),
});
const useStyles= makeStyles((theme)=>({
    fieldClass:{
      marginBottom: '30px'

  } , 
  
  button:{
    color: 'black' , 
    backgroundColor : 'black' ,

  },
  linkStyle:{
    marginBottom: '10px',
  },
  typographyStyle:{
    marginBottom:"25px"

  }
 
})
)

const Wrapper= styled.div`
display:flex ; 
flex-direction: column; 
justify-content: space-between ; 
padding-left:15px ; 
padding-top: 0px ; 
`
const FormWrapper= styled.div`
display: flex ; 
flex-direction : column ; 
justify-content: space-between`
export const Error = styled.h6`
color: red ; `

const LogInForm = (props) => {
  const [loggedIn , setLoggedIn] = useState(false) ; 
  const err= useSelector(state=>state.root.error)
  let history  =useHistory() ; 
  const dispatch = useDispatch() ; 
  const classes=useStyles() ; 
  const handleLogin = async (googleData) => {
    const res = await fetch("/api/auth/google", {
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
   
    
  };
//   const handleLogin = (data)=>{
//     setLoggedIn(data) ; 
// }

  const responseGoogle = (res) => {
    console.log(res);
  };
  return (
    
      <>
      {loggedIn && <Redirect to = '/'/>}
      <Wrapper>
      <Typography className={classes.typographyStyle} variant='h4'>Sign In </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password }) => {
          console.log({email,password})
          dispatch(loginUser({email,password},history))
        }

        }
      >
        {({ values, errors, isSubmitting }) => (
        
                <Form>
                 <FormWrapper>
            <div>
              <Field className={classes.fieldClass}
                color='primary'
                // helperText={errors.email}
                // error={errors.email}
                required={true}
                placeholder="Enter email"
                type="input"
                name="email"
                as={TextField}
              />
            {errors.email&& <div>{errors.email}</div>}
            </div>
            <div>
              <Field className={classes.fieldClass}
                // helperText={errors.password}
                //  error={errors.password}
                required={true}
                placeholder="Enter password"
                type="password"
                name="password"
                as={TextField}
              />
            </div>
            <Link className={classes.linkStyle} href='/forgot-password' 
            // onClick={()=>history.push('/forgot-password')}
            >Forgot Password ?</Link>
            
            <SubmitButton type="submit" >
              Submit
            </SubmitButton>
            <GoogleLogin
              theme='dark'
              // render={renderProps => (
              //   <button onClick={renderProps.onClick} style={myCustomGo}>This is my custom Google button</button>
              // )}
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={"single_host_origin"}
              disabled={false}
            />
        </FormWrapper>
          </Form>
        
        
        )}
      </Formik>
      </Wrapper>
  </>
     

  );
};

export default LogInForm;
