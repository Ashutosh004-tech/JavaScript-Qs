/*
Memory in JavaScript refers to the storage space where 
variables, objects, functions, and other data are kept while a program is running.
*/
//1. Stack Memory
// => Stores primitive data types


let xyz = "Hello";
let abc = xyz;
abc = 20;

console.log(xyz); //Hello
console.log(abc); //20

//2. Heap Memory
// => Stores reference types

let userOne = {
  name: "Josh",
  age: 23,
};

let userTwo = userOne;

userTwo.name = "David";

console.log(userOne.name); //David
console.log(userTwo.name); //David
// Changing through one reference affects the other.
