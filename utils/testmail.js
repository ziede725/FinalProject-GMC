const JWT = require("jsonwebtoken");
<<<<<<< HEAD
const Admin = require('../models/Admin')
const Customer = require('../models/Customer')
const Theater = require('../models/Theater')

const {sendEmail} = require("./email");
=======
const admin = require('../models/Admin')

const {sendEmail} = require("./email");
const crypto = require("crypto");
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
const bcrypt = require("bcrypt");
const ErrorHandler = require('../middlewares/error')
const {sendToken,unSetToken}= require('./auth')

const requestResetPassword = async(req,res,next)=>{
    const userMail = req.body.email
<<<<<<< HEAD
    let resetToken = null ; 
    try {
        const [admin] = await Admin.find({email: userMail}) ;
        const [theater] = await Theater.find({email:userMail}) ; 
        const [customer] = await Customer.find({email:userMail})
      
         
        if (!admin && !customer &&!theater)
        {
            throw new ErrorHandler(404,'there is no user with this mail ')
        }  ; 
        if(customer)
        {   
            console.log('im in customer')
            resetToken = customer.getSignedToken() ; 
        }
        else if (theater){
            console.log('im in theater')
             resetToken = theater.getSignedToken() ; 
        }
        else {
                resetToken=admin.getSignedToken() ; 
        }
      console.log(resetToken)
        const link = `http://localhost:3000/reset-password/${resetToken}`;
        
        const message = await sendEmail(customer.email,{link: link});
=======
    try {
        const [user] = await admin.find({email: userMail}) ;
        console.log(user) ;  
        if (!user)
        {
            throw new ErrorHandler(404,'there is no user with this mail ')
        }  ; 
    
        let resetToken = user.getResetPasswordToken() ; 
        console.log(user._id) ; 
        const link = `http://localhost:7200/passwordReset?token=${resetToken}&id=${user._id}`;
        const message = await sendEmail(user.email,{link: link});
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
        res.status(200).json({
            success: true , 
            message 
        })
    }
    catch(err)
    {
        next(err)
    }
  


}

module.exports= {
    requestResetPassword
}