// Regular Function:

const add = function() {
    const args = Array.from(arguments); // Convert to array
    return args.reduce((a, b) => a + b);
  }
  console.log(add(2, 3, 4, 5, 6, 7),"Regular Function"); // Output: 27

  
//   Arrow Function:


const sum = (...values) => values.reduce((a, b) => a + b);
console.log(sum(2, 3, 4, 5, 6, 7) ,"Arrow Function"); // Output: 27
