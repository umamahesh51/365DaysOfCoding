const backPack = {
  pen: "Renolds",
  book: "Maths Book",
  box: {
    width: 10,
    heigt: 10,
    color: "Green",
  },
  updateBoxDimensions: function (width, height) {
    this.box.width = width;
    this.box.height = height;
  },
  updateBoxColor: function (color) {
    this.box.color = color;
  },
  changeObject: function (callback) {
    // Accepting a function which can change the object.
    callback(this);
  },
  color: "black",
  width: 40,
  height: 60,
  changeColor: function (color) {
    this.color = color;
  },
};
console.log(backPack.pen); // Using .
console.log(backPack["pen"]); // Using []
//console.log(backPack.pencil--1); // Error
console.log(backPack["pencil--1"]); // No Error
var query = "color";
console.log(backPack[query]); // It works and we can dynamically chnage the value. We can't do it with .
//So when you want to get Values for different parameters so dynamically using one method to access all the properties.
// If you are using variables and functions directly then use .

console.log("Before changing Color: ", backPack.color);
backPack.changeColor("Red");
console.log("After changing Color: ", backPack.color);

console.log("Before changing Box Color: ", backPack.box.color);
backPack.updateBoxColor("Red");
console.log("After changing Box Color: ", backPack.box.color);

function updateObjectBackPack(objectBackPack) {
  objectBackPack.color = "white";
  objectBackPack.book = "English";
  objectBackPack.height = 100;
  objectBackPack.width = 60;
}
backPack.changeObject(updateObjectBackPack);
console.log(backPack);
