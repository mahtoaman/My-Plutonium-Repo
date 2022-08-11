const express = require("express");
const router = express.Router();

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  //LOGIC WILL COME HERE
  let newPlayerDetails = req.body;
  let newPlayerName = newPlayerDetails.name;

  for (let i = 0; i < players.length; i++) {
    if (newPlayerName === players[i].name) {
      return res.send("Player Already Exist");
    }
  }
  players.push(newPlayerDetails);
  res.send({ data: players, status: true });
});

//problem 2 -- voting status

let persons = [
  { name: "PK", age: 10, votingStatus: false },
  { name: "SK", age: 20, votingStatus: false },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  { name: "HO", age: 40, votingStatus: false },
];

router.post("/persons", function (req, res) {
  let personCanVote = [];
  let votingAge = req.query.inputAge;
  for (let i = 0; i < persons.length; i++) {
    let personAge = persons[i].age;
    if (personAge > votingAge) {
      persons[i].votingStatus  = true;
    }
  }
  personCanVote = persons.filter((person) => person.age > votingAge);
  res.send(personCanVote);
});

module.exports = router;
