const express = require('express');
const { result } = require('lodash');
const lodash = require('lodash');
// const underScore = require('underscore')

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

    // let weekend = ['Saturday', 'Sunday']
    // let result = underScore.first(weekend)
    // console.log('Underscore example is', result)

    //EXTERNAL-MODULE ASSIGNMENT PROBLEM 4

    let array = ['Januray','February','March','April','May','June','July','August','September','October','November','December']
    const result1 = lodash.chunk(array,4)
    console.log(result1)

    let array2 = [1,3,5,7,9,11,13,15,17,19]
    const resutl2 = lodash.tail(array2)
    console.log(resutl2)

    //Third problem

    let arr1 = [1,2,2]
    let arr2 = [2,3,3]
    let arr3 = [3,4,4]
    let arr4 = [4,5,5]
    let arr5 = [5,6,6]
    const UnionResult = lodash.union(arr1,arr2,arr3,arr4,arr5)
    console.log(UnionResult)

    const pArr1 = [['Fruit','Apple'],
     ['Vegi','Potato'],
    ['Tree','BanyanbTree'],
     ['Plant','Pea Plant']]

    const pairResult = lodash.fromPairs(pArr1)
    console.log(pairResult)

    

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason