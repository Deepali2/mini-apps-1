var obj = {
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
};





const csv = (obj) => {
  //initialize an array with the keys of the data
  let arr = Object.keys(obj); 
  //remove the children element from the array
  let arr1 = arr.pop();
  //make the keys into a string
  let str = arr.join();
  
  //recursive function to handle all the key values
  const recurse = (obj, arrInner=[]) => {   
    //add all the key values     
    for (let key in obj) {  
      //if the value is not an array, then add the value to str1      
      if (!Array.isArray(obj[key])) {        
        arrInner.push(obj[key]);              
        //if all the values have been added except for the last, then 
        //join the inner array and add it to str
        if (arrInner.length === arr.length ) {
          strInner = arrInner.join();
          str += '\n' + strInner;
        }        
            
      } else{
        for (let i = 0; i < obj[key].length; i++) {                 
          recurse(obj[key][i], arrayInner=[]);
        }        
      }
     
    }
  }
  recurse(obj);
  return str;
}
console.log(csv(obj));