var express = require('express');
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
  var input = req.body;
  console.log(input);
  var csv = (input) => {

  }  
  res.send('Hello');
})

app.listen(3000);