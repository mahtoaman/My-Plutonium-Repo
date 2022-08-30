const jwt = require("jsonwebtoken");

const validation = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(404).send({ status: false, msg: "Token not found" });
    next();
  } 
  catch (error) {
    res.status(400).send({ "Eror 400": error.message });
  }
};

const verification = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "baat chali hai to door tak jayegi");
    // console.log();

    if (decodedToken.userId == req.params.userId) next();
    else res.status(403).send({ status: false, msg: "access denied" });
  } 
  catch (error) {
    res.status(400).send({ "Eror 400": error.message });
  }
};

module.exports.validation = validation;
module.exports.verification = verification;
