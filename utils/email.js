const nodemailer = require("nodemailer");
require("dotenv").config();


const sendEmail=async(email,payload)=>{
  

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.USER_MAIL, // generated ethereal user
          pass: process.env.USER_PASSWORD, // generated ethereal password
        },
        tls:{
          rejectUnauthorized: false ,
        }
      });
<<<<<<< HEAD
=======
      console.log(email)
      console.log(payload)
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
    
      // send mail with defined transport object
      try {
        let info = await transporter.sendMail({
          from: '"My app contact" <ziede.ben.yahya@gmail.com>', // sender address
          to: `${email}`, // list of receivers
<<<<<<< HEAD
          subject: "Resetting pasword ", // Subject line
          text: `${payload.link}`, // plain text body
          html: `
          <p>You requested a password reset , if this is you click on this link</p>
          <b>${payload.link}</b>`, // html body
=======
          subject: "Hello ✔", // Subject line
          text: `${payload.link}`, // plain text body
          html: `<b>${payload.link}</b>`, // html body
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
        });
      }
     catch(err)
     {
<<<<<<< HEAD
       
=======
       console.log(err)
>>>>>>> 81af386bde675906ce730a684a8e43a906b340a7
     }
    
      // console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    module.exports={
      sendEmail
    }