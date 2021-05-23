const router = require("express").Router();


const sessionController = require("../controllers/sessionController");

router.get('/:id',sessionController.getSession)

router.post('/add',sessionController.addSession)

router.patch('/edit',sessionController.editSession)

router.delete('/delete',sessionController.deleteSession) ; 


module.exports = router ; 