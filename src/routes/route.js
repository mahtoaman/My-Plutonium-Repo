const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/another-api", function(req,res){
    res.send("testing 2nd API")
})
router.get("/test-api", function(req,res){
    res.send("another api for test")
})
router.get("/third-api", function(req,res){
    res.send("this is my 3rd API")
})

router.get("/basicCode",userController.basicCode)

module.exports = router;