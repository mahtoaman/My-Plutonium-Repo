const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")



// router.post("/createUser",commonMW.updatedMid, userController.createUser)
router.post("/createUser",commonMW.validationCheck, userController.createUser)
router.post("/createOrder",commonMW.validationCheck, orderController.createOrder)
router.post("/createProduct", productController.createProduct)

module.exports = router;