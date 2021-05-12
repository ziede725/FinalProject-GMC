const router = require('express').Router() ; 
const {loginUser} = require('../utils/auth') ; 


router.post('/',loginUser)  ; 



module.exports= router ; 
