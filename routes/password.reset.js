const express= require('express') ; 
const router = express.Router() ;
const {ChangePassword} = require('../utils/auth') 

router.post('/:token',ChangePassword) ; 
module.exports= router ; 