$(document).ready(function(){
console.log('jQuery Sourced');

console.log('javascript sourced');
$.ajax({
  type: 'GET',
  url: '/fish',
  success:  function(response) { // response array from res.send in app.js
    console.log('response', response);
    console.log('This function runs on successful GET return from server app.js');
    for (var i = 0; i < response.length; i++) {
    $('#fishTank').append('<li>' + response[i].name + '</li>');
    }
  }
})

$.ajax({
  type: 'GET',
  url: '/fish/firstFishy',
  success:  function(response) { // response array from res.send in app.js
    $('#firstFishy').text(response.name);
    }
});



});
