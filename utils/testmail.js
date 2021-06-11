const JWT = require("jsonwebtoken");
const Admin = require('../models/Admin')
const Customer = require('../models/Customer')
const Theater = require('../models/Theater')

const {sendEmail} = require("./email");
const bcrypt = require("bcrypt");
const ErrorHandler = require('../middlewares/error')
const {sendToken,unSetToken}= require('./auth')

const requestResetPassword = async(req,res,next)=>{
    const userMail = req.body.email
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