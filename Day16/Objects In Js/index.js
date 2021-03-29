//Object
const bike = {
  wheels: 2,
  color: "red",
  number: "TS10-1234",
  owner: "Uma",
  setColour: function (newColor) {
    this.color = newColor;
  },
};
//Function
//Currying
const personWithName = (name) => {
  console.log();
  return function personWithId(id) {
    const person = {
      name: name,
      id: id,
    };
    return person;
  };
};
console.log(bike);
bike.setColour("blue");
console.log(bike);
bike.owner = "Badri";
console.log(bike);
const personUma = personWithName("Uma");
console.log(personUma(1));
console.log(personUma(2));
console.log(personUma(3));

const bikeJsonString = JSON.stringify(bike);
console.log("Bike Json Object: ", bikeJsonString);
const bikeJsonStringToObject = JSON.parse(bikeJsonString);
console.log(bike == bikeJsonStringToObject);
console.log("Bike Object created from Json String: ", bikeJsonStringToObject);
console.log(typeof bikeJsonStringToObject);
