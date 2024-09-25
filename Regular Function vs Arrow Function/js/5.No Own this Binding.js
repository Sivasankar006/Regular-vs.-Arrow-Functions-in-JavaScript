// 'use strict';

function regularFunction() {
  console.log('Regular:', this);
}
const arrowFunction = () => {
  console.log('Arrow:', this);
}

console.log(regularFunction()); // `this` refers to global object or undefined in strict mode
console.log(arrowFunction());   // `this` refers to the surrounding lexical context

const user = {
  name: 'Siva',
  regularFunction: function () {
    console.log(this.name, "Regular Function");
  },
  arrowFunction: () => {
    console.log(this.name, "Arrow Function");
  }
};

user.regularFunction(); // Output: Siva Regular Function
user.arrowFunction();   // Output: undefined Arrow Function



console.log("Example 2:");
// Example 2: call, apply, and bind with Regular vs. Arrow Functions

function data() {
  console.log(this, "regularFunction");
}
const getData = () => {
  console.log(this, "arrowFunction");
};

const obj = { name: 'Siva' };

// Using call/apply with a regular function
data.call(obj);  // Logs { name: 'Siva' } regularFunction (this is set to obj)
data.apply(obj); // Logs { name: 'Siva' } regularFunction (this is set to obj)

// Using bind with a regular function
const boundData = data.bind(obj);
boundData();     // Logs { name: 'Siva' } regularFunction (this is set to obj)

// Using call/apply with an arrow function
getData.call(obj);  // Logs the outer context's `this`, call does NOT change the value of `this`
getData.apply(obj); // Same as above, arrow function `this` cannot be overridden

// Using bind with an arrow function
const boundGetData = getData.bind(obj);
boundGetData();   // Same as above, `this` still refers to the outer context, bind does NOT change the value of `this`
