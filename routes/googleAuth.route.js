const { OAuth2Client } = require('google-auth-library') ; 
const Admin = require('../models/Admin') ; 
const Customer = require('../models/Customer') ; 
const router = require('express').Router() ; 
const client = new OAuth2Client(process.env.REACT_APP_CLIENT_ID) ; 
const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({
      success: true,
      message: "Signed in with success",
      token , 
      user ,
    })  
    
  };
router.post("/google", async (req, res) => {
    const { token }  = req.body
    console.log(req.body)
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.REACT_APP_CLIENT_ID
    });
    console.log(process.env.REACT_APP_CLIENT_ID)
    const { given_name,family_name, email, picture } = ticket.getPayload() ; 
    const user = await Customer.findOneAndUpdate({email},{$set:{firstName:given_name,lastName:family_name,email}},{upsert: true ,new:true }) ; 
    // const user = await Customer.findOneAndUpdate({email} , ) ; 
    await sendToken(user, 201, res);  
    } catch (error) {
      next(error);
    }
    
   
})
module.exports = router ; 