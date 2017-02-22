// console.log('This is the server < -- lie for now');
// log deleted when app.listen added
console.log('This is the server and console logs show up on the terminal');

var express = require('express');
var app = express(); // calling var express-calling function // creates an app with a function returning an object

app.use(express.static('server/public')); // runs everytime request is made to server and looks for static file requests.  "a request!  is it a static file? Yes!  Look in the server/public folder"

var fishList = [
  { name: 'walleye'},
  { name: 'pike'}
]

app.get('/fish', function(req, res) {
  console.log('logging app.js/req: ' + req);
  console.log('logging app.js/res: ' + res);
  res.send(fishList); // fed to response in client.js success: function(response)

  // see http://localhost:5000/fish

});

// handle the request for firstFish
app.get('/fish/first', function(req, res) {
res.send(fishList[0]);
});

// handle the request for last fishList
app.get('/fish/last', function(req, res) {
var lastIndex = fishList.length-1;
res.send(fishList[lastIndex]);
});

// handle the request for name of last fishList
app.get('/fish/last/name', function(req, res) {
var lastIndex = (fishList.length - 1);
res.send(fishList[lastIndex.name]);
});

// handle the request for firstFish name
app.get('/fish/first/name', function(req, res) {
res.send(fishList[0].name);
});

// handle the request for firstFish name
app.get('/fish/firstFishy', function(req, res) {
res.send(fishList[0]);
});


app.listen(5000);



console.log(app); // app is an object with func with object

// Example of what var express = require('express');
// var app = express(); is doing:
// var taco = function() {
//   return {name: 'Phil'}
// }
//   var lettuce = taco;
//   var cheese = lettuce();
//   console.log('Lettuce: ' + lettuce);
//   console.log('Cheese: ' + cheese);
