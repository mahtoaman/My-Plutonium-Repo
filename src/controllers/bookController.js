const { get } = require("underscore");
const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

/*3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
a.In this api, you have to write a logic that validates the following :
b.The auhtor is present in the request body. If absent send an error message that this detail is required
c.If present, make sure the auhtor_id is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
d.The publisher_id is present in the request body. If absent send an error message that this detail is required
If present, make sure the publisher_id is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
*/
const createBook = async function (req, res) {
  let book = req.body;
  let auhtor_id = book.author;
  let publisher_id = book.publisher;
  let authorId = await authorModel.findById(auhtor_id); //from authorModel
  let publisherId = await publisherModel.findById(publisher_id); //from publisherModel

  if (!auhtor_id) {
    return res.send({ msg: "author id is required" });
  } else if (!authorId) {
    return res.send({ msg: "Invalid author id" });
  } else if (!publisher_id) {
    return res.send({ msg: "publisher id is required" });
  } else if (!publisherId) {
    return res.send({ msg: "Invalid publisher_id" });
  }

  let bookCreated = await bookModel.create(book);
  res.send({ data: bookCreated });
};

// 4. Write a GET api that fetches all the books along with their author details
//(you have to populate for this) as well the publisher details (you have to populate for this)

  const getBookWithAuthor = async function (req, res) {
    let bookwithAuthor = await bookModel
      .find()
      .populate("author")
      .populate("publisher");
    res.send({ data: bookwithAuthor });
  };

/*5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). 
Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. 
Create a new PUT api /books and perform the following two operations
 a) Add a new boolean attribute in the book schema called isHardCover with a default false value. 
 For the books published by 'Penguin' and 'HarperCollins', update this key to true. 
Create around 10 books with these publishers and authors.
*/

let upsertAttribute = async function (req, res) {
  let data = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id:1});
  console.log(data[0]._id);
  let book = await bookModel.findOne({ publisher: data[0]._id });
  console.log(book);
  // let data2 = await publisherModel.find({ name: 'HarperCollins' }).select({_id : true})
  let update;
  for (let i = 0; i < data.length; i++) {
    update = await bookModel.updateMany(
      { publisher: data[i]._id },
      { $set: { ishardcover: true } },
      { upsert: true }
    );
  }
  res.send(update);
};

/*
 b) For the books written by authors having a rating greater than 3.5, 
 update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 
*/

const updatePrice = async function (req, res) {
  let getAuthors = await authorModel.find({ rating: { $gt: 3.5 } });
  let authorIdList = getAuthors.map((x) => x._id);

  let updateBookPrice = await bookModel.updateMany(
    { author: authorIdList},
    { $inc: { price: 10 } },
    { new: true }
  );
  res.send({ data: updateBookPrice });
};

module.exports.createBook = createBook;
module.exports.getBookWithAuthor = getBookWithAuthor;
module.exports.updatePrice = updatePrice;
module.exports.upsertAttribute = upsertAttribute;
