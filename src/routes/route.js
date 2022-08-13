const express = require('express');
const router = express.Router();

const bookController= require("../controllers/bookController")

router.post("/addBook", bookController.addBook  )

router.get("/getBookData", bookController.getBookData)

module.exports = router;