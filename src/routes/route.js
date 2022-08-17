const express = require('express');
const router = express.Router();

const bookController = require("../controllers/bookController")
const authorController = require("../controllers/authorController")

router.post("/createBook", bookController.createBook)
router.post("/createAuthor", authorController.createAuthor)
router.get("/bookByChetanBhagat", bookController.bookByChetanBhagat)
router.get("/twoStatesAuthor", bookController.twoStatesAuthor)
router.get("/bookInRange", bookController.bookInRange)


module.exports = router;