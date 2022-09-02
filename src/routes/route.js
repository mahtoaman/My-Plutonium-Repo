const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")


router.get("/cowin/getByDistrictId", CowinController.getByDistrictId)
router.get("/getWeather/London", CowinController.getWeatherOfLondon) 
router.get("/get/Memes", CowinController.getListOfMemes) 
router.post("/create/Memes", CowinController.createMemes) 

// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)
// router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;