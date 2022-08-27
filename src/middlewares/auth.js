const jwt = require("jsonwebtoken");

const validation = function(req, res, next){
    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send({ status: false, msg: "Token not found" })
    }
    else{ 
        let decodedToken = jwt.verify(token, "This is a secret information");
        let verUser = decodedToken.userId
        let uId = req.params.userId

        if(verUser == uId) next()
        
        else return res.send({ status: false, msg: "Token is invalid" });
        
    }
   
}

module.exports.validation = validation