const mongoose = require('mongoose');

const publisherModel = new mongoose.Schema( {
    
    name: String,
    headQuarter: String

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherModel) 
