var express = require('express');
var jsoncsv = require('express-json-csv')(express);
var app = express();
app.use(express.static('client'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());




//the below will console 'Hello World' to the browser if we did not have the app.use command above
// app.get('/', (req, res) => res.send('Hello World'));

// app.listen(3000, () => console.log("app listening on port 3000"));



// app.post('/', function () {
//   console.log('Hello');
  
// })

app.post('/abcd', function (req, res) { 
  // var input = req.body;
  // //function to create a csv 
  // var csv = (input) => {

  // };  
 
  res.send('hello');
})

app.listen(3000);



  // var test = res.csv(input); 
  // console.log(test);
  // var test = res.csv(
  //   [{ field: 'v1', field2: 'v2' }, { field: 'v3', field2: 'v4' }],
  //   { fields: ['field', 'field2'] }
  // ); 