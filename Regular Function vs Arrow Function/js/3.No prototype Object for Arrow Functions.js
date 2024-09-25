// Regular Function:

function regularFunction() {}

console.log(regularFunction.prototype,"Regular Function"); // Output: { constructor: f, prototype: constructor }

// Arrow Function:

const arrowFunction = () => {};

console.log(arrowFunction.prototype,"Arrow Function");   // Output: undefined
