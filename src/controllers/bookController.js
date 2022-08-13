

const bookDetails= require("../models/bookSchema")


const addBook = async function (req, res) {
    let data = req.body
    let savedData = await bookDetails.create(data)
    res.send({msg: savedData})
}

const getBookData = async function (req, res) {
    let allBooks = await bookDetails.find()
    res.send({msg: allBooks})
}

module.exports.addBook= addBook
module.exports.getBookData= getBookData