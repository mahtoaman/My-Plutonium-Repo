
const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

//If author_id is not available then do not accept the entry
//(in neither the author collection nor the books collection)

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg: savedData})
}
//List out the books written by "Chetan Bhagat" 
//( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const bookByChetanBhagat = async function (req, res) {
    let authorId = await authorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0}) //{author_id:1}
    let bookByChetanBhagat = await bookModel.find(authorId)
    res.send({msg: bookByChetanBhagat})
}
//find the author of “Two states” and update the book price to 100;  
//Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const twoStatesAuthor = async function (req, res) {
      let updatePrice = await bookModel.findOneAndUpdate(
        {name:"Two states"},
        {$set :{price:100}},
        {new:true}
      )
      let authorName = await authorModel.findOne({author_id:updatePrice.author_id}) //.select({author_name:1})
      res.send( {authorName:authorName.author_name,newPrice:updatePrice.price})
}


//Find the books which costs between 50-100(50,100 inclusive) 
//and respond back with the author names of respective books.

const bookInRange = async function (req, res) {
    let allBooks = await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0}) //[{author_id :1},1,1,1,2,2]
    let resultArr = []
    for(let i=0;i<allBooks.length;i++){
    // let getAuthorId = allBooks[i]
    let finalResult = await authorModel.find(allBooks[i]).select({author_name:1,_id:0});
    resultArr.push(finalResult)
}
res.send( { msg:resultArr})  
}

module.exports.createBook = createBook
module.exports.bookByChetanBhagat = bookByChetanBhagat
module.exports.twoStatesAuthor = twoStatesAuthor
module.exports.bookInRange = bookInRange
