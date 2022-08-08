const express = require("express");
const router = express.Router();

// 1. Create an API for GET /movies that returns a list of movies. Define an array of
// movies in your code and return the value in response.

router.get("/movies", function (req, res) {
  let movies = [
    "Iron Man 3",
    "Thor Ragnarok",
    "The Incredible Hulk",
    "The lord of the rings",
  ];
  res.send(movies);
});

// 2. Create an API GET /movies/:indexNumber (For example GET /movies/1 is a
// valid request and it should return the movie in your array at index 1). You can define an
// array of movies again in your api
// [‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’

// 3. Handle a scenario in problem 2 where if the index is greater than the valid
// maximum value a message is returned that tells the user to use a valid index in an error
// message.

router.get("/movies/:indexNumber", function (req, res) {
  let movies = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];

  let requestParams = req.params;
  let movieIndex = parseInt(requestParams.indexNumber);

  if (movieIndex >= 0 && movieIndex < movies.length) {
    const result = movies[movieIndex]; //araray[0]
    res.send(result);
  }
  //solution for problem 3 handling the error
  else {
    res.send("Enter a valid number.");
  }
});

// 4 Write another api called GET /films. Instead of an array of strings define an array
// of movie objects this time. Each movie object should have values - id, name. An
// example of movies array is
// [ {
// “id”: 1,
// “name”: “The Shining”
// }, {
// “id”: 2,
// “name”: “Incendies”
// }, {
// “id”: 3,
// “name”: “Rang de Basanti”
// }, {
// “id”: 4,
// “name”: “Finding Nemo”
// }]
// Return the entire array in this api’s response

router.get("/films", function (req, res) {
  let films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  res.send(films);
});

//5. Write api GET /films/:filmId where filmId is the value received in request path
// params. Use this value to return a movie object with this id. In case there is no such
// movie present in the array, return a suitable message in the response body. Example
// for a request GET /films/3 should return the movie object
// {
//     “id”: 3,
//     “name”: “Rang de Basanti”
//     }
//     Similarly for a request GET /films/9 the response can be something like - ‘No
//     movie exists with this id

router.get("/films/:filmId", function (req, res) {
  let films = [
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ];

  let requestParams = req.params;
  const filmid = parseInt(requestParams.filmId);
  const fimlLength = films.length;

  let result = "";
  for (let i = 0; i < fimlLength; i++) {
    if (filmid === films[i].id) {
      result = films[i];
      break;
    } else {
      result = "No movie exists with this id";
    }
  }
  res.send(result);
});

module.exports = router;
