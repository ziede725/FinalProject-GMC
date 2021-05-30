import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LoginForm from './loginForm'
import { CardMedia, Container, Typography } from '@material-ui/core';
import Image from '../../assets/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg'
import RegistrationForm from '../Registration/RegistrationForm';
import RegistrationFormTheater from '../Registration/RegisterAsTheater';


const useStyles = makeStyles((theme) => ({
    root: {
    
      display: 'flex',
      justifyContent: 'center',
      height:'100%',
      width:'100%',
      backgroundImage:`url(${Image})`,
      backgroundPosition:"center",
      backgroundOrigin: "contentBox",
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat', 
      },
  
    paperContainerRegistration: {
        display:'flex',
        justifyContent:'start',
        alignItems:"start",
        padding:"50px",
        opacity:'0.88',
        margin:'100px',
        minWidth:"fit-content",
        width:"70%",
        height:'400px'
     
    },
    paperContainerLogin:{
        
        display:'flex',
        justifyContent:'center',
        paddingTop:"50px",
        alignItems:'start',
        opacity:'0.88',
        margin:'50px',
        width:'25%',
        height:'76vh'

    }


  }));


export const PaperFormLogin =()=>{
     const classes = useStyles() ; 
    return(
        <>
      
       <div className= {classes.root}>
            
            <Paper className={classes.paperContainerLogin} >
            <LoginForm/>      
            </Paper>
        </div>

            </>
    )
}
export const PaperFormRegister= ()=>{
    const classes= useStyles() ; 
    return(
        <>
        
       <div className= {classes.root}>
            
            <Paper className={classes.paperContainerRegistration} >
            <RegistrationForm/>
            </Paper>
            <Paper className={classes.paperContainerRegistration}>
            <RegistrationFormTheater/>  
            </Paper>
            
        </div>
        </>
    )
}

