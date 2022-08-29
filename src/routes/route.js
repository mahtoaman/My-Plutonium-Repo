const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require("../middlewares/auth")


router.post("/createUser", userController.createUser)
router.post("/loginUser", userController.loginUser)
router.get("/getUserData/user/:userId",mid.validation,mid.verification, userController.getUserData)
router.put("/updateUser/user/:userId",mid.validation,mid.verification,  userController.updateUser)
router.delete("/delUser/user/:userId",mid.validation,mid.verification, userController.delUser)

module.exports = router;