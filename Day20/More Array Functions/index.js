var myArray = ["Jan", "Feb", "April", "May"];

// Splice  --> Takes 3 arguments
// 1. Index
// no of elements from above index to be removed. If 0 is given then new element is inserted in the givrn index.
// Element to be inserted or replaced.

/* Adds March at the index 2 */
myArray.splice(2, 0, "March");
console.log(myArray);

/* Removes values at 1, 2 indexes and adds My Month at index 1 */
myArray.splice(2, 2, "My Month");
console.log(myArray);

myArray.splice(2, 1, "March");
myArray.splice(3, 0, "April");

// --------------------------------------
/* Concat*/

var newArr = ["June", "July"];
//Adds two arrays.

console.log(myArray.concat(newArr));

// Existing Array doesn't change.
console.log(myArray);
