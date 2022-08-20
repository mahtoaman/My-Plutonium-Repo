const authorModel= require("../models/authorModel")

const createAuthor = async function (req, res) {
    let author = req.body
    let createAuthor = await authorModel.create(author)
    res.send({data: createAuthor})
}

const getAuthorsData= async function (req, res) {
    let authors = await authorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData