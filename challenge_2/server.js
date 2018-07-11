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
  var input = req.body;
  console.log(input);
  console.log(req.body);
  //function to create a csv 
  const csv = (obj) => {
    //initialize an array with the keys of the data
    let arr = Object.keys(obj);
    //remove the children element from the array
    let arr1 = arr.pop();
    //make the keys into a string
    let str = arr.join();

    //recursive function to handle all the key values
    const recurse = (obj, arrInner = []) => {
      //add all the key values     
      for (let key in obj) {
        //if the value is not an array, then add the value to str1      
        if (!Array.isArray(obj[key])) {
          arrInner.push(obj[key]);
          //if all the values have been added except for the last, then 
          //join the inner array and add it to str
          if (arrInner.length === arr.length) {
            strInner = arrInner.join();
            str += '\n' + strInner;
          }

        } else {
          for (let i = 0; i < obj[key].length; i++) {
            recurse(obj[key][i], arrayInner = []);
          }
        }

      }
    }
    recurse(obj);
    return str;
  }
 
  res.send(JSON.stringify(input));
})

app.listen(3000);



  // var test = res.csv(input); 
  // console.log(test);
  // var test = res.csv(
  //   [{ field: 'v1', field2: 'v2' }, { field: 'v3', field2: 'v4' }],
  //   { fields: ['field', 'field2'] }
  // ); 