function BikeList() {
  this.bikeArr = [];
};

BikeList.prototype.getBikes = function() {
  $.get('https://bikeindex.org/api/v3/search?locations=' + manufacturer)
  .then(function(response) {
    bikeReturn = response.bikes;
    for (i = 0; i < bikeReturn.length; i++) {
      this.bikeArr.push(bikeReturn[i]);
    }
  });
};

BikeList.prototype.displayBikes = function() {
  for (i = 0; i < this.BikeArr.length; i++) {
    var newBike = this.BikeArr[i];
    var bikeTitle = newBike.title;

  }
};





exports.bikeModule = Bike;
