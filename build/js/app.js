(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function BikeModule() {
};

BikeModule.prototype.getBikes = function(input, displayBikes) {
  $.get('https://bikeindex.org/api/v3/search?manufacturer=' + input)
  .then(function(response) {
    displayBikes(response.bikes);
  });
};

// BikeModule.prototype.displayBikes = function() {
//   for (i = 0; i < this.BikeArr.length; i++) {
//     var newBike = this.BikeArr[i];
//     var bikeTitle = newBike.title;
//
//   }
// };

exports.bikeModule = BikeModule;

},{}],2:[function(require,module,exports){

var BikeModule = require('./../js/bike.js').bikeModule;

var displayBikes = function(results) {
  results.forEach(function(result) {
    $('#result').append('<li>' + result.title + '</li> <ul> <li>' + result.frame_colors + '</li> <li>' + result.stolen_location + '</li> </ul>')
  });
};

$(document).ready(function() {
  var bikeModule = new BikeModule();

  $('#bike-search').submit(function(event) {
    event.preventDefault();
    var manufacturer = $('#manufacturer').val();
    bikeModule.getBikes(manufacturer, displayBikes);
  });
});

},{"./../js/bike.js":1}]},{},[2]);
