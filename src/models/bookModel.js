//Create a books collection in your DB ( using bookModel with following fields)- name( mandatory field), price containing 
//Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    name: {
        type:String,
        required:true
    },
    
    author_id : Number,
    price:Number,
    ratings:Number

}, { timestamps: true });

module.exports = mongoose.model('new_book',bookSchema)
