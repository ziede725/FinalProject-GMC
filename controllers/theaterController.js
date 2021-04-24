const ErrorHandler= require('../helpers/errorHandler') ; 
const Theater = require('../models/Theater')  ; 


// get all theaters  query 

const getAllTheaters = async(req,res,next)=>{
    
     try {
        const data = await Theater.find({}).exec() ; 
        res.status(200).json(
            {
                success : true , 
                data

            }
        )
        }
    catch(err){
        next(err)

    }
}

const getTheaterById =async(req,res,next)=>{
    const id = req.params.id
    try{
        const data = await Theater.findById({id}) ; 
        if (!data)
        {
            throw new ErrorHandler(404 ,`No Theater with following ${id} is found in the database !`)
        }
        res.status(200).json({
            success: true , 
            data , 
        })

    }
    catch(err)
    {
        next(err)
    }

}

const editTheater = async(req,res,next)=>{
    const id = req.params.id  ; 
    const body = req.body
    
    try{
        const TheaterExist = await Theater.findById(id) ; 
        if (!TheaterExist)
        {
            throw new ErrorHandler(404, `There is no Theater with the following ${id} in the database`) ;  
        }
       
        const data = await Theater.findByIdAndUpdate(id,{$set: body },{new : true} , {runValidators : true }).exec()  ; 
        res.status(200).json({
            success: true , 
            message : `Theater with id : ${id} has been successfully edited ` ,
            data 
        }) 

    }
    catch(err)
    {
        next(err) ; 
    }
}

const deleteTheater = async(req,res,next)=>{
    const id = req.params.id 

    try {
        const TheaterExist = await Theater.findById(id) ; 
        if (!TheaterExist)
        {
            throw new ErrorHandler('404',`No Theater with this id ${id} exists in the database !`) ; 
        }
        const data = await Theater.findByIdAndDelete(id).exec() ; 
        res.status(200).json({
            success: true , 
            message : `Theater with id: ${id} has been deleted successfully !`  , 
            data , 
        })
    }
    catch(err)
    {
        next (err)
    }
}


const resetPassword = async (req, res, next) => {
    const id = req.params.id;
    const pwd = req.body.password;
  
    try {
      TheaterExist = await Theater.findById(id).exec();
      if (!TheaterExist)
        throw new ErrorHandler(
          404,
          `No Theater with id : '${id}' is found in the database`
        );
      if (pwd.length <= 6)
        throw new ErrorHandler(404, `password too short, minimum length : 6`);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(pwd, salt);
      await Theater.findOneAndUpdate(
        { _id: id },
        { $set: { password: hashedPassword } },
        { runValidators: true }
      )
        .select("password")
        .exec();
  
      res.status(200).json({
        succces: true,
        message: "Password reset successfully",
      });
    } catch (error) {
      next(error);
    }
  };

module.exports = {
    getAllTheaters, getTheaterById, deleteTheater,editTheater, resetPassword
}


