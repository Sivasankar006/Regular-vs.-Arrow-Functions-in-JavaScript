// Regular Generator Function
function* regularGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = regularGenerator();
  
  console.log(gen.next().value); // Output: 1
  console.log(gen.next().value); // Output: 2
  console.log(gen.next().value); // Output: 3

  

// Invalid syntax: Arrow functions cannot be generators

// Arrow Generator Function

// const arrowGenerator = *() => {
//     yield 1;
//     yield 2;
//   };
  
// This will throw a syntax error because arrow functions cannot be used as generators
  