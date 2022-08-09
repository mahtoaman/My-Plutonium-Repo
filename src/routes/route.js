const express = require("express");



   //1 -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing

const router = express.Router();router.get('/sol-1',function(req,res){
    let arr= [1,2,3,5,6,7]
 
    let total = 0;
   for(let i=0;i<arr.length;i++){
       total=total+arr[i];
       
   }
 const lastDigit=arr.pop()
 
 
 const consSum=lastDigit*(lastDigit+1)/2;
 const missingNumber=consSum-total;
  
    res.send(`Missing Number is: ${missingNumber}`);
  });


// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

router.get('/sol-2',function(req,res){
    let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (let i=0;i<len;i++) {
       total =total+ arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
    res.send(`Missing Number is: ${missingNumber}`);
  });


module.exports = router;





