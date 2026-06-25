// ++++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++

/* 

An arrow function expression is a compact alternative to a traditional function expression, 
with some semantic differences and deliberate limitations in usage:

=> Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
=> Arrow functions cannot be used as constructors. Calling them with new
   throws a TypeError. They also don't have access to the new.target keyword.
=> Arrow functions cannot use yield within their body and cannot be created as generator functions.

*/

// 1. Remove the word "function" and place arrow between the argument and opening body brace
const myfun = () => {
  let val = 5;
  console.log("IT is a arrow function");
 // console.log(this); // {}
};
myfun();

// 2. Remove the body braces and word "return" — the return is implied
const add = () => 2 + 2;
console.log(add());

// 3. Remove the parameter parentheses
const val = a => a + 10;

console.log(val(3));

//Square of a number 
const square=num=>num*num;
console.log(square(6));

//check if anumber is even 
const isEven=num=>num%2===0
console.log(isEven(8));
console.log(isEven(5));

