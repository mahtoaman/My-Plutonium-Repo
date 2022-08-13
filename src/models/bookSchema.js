//Create a bookSchema with bookName, authorName, category and year . 
//Create same 2 api's for books i.e. : 1 api to create a new book and 
//another api to get the list of all books.


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    bookName: {
        type : String,
        required : true    
    },

    authorName:{

        type :  String,
        required : true
    },

    category : String,

    year: String
    
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema)
