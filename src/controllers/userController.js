const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
  let data = req.body;
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
  }
  catch(error){
    res.status(400).send({"Error 400":error.message})
  }
};

const loginUser = async function (req, res) {
  try{
  let email = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: email, password: password });
  if (!user) return res.status(401).send({status: false, msg: "Invalid email or password",});
  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      month: "August",
      website: "Fackebook",
    },
    "baat chali hai to door tak jayegi"
  );
  res.send(200).send({ status: true, token: token });
  }
  catch(error){
    res.status(500).send({"Error 500":error.message})
  }
};

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if(!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });
  res.send({ status: true, data: userDetails });
  }
  catch(error){
    res.status(500).send({"Error 500":error.message})
  }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(!user) return res.status(404).send({"Error 404":"User not found to update"});

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.status(201).send({ status: "updatedUser", data: updatedUser });
  }
  catch(error){
    res.status(500).send({"Error 500":error.message})
  }
};


const delUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(!user) return res.status(404).send({"Error 404":"User not found"});

  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set: {isDeleted: true}},{new:true});
  res.status(202).send({ status:true, data: deletedUser });
  }
  catch(error){
    res.status(500).send({"Error 500":error.message})
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.delUser = delUser;
