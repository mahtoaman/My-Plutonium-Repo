const authorModel= require("../models/authorModel")

const createAuthor = async function (req, res) {
    let author = req.body
    let createAuthor = await authorModel.create(author)
    res.send({data: createAuthor})
}
module.exports.createAuthor= createAuthor