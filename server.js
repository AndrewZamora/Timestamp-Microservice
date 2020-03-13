// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/:date_string?", (req,res)=>{
  let result;
  if(req.params.date_string) {
    const dateArray =  req.params.date_string.includes('-') ? req.params.date_string.split('-').map((string, index) => index === 1 ? (parseInt(string)-1) : parseInt(string)) :;
    // if(dateArray.length !== 3 && typeof dateArray === "number"){
    //   res.json({"error" : "Invalid Date" })
    //   return
    // } 
    result = new Date(...dateArray);
  } else {
    result = new Date();
  }
  const unix = result.getTime();
  const utc = result.toUTCString();
  res.json({ unix, utc})
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});