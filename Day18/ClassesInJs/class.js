module.exports = class Vehicle {
  constructor(wheelsCount, id, noOfSeats) {
    this.wheelsCount = wheelsCount;
    this.id = id;
    this.noOfSeats = noOfSeats;
    this.color = "White";
    this.mirrors = 2;
  }
  paint = (color) => {
    this.color = color;
  };
  increaseSeats = (additionalSeatsCount) => {
    this.noOfSeats = this.noOfSeats + additionalSeatsCount;
  };
};
