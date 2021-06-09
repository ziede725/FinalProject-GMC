const router = require('express').Router() ; 
const {loginUser,getUser} = require('../utils/auth') ; 


router.post('/',loginUser)  ; 
router.get('/:id',getUser) ; 



module.exports= router ; 
