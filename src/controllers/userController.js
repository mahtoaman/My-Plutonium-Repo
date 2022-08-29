const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let email = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: email, password: password });
  if (!user) return res.send({status: false, msg: "Invalid email or password",});
  

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      month: "August",
      website: "Fackebook",
    },
    "baat chali hai to door tak jayegi"
  );
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if(!userDetails)
    return res.send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(!user) return res.send({"Error 404":"User not found"});

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: "updatedUser", data: updatedUser });
};


const delUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(!user) return res.send({"Error 404":"User not found"});

  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set: {isDeleted: true}},{new:true});
  res.send({ status:true, data: deletedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.delUser = delUser;
