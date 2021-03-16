// 1. Arrow functions don't have 'arguments' object which is an array like object.
// 2. this inside an arrow function is already binded to the function when we try to use this keyword it doesn't work ( points to global)
// 3. Polyfills are the implementations of inbuilt functions if browser doesn't support them.
Function.prototype.myBind = function (...arguments) {
    var calledFunction = this; // This doesn't work inside a arrow function.
    var that = arguments[0] // Next function called with this instance
    var args = arguments.slice(1) // Exclude first argument as it is next this

    return (...arguments) => {
        return calledFunction.apply(that, [...args, ...arguments]);
    }
}

const task = {
    id: '1',
    owner: 'uma'
}

function myTaskPrinter() {
    console.log(`${this.id} ${this.owner}`);
}
//Inbuilt bind.
myTaskPrinter.bind(task)();
//Polyfill for bind.
myTaskPrinter.myBind(task)();
