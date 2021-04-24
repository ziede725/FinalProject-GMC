const router = require('express').Router() ; 

const {
    registerTheater,
    loginTheater, 
    forgotPasswordTheater, 
}= require("../utils/auth") ; 


const theaterController = require ('../controllers/theaterController') ; 
const Theater = require('../models/Theater');
const { protectAdmin } = require('../middlewares/checkAuth');

//Authentication routes for Theater 
// 
//private 
router.post('/register' , registerTheater) ; 
router.post("/login", loginTheater) ; 
router.post("/forgot-password", forgotPasswordTheater) ; 

//Gets all Theaters 
router.get('/',theaterController.getAllTheaters) ; 
router.get('/:id', theaterController.getTheaterById) ; 
router.patch('/:id/edit',theaterController.editTheater) ; 

