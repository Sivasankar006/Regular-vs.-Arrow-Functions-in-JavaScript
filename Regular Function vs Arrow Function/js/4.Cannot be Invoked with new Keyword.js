// Regular Function:

function regularFunction() {}
console.log(new regularFunction()); // Works, as it's a constructor


// Arrow Function:

const arrowFunction = () => {};
console.log(new arrowFunction());   // Throws an error, as arrow functions can't be constructors
