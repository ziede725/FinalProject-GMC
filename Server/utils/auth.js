const Admin = require("../models/Admin");
const Customer = require("../models/Customer");
const Theater = require("../models/Theater");
const ErrorHandler = require("../helpers/errorHandler");
const mongoose= require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt') ; 


const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    message: "Signed in with success",
    user ,
    token
  });
};
//Admin Authentication
exports.registerAdmin = async (req, res, next) => {
  const { firstName, lastName, userName, email, password } = req.body;

  try {
    const admin = await Admin.create({
      firstName,
      lastName,
      userName,
      email,
      password,
    });

    sendToken(admin, 201, res);
  } catch (error) {
    
    next(error);
  }
};


//Customer authentication
exports.registerCustomer = async (req, res, next) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    phoneNumber,
  } = req.body;
  try {
  const userExist = await Customer.findOne({email}) ; 
  if (userExist)
  {
    throw new ErrorHandler(409,"user already exists ")
  }
  
    const customer = await Customer.create({
      firstName,
      lastName,
      userName,
      email,
      password,
      phoneNumber,
    });
    sendToken(customer, 201, res);
  } catch (error) {
    console.log(error)
    next(error);
  }
};
exports.getUser = async(req,res,next)=>{
  const token = req.params.id ;
  const user ={}
  
  
  try {
   
    const id= jwt.verify(token,process.env.JWT_SECRET) ; 
   
    const object= mongoose.Types.ObjectId(id.id) ; 
    const customer = await Customer.findById(object)
    const admin = await Admin.findById(object) 
    const theater =await Theater.findById(object)
   
    if (customer)
    {
      res.status(200).json({
        success: true,
        user:customer
      })
    }
    else if(admin)
    {
      res.status(200).json({
        success: true,
        user:admin
      })
    }
    else{
      res.status(200).json({
        success: true,
        user:theater
      })
    }
 
  } catch (error) {
    next(error)
  }
}
exports.loginUser = async(req,res,next)=>{
  const {email,password} = req.body ; 
  
  let isMatchCustomer= false ; 
  let isMatchTheater= false ; 
  let isMatchAdmin= false ; 

  if (!email || !password)
  {
    throw new ErrorHandler(400,"Please provide email and password") ; 
  }
  try {
    const customer = await Customer.findOne({email}).select("+password")
    .exec() ; 
   
    const admin = await Admin.findOne({email}).select("+password")
    .exec(); ; 
   
    const theater =await Theater.findOne({email}).select("+password")
    .exec(); ; 
   
    if(!customer && !admin && !theater)
    {
      throw new ErrorHandler(404,"Invalid credentials ! Verify your email ")
    }
   
    if(Boolean(customer))
    {console.log("customer")
      isMatchCustomer = await customer.matchPasswords(password) ;
      console.log(isMatchCustomer)
    }
    else if (Boolean(theater))
    {console.log("theater")
      isMatchTheater = await theater.matchPasswords(password) ;
      console.log(isMatchTheater)
     
    }
    else {
      console.log("admin")
      isMatchAdmin = await admin.matchPasswords(password) ;
     
      
    }
    
 
    if (!isMatchCustomer && !isMatchAdmin && ! isMatchTheater)
    {
      throw new ErrorHandler(404,'Invalid credentials ! wrong password')
    }
    customer && sendToken(customer, 200, res) ; 
    admin && sendToken(admin, 200, res);
    theater && sendToken(theater,200,res) ;    
  } catch (error) {
    next(error)
  }

}
exports.forgotPasswordCustomer = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `You requested a reset password link, chek your email!`,
  });
};
exports.logoutCustomer = (req, res, next) => {
  try {
    unSetToken(200, res);
  } catch (error) {
    next(error);
  }
};

//Theater Authentication
exports.registerTheater = async (req, res, next) => {
  const { theaterName, userName, email, password, location } = req.body;
  
  try {
    const theater = await Theater.create({
      theaterName,
      userName,
      email,
      password,
      city:location,
    });
    sendToken(theater, 201, res);
  } catch (error) {
    next(error);
  }
};
exports.forgotPasswordTheater = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `You requested a reset password link, chek your email!`,
  });
};

exports.ChangePassword=async(req,res,next)=>{
  const token = req.params.token ; 
 const body = req.body ;  

  try {
      const user_id = jwt.verify(token,process.env.JWT_SECRET) ; 
      
      const id = mongoose.Types.ObjectId(user_id.id) ;
      console.log(id) ; 
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(body.password, salt);
      const customer = await Customer.findOneAndUpdate(
        { _id: id },
        { $set: {password:password} },
        { new: true, runValidators: true }
      ).exec();
      console.log(customer) ; 
      
      // const theater = Theater.findByIdAndUpdate(id,{$set:{password:password}}) ; 

      res.status(200).json({
        success: true, 
        message: "Password has been reset successfully !"
      })
      
    
  } catch (error) {
    next(error) ; 
  }
}


// const unSetToken = (statusCode, res) => {
//   const token = ""
//   res.status(statusCode).json({
//     success: true,
//     message: "logged out with success",
//     token,
//   });
// };


// exports.logoutTheater = (req, res, next) => {
  //   try {
    //     unSetToken(200, res);
    //   } catch (error) {
      //     next(error);
      //   }
      // };  
      
   // exports.loginTheater = async (req, res, next) => {
        //   const { email, password } = req.body;
        
        //   if (!email || !password)
        //     throw new ErrorHandler(400, " Please provide email and password");
        
        //   try {
          //     const theater = await Theater.findOne({ email }).select("+password").exec();
          //     if (!theater) throw new ErrorHandler(404, "Invalid credentials email");
          
          //     const isMatch = await theater.matchPasswords(password);
          //     if (!isMatch) throw new ErrorHandler(404, "Invalid Credentials pwd");
          //     sendToken(theater, 200, res);
          //   } catch (error) {
            //     next(error);
            //   }
            // };

            // exports.loginCustomer = async (req, res, next) => {
            //   const { email, password } = req.body;
            
            //   if (!email || !password)
            //     throw new ErrorHandler(400, " Please provide email and password");
            
            //   try {
            //     const customer = await Customer.findOne({ email })
            //       .select("+password")
            //       .exec();
            //     if (!customer) throw new ErrorHandler(404, "Invalid credentials email");
            
            //     const isMatch = await customer.matchPasswords(password);
            //     if (!isMatch) throw new ErrorHandler(404, "Invalid Credentials pwd");
            //     sendToken(customer, 200, res);
            //   } catch (error) {
            //     next(error);
            //   }
            // };

// exports.loginAdmin = async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || !password)
//     throw new ErrorHandler(400, " Please provide email and password");

//   try {
//     const admin = await Admin.findOne({ email }).select("+password").exec();
//     if (!admin) throw new ErrorHandler(404, "Invalid credentials email");

//     const isMatch = await admin.matchPasswords(password);
//     if (!isMatch) throw new ErrorHandler(404, "Invalid Credentials pwd");
//     sendToken(admin, 200, res);
//   } catch (error) {
//     next(error);
//   }
// };