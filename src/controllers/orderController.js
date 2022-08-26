const { count } = require("console")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data = req.body
    let newUserId = req.body["userId"]
    // console.log('newUserId',newUserId)
    let productId = req.body["productId"]

    let isFreeUser = req.headers["isfreeappuser"]
    // console.log("isFreeuser: ",isFreeUser)

    let uB = await userModel.findById(newUserId)
    let userBalance = uB["balance"]
    // console.log("user Balance: ",userBalance)

    let productP = await productModel.findById(productId)
    let productPrice = productP.price
    // console.log("product price",productPrice)

    let userId = await userModel.findById(newUserId)

        if(!newUserId){
           return res.send({"msg":"userId is required"})
        }
        else if(!productId){
            return res.send({"msg":"productId is required"})
        }
        else if(!userId){
            return res.send({"msg":"Invalid userId"})
        }
        else if(!productId){
            return res.send({"msg":"Invalid productId"})
        }
        
        else if(isFreeUser==="false"){
            if(userBalance >= productPrice){
                let usersNewBalance = userBalance - productPrice
                await userModel.findOneAndUpdate(
                    {_id : userId},
                    {$set : {balance : usersNewBalance}}
                );
                data['amount']=productPrice;
                data['isFreeAppUser']=false;
                let newData=await orderModel.create(data);
                res.send({OrderPlaced : newData});
            }
            else{
                return res.send({"msg":"Users balance is low, cannot make the order"})
            }
    }
    else if(isFreeUser==="true"){
        data['amount']=0;
        data['isFreeAppUser']=true;
        let newData=await orderModel.create(data);
        res.send({OrderPlaced : newData});

    }
}

module.exports.createOrder= createOrder
