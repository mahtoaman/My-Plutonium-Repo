
const validationCheck = function ( req, res, next) {
    let isFreeAppUser = req.headers["isfreeappuser"]
    if(isFreeAppUser){
        console.log("isFreeAppUser key exist in the header")
        next()
    }
    else{
    res.send({"msg":"hi there. isFreeAppUser key in header is required"})
    }
}

const updatedMid = function ( req, res, next) {

    let isFreeUser = req.headers.isfreeappuser
    if(isFreeUser){

        req.body.isFreeAppUser = Booleqan(isFreeUser)

        // if(isFreeUser === 'true') 
        // req.body.isFreeAppUser = true       
        // if(isFreeUser === 'false')        
        // req.body.isFreeAppUser = false       
        next()                   
    }
    else{
        return res.send({Msg:"hi there. isFreeAppUser key in header is required"})

    }
}

module.exports.validationCheck = validationCheck 
module.exports.updatedMid= updatedMid