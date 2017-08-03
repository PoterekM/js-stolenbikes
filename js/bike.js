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
