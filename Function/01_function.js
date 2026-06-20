// Functions are one of the fundamental building blocks in JavaScript.
/* 
A function in JavaScript is similar to a procedure—a set of statements that performsa task or 
calculates a value,but for a procedure to qualify as a function, it should take some input and 
return an output where there is some obvious relationship between the input and the output.
*/

// FUnction Declaration
/*
Function declarations
A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly braces, { defination }
*/

function helloWorld() {
  console.log("Hello World!");
}

helloWorld();

function addition(a, b) {
  return a + b;
}
console.log(addition(5, 6));

// Function with array
// rest(...) operator used
function arrVal(num) {
  return num;
}
console.log(objVal([123, 433, 90])); // [ 123, 433, 90 ]

// function with Object

let user = {
  name: "Josh",
  age: 24,
  isLoggedin: true,
};
function objVal(...user) {
  return user;
}
console.log(user); // { name: 'Josh', age: 24, isLoggedin: true }
