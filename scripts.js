//take the input on click, add it to the calculation variable, and add that as html to the screen

//TODO write a function to replace the many functions for clicking each number...

var calculation = " ";
var placeVal = " ";

$("#zero").click(function() {
  if ($.isNumeric(placeVal) === true) {
    calculation += '0';
    placeVal = 0;
    $("#screen").html(calculation);
  }
});

$("#one").click(function() {
  calculation += '1';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#two").click(function() {
  calculation += '2';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#three").click(function() {
  calculation += '3';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#four").click(function() {
  calculation += '4';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#five").click(function() {
  calculation += '5';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#six").click(function() {
  calculation += '6';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#seven").click(function() {
  calculation += '7';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#eight").click(function() {
  calculation += '8';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#nine").click(function() {
  calculation += '9';
  placeVal = 0;
  $("#screen").html(calculation);
});

$("#decimal").click(function() {
  if ($.isNumeric(placeVal) === true) {
    calculation += '.';
    placeVal = 0;
    $("#screen").html(calculation);
  }
});

$("#add").click(function() {
  if ($.isNumeric(placeVal) === true) {
    calculation += '+';
    placeVal = ' ';
    $("#screen").html(calculation);
  }
});

$("#subtract").click(function() {
  if ($.isNumeric(placeVal) === true) {
    calculation += '-';
    placeVal = ' ';
    $("#screen").html(calculation);
  }
});

$("#multiply").click(function() {
  if ($.isNumeric(placeVal) === true) {
    calculation += '*';
    placeVal = ' ';
    $("#screen").html(calculation);
  }
});

$("#divide").click(function() {
  if ($.isNumeric(placeVal) === true) {
    calculation += '/';
    placeVal = ' ';
    $("#screen").html(calculation);
  }
});

//FIX THIS UP!
$("#percent").click(function() {
  if ($.isNumeric(placeVal) === true) {
    calculation += '/100';
    $("#screen").html(calculation);
    var answer = eval(calculation);
    $("#screen").html(answer);
    calculation = '';
    placeVal = 0;
  }
});

$("#clear").click(function() {
  $("#screen").html(" ");
  calculation = '';
});

$("#equals").click(function() {
  var answer = eval(calculation);
  $("#screen").html(answer);
  if ($.isNumeric(answer)) {
      calculation = answer;
      } else {
        calculation = '';
        placeVal = 0;
      }
});