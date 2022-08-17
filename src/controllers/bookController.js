
const bookDetails = require("../models/bookModel")

// to create a new entry..use this api to create 11+ entries in your collection
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookDetails.create(data)
    res.send({msg: savedData})
}

// gives all the books- their bookName and authorName only 
const bookList = async function (req, res) {
    let bookList = await bookDetails.find().select({bookName:1,authorName:1,_id:0})
    // let bookList = await bookDetails.find().count()
    res.send({msg: bookList})
}


//takes year as year in post request and gives list of all books published that year
const getBooksInYear = async function (req, res) {
    let year = req.body.year
    let getBookByYear = await bookDetails.find({year:{$eq:year}})
    res.send({msg: getBookByYear})
}

// (this is a good one, make sincere effort to solve this) take any year and use it as a condition to fetch books that satisfy that condition
// e.g if body had { bookName: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books in this year
// hence the condition will differ based on what you year in the request body

const getParticularBooks = async function (req, res) {

    let input = req.body
    // console.log(input)
    //let allBooks = await bookDetails.find({bookName:"Half Girlfriend"})
    let getParticularBooks = await bookDetails.find(input) 
    res.send({msg: getParticularBooks})
}

//request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getXNIRBooks = async function (req, res) {
    // let XNIRBooks = await bookDetails.find({$or:[{"prices.indianPrice":"₹100"},{"prices.indianPrice":"₹100"},{"prices.indianPrice":"₹100"}]})
    let XNIRBooks = await bookDetails.find({"prices.indianPrice":{$in:["₹100","₹200","₹500"]}})
    res.send({msg: XNIRBooks})
}


//returns books that are available in stock or have more than 500 pages 
const getRandomBooks = async function (req, res) {
    let randomBooks = await bookDetails.find({$or:[{stockAvailable : true}, {totalPages:{$gt:500}}]})
    res.send({msg: randomBooks})
}



module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXNIRBooks = getXNIRBooks
module.exports.getRandomBooks = getRandomBooks