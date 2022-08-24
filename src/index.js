const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const moment = require('moment')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


// let getIP = require('ipware')().get_ip;
let requestIp = require('request-ip');
app.use (
    function (req, res, next) {
        let today = moment().format('YYYY-MM-DD h:mm:ss');
        let ip = requestIp.getClientIp(req)
        // let ip = req.ip
        console.log(` ${today}, ${ip}, ${req.path}`)
        next();
  }
  );

  




//   var requestIp = require('request-ip');

//   // inside middleware handler
//   var ipMiddleware = function(req, res, next) {
//       var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
//       next();
//   };











app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
