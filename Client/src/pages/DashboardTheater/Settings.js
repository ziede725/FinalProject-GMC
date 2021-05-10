import React from 'react' ; 
import { Formik, Field, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {makeStyles, TextField} from '@material-ui/core'
import {Button} from "@material-ui/core"
import styled from 'styled-components';
import {Paper} from '@material-ui/core'; 
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import {IconButton} from '@material-ui/core'


const Wrapper = styled.div`
display: flex ; 
flex-direction: row ; 
justify-content: space-between ; 
flex-wrap: wrap ; 
margin: 2%; 
width: 70% ; 
align-items : center; 

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

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required('Required') , 
    password: Yup.string()
      .min(6, "Password must contain more than 6 caracters !")
      .max(15)
      .required("Required"),
    userName: Yup.string().email("Invalid email").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber : Yup.string().matches("((\+|00)216)?([2579][0-9]{7}|(3[012]|4[01]|8[0128])[0-9]{6}|42[16][0-9]{5})").required('required'),
    address : Yup.string().max(40), 
    town:Yup.string().max(40) ,
    city: Yup.string().max(40), 
    zipcode:Yup.string().max(4).min(4) 
  });



const Settings =()=>{
    const classes=useStyles() ; 
    return(
        <>

<Formik
        initialValues={{ fullName:"",email: "", password: "" ,phoneNumber:"",address:"",town:"Tunis",city:"Tunis",zipcode:2045}}
        validationSchema={SignupSchema}
        onSubmit={async ({ email, password }) => {
        //   axios
        //     .post("http://localhost:7200/api/customers/login", {
        //       email,
        //       password,
        //     })
        //     .then((res) => {
        //       setLoggedIn(res.data.success)
        //     })
        //     .catch((err) => console.log(err));
        }}
      >
        {({ values, errors, isSubmitting }) => (
        
               
                <Wrapper>
                    <Paper className={classes.Paper}>
              <Field className={classes.field}
                color='primary'
                helperText={errors.fullName}
                error={errors.fullName}
                placeholder="Enter full Name "
                type="input"
                name="Name"
                as={TextField}
              />

              <Field  className={classes.field}
                color='primary'
                helperText={errors.email}
                error={errors.email}
                placeholder="Enter email"
                type="input"
                name="email"
                as={TextField}
              />
               <Field  className={classes.field}
                color='primary'
                helperText={errors.password}
                error={errors.password}
                placeholder="Change password"
                type="input"
                name="email"
                as={TextField}
              />

              <Field  className={classes.field}
                color='primary'
                helperText={errors.userName}
                error={errors.userName}
                placeholder="User Name"
                type="input"
                name="UserName"
                as={TextField}
              />

              <Field  className={classes.field}
                helperText={errors.phoneNumber}
                error={errors.phoneNumber}
                placeholder="Phone Number"
                type="input"
                name="phone"
                as={TextField}
              />

                <Field  className={classes.field}
                helperText={errors.address}
                error={errors.password}
                placeholder="Address"
                type="input"
                name="adress"
                as={TextField}
              />
                 <Field  className={classes.field}
                helperText={errors.city}
                error={errors.city}
                placeholder="city"
                type="input"
                name="city"
                as={TextField}
              />
                 <Field  className={classes.field}
                helperText={errors.town}
                error={errors.town}
                placeholder="Town"
                type="input"
                name="town"
                as={TextField}
              />
                 <Field  className={classes.field}
                helperText={errors.zipcode}
                error={errors.zipcode}
                placeholder="Zip code "
                type="input"
                name="zipcode"
                as={TextField}
              />

       
            
            
            <IconButton type="submit" disabled={isSubmitting}>
              <SaveOutlinedIcon/>
            </IconButton>
            
            </Paper>
            </Wrapper>
         
       
        
        )}
      </Formik>
        </>
    )
}

export default Settings ; 