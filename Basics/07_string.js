let usrNme = "Ashutosh";

// Function of Sting
// toUpperCase
console.log(usrNme.toUpperCase()); // ASHUTOSH

// toLowerCase
console.log(usrNme.toLowerCase()); // ashutosh

// Concatenation
let fullName = usrNme.concat(" Panigrahi");
console.log(fullName); // Ashutosh Panigrahi

// String length
let size = fullName.length;
console.log(size); // 18

// Value at a positon 
let _1stLetter = fullName.at(0);
console.log(_1stLetter); // A

// Slice, Extracts a specifies part of stirng
let DoB = "12th-Dec-2004";
let date = DoB.slice(0, 4);
console.log(date); // 12th

// Split, Divide a String into substrings, put them into a array
console.log(DoB.split("-")); // ['12th, 'Dec', '2004']


// trim(remove) white space. other method => trimStart(), => trimEnd(), => trimLeft(), => trimRignt
let str = "                   ASHUTOSH               ";
console.log(str.trim()); // ASHUTOSH

// Return a subtring of a String
console.log(fullName.substring(0, 3)); //Ash

// Search basic on a Regular Expression, returns the index number
let book =
  "Aspiring @ Full-Stack Developer with hands-on experience in the MERN stack";
let regexp = /[A-Z]/
let regexp = /[0-1]/
console.log(book.search(regexp)) // 0
console.log(book.search(regexp)) // -1