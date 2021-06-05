var myArray = ["a", "b", "c", "d", "e"];
console.log(myArray);

class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  getFullName = () => this.name + " " + this.id;
}

var uma = new Person("Uma", 1);
var pavan = new Person("Pavan", 2);
var myPersonArray = [uma, pavan];

/* Slice */
// Returns a new Array containing elements from start to end Index (End index is exclusive)
console.log("Before Slicing: ", myArray);
console.log(myArray.slice(0, 2)); // To remove Elements starting from an index to specified number
console.log("After Slicing: ", myArray); // Now the Array don't have elements from 0, 1 indexes

/* Push */
myArray.push("a");
myArray.push("b"); // pushed at the end
console.log(myArray);

/* Sort */
myArray.sort(); // Simple way to sort ascending order
console.log(myArray);
//Straight Forward way to Sort reverse
myArray.sort().reverse(); // O(N LOG (N)) + O(N) for reversing an Array
console.log(myArray);
myArray.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)); // Sort in reverse Order.
console.log(myArray);
myArray.sort();
console.log(myArray);
myArray.sort((a, b) => b.localeCompare(a)); // Works for Special characters with addition parameters https://stackoverflow.com/questions/52030110/sorting-strings-in-descending-order-in-javascript-most-efficiently
console.log(myArray);
myArray.sort();

/* map */
var myNewArray = myArray.map((a) => a.charCodeAt(0)); // String to ascii
console.log(myNewArray);
var myNewUpperCaseArray = myArray.map((a) => a.toUpperCase());
console.log(myNewUpperCaseArray);
console.log(myPersonArray);
console.log(myPersonArray.map((obj) => obj.name));
console.log(myPersonArray.map((obj) => obj.id));
console.log(myPersonArray.map((obj) => obj.getFullName()));

/* filter - Filters the elements in the array with given condition and returns*/
var myFilteredArray = myPersonArray.filter((person) => person.id > 1);
console.log(myFilteredArray);

var myNameFilteredArray = myPersonArray.filter((person) =>
  person.name.startsWith("U")
);
console.log(myNameFilteredArray);

/* find Finds an element matching the condition, returns if found else returns undefined*/
console.log(myArray.find((a) => a.charCodeAt(0) > 100));
console.log(
  myPersonArray.find((a) => a.name.endsWith("a") || a.name.startsWith("P"))
);

console.log(
  myPersonArray.find((a) => a.name.endsWith("a") && a.name.startsWith("P"))
);
console.log(myPersonArray.find((a) => a.name.startsWith("P")));

/* Find Index - Same as Find but returns index. If not found returns -1*/
console.log(myArray.findIndex((a) => a.charCodeAt(0) > 100));
console.log(
  myPersonArray.findIndex((a) => a.name.endsWith("a") || a.name.startsWith("P"))
);
console.log("Index Of: ", myArray.indexOf("b"));

console.log(
  myPersonArray.findIndex((a) => a.name.endsWith("a") && a.name.startsWith("P"))
);
console.log(myPersonArray.findIndex((a) => a.name.startsWith("P")));

/* reduce */
console.log(myArray.reduce((a, b) => a + b));
console.log(myPersonArray.reduce((a, b) => a.name + b.name));
console.log(myArray.map((a) => a.charCodeAt()).reduce((a, b) => a + b, 0));
