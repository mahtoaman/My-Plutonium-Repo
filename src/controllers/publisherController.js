const publisherModel = require("../models/publisherModel")

    const createPublisher= async function (req, res) {
        let publisher = req.body
        let publisherCreate = await publisherModel.create(publisher)
        res.send({data: publisherCreate})
    }
    
module.exports.createPublisher= createPublisher