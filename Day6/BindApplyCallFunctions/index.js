//Bind Example  
this.x = 9;
const object = {
    x: 18,
    getX: function () {
        return this.x;
    }
}
var myNewFunction = object.getX
if (myNewFunction() != 9) {
    console.log("Something is wrong")
}
console.log("myNewFunction before binding", myNewFunction())

var myBoundedFunction = myNewFunction.bind(object)
if (myBoundedFunction() != 18) {
    console.log("Something is wrong")
}
console.log("myBoundedFunction after binding", myBoundedFunction())

function myParametarizedFunction(param1, param2) {
    console.log(`${param1} ${this.name}, ${param2}`)
}
const person = {
    name: 'UMA',
    email: 'umamaheswararaotumma@gmail.com'
};
//Apply Example
myParametarizedFunction.apply(person, ['Hello', 'How are you?'])
//Call Example
myParametarizedFunction.call(person, 'Hello', 'How are you doing')


//How Bind is Useful??

//When to use Apply and Call are useful??