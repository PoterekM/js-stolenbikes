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
