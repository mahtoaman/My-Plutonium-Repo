let axios = require("axios");


//1st question
let getByDistrictId = async function (req, res) {
  try {
    let districtId = req.query.district_id;
    let date = req.query.date;

    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`,
    };
    let result = await axios(options);
    // console.log(result);
    res.status(200).send({ msg: result.data });
  } 
  catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// let getWeatherOfLondon = async function (req, res) {
//   try {
//     let options = {
//       method: "get",
//       url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=c9e38bc5ae596f6cfd0db6cf3d0a94da`,
//     };
//     let result = await axios(options);
//     // console.log(result);
//     let data = result.data;
//     data = data.main['temp'];   //1st update
//     res.status(200).send({ temp: data});
//     // res.status(200).send({ msg: data, status: true });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ msg: err.message });
//   }
// };


//2 nd question sorting the cities in order of increment in temprature

let getWeatherOfLondon = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let cityArray = [];

    for (let i of cities) {
      let obj = { city: i };

      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=ad93a5db69ff751f13d344e3950fbd0f`,
      };
      let resp = await axios(options);

      obj.temp = resp.data.main.temp;
      //{city:bemgulur, temp:520}
      cityArray.push(obj);
    }
    let sortedResult = cityArray.sort(function (a, b) {
      return a.temp - b.temp;
    });
    res.status(200).send({ data: sortedResult });
  } 
  catch (err) {
    // console.log(err.message);
    res.status(500).send({ msg: err.message });
  }
};

//4rd question
let getListOfMemes = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: `https://api.imgflip.com/get_memes`,
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send(data);
  }
   catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

let createMemes = async function (req, res) {
  try {
    let template_id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;

    let options = {
      method: "post ",
      url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
    };
    let result = await axios(options);
    let data = result.data;
    res.status(200).send({ data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getByDistrictId = getByDistrictId;
module.exports.getWeatherOfLondon = getWeatherOfLondon;
module.exports.getListOfMemes = getListOfMemes;
module.exports.createMemes = createMemes;
