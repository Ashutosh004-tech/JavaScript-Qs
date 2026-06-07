// Eqality
/* 
The equality (==) operator checks whether its two operands are equal, returning a Boolean result. 
Unlike the strict equality operator, it attempts to convert and compare operands that are of different types.
*/
console.log(1 == 1); //  true

console.log("hello" == "hello"); // true

console.log("1" == 1); // true

console.log(0 == true); // false

console.log(NaN == NaN); // false

console.log(undefined == undefined); // true

console.log(undefined == null); // true

console.log(null == null); // false

console.log(null == ""); // flase

console.log(undefined == ""); // flase

console.log(0 == false); // true

const a = [1, 2, 3];
const b = "1,2,3";
console.log(a == b); // true, `a` converts to string

const c = ["hii", 0.5, "hey"];
const d = c.toString(); // "hii,0.5,hey"
console.log(c == d); // true

//Greater than or equal (>=)
/*
The greater than or equal (>=) operator returns true if the left operand is
 greater than or equal to the right operand, and false otherwise. 
*/

console.log(5 >= 3); //  true

console.log(3 >= 3); //  true

// Compare bigint to number
console.log(3n >= 5); //  false

console.log("ab" >= "aa"); //  true

//If one of the operands gets converted to NaN. then it returns false
//(For example, strings that cannot be converted to numbers, or undefined.)

//String to string comparison
console.log("a" >= "b"); // false
console.log("a" >= "a"); // true
console.log("a" >= "3"); // true

//String to number comparison
console.log("5" >= 3); // true
console.log("3" >= 3); // true
console.log("3" >= 5); // false

console.log("hello" >= 5); // false
console.log(5 >= "hello"); // false

//Comparing Boolean, null, undefined, NaN
console.log(true >= false); // true
console.log(true >= true); // true
console.log(false >= true); // false

console.log(true >= 0); // true
console.log(true >= 1); // true

console.log(null >= 0); // true
console.log(1 >= null); // true

console.log(undefined >= 3); // false
console.log(3 >= undefined); // false

console.log(3 >= NaN); // false
console.log(NaN >= 3); // false


//inequality (!=) 
/*
The inequality (!=) operator checks whether its two operands are not equal, 
returning a Boolean result. Unlike the strict inequality operator,
it attempts to convert and compare operands that are of different types.
*/
console.log(1 != 1); // false

console.log("hello" != "hello"); // false

console.log("1" != 1); // false

console.log(0 != false); // false


//Strict equality (===)
/*
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. 
Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
*/
// If the operands are of different types, return false.
// If both operands are objects, return true only if they refer to the same object.
// If both operands are null or both operands are undefined, return true.
// If either operand is NaN, return false.

console.log("hello" === "hello"); // true
console.log("hello" === "hola"); // false

console.log(3 === 3); // true
console.log(3 === 4); // false

console.log(true === true); // true
console.log(true === false); // false

console.log(null === null); // true

console.log(undefined === null) // false 
console.log(undefined == null) // true