const express = require('express');
const router = express.Router();

const bookController = require("../controllers/bookController")
const authorController = require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")

router.post("/createBook", bookController.createBook)
router.post("/createAuthor", authorController.createAuthor)
router.post("/createPublisher", publisherController.createPublisher)
router.post("/getAuthorsData", authorController.getAuthorsData)
router.get("/getBookWithAuthor", bookController.getBookWithAuthor)
router.put("/updatePrice", bookController.updatePrice)
router.put("/upsertAttribute", bookController.upsertAttribute)

module.exports = router;