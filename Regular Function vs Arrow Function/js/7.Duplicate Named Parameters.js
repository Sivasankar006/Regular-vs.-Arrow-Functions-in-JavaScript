// Regular Function:


function regularFunction(a, a, a) {
  console.log(a); // Output: 3 (last parameter value)
}
regularFunction(1, 2, 3);


//   Arrow Function:

const getData = (a, a, a) => {
  console.log(a); // SyntaxError: Duplicate parameter name not allowed in this context
}
getData(1, 2, 3);


