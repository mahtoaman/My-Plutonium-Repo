const jwt = require("jsonwebtoken");

const validation = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "Token not found" });
  next();
};

const verification = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "baat chali hai to door tak jayegi");
  console.log(); 

  if (decodedToken.userId == req.params.userId) next();
  else res.send({ status: false, msg: "access denied" });
};

module.exports.validation = validation;
module.exports.verification = verification;
