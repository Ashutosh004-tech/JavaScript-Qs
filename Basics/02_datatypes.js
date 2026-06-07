//Primitive Datatypes
// 1.Number
//Number can store integers in the range -(2^53 − 1) to 2^53 − 1
let a = 100;

// 2.String
let name = "John";

// 3.Boolean
let isOkay = true;

// 4.Undefined
let val;

// 5.Null
let data = null;

// 6.Symbol
let sym = Symbol("abc");
console.log(sym); //Symbol(abc)
console.log(typeof sym); // symbol

// 7.BigInt
let bigNum = 12323n;
console.log(typeof bigNum); // bigint

console.log(typeof a); //  Number

console.log(typeof data); // Object

console.log(typeof val); // Undefined

console.log(typeof isOkay); // Boolean

console.log(typeof name); // String

// Non-Primitive Datatypes (Reference)

// 1. Objects
let obj = {
  class: "6th",
  rollNo: 32,
};
console.log(obj);

// 2. Array
let arr = [2, 4, 5, 9];
console.log(arr);

// 3. Function
function show() {
  console.log("Hello World");
}
show();
