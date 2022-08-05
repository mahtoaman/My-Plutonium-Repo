const express = require('express');
const abc = require('../introduction/intro')

const wel = require('../logger/logger')
const helper = require('../util/helper')
const validator = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()

    wel.welcome()
    helper.printDate()
    helper.printMonth()
    helper.getBatchInfo()
    validator.trimStr()
    validator.upCase()
    validator.lwCase()

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason