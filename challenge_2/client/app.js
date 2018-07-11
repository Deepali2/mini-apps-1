
// var workWithData = function ('./sales_report.js', ) {
//   //read the data from the file sales_report.json
//   fs.readFile('./sales_report.js', (err, data) => {
//     if (err) {
//       console.log('There is an error: ', err);
//       return;
//     }
//     console.log(data);
//   });
// }


//post it to the server{
var testData = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
}

  
// $.post(, testData, success, application/json);

$("#submitClick").click(() => {
  
  $.ajax({
    type: "POST",
    url: 'http://localhost:3000/abcd',
    data: JSON.stringify(testData),
    success: (data) => {
      alert('Click happened');
      $('#output').val(data);
    },
    // dataType: dataType
  });
})



