let myname = "Kajal"
// console.log(myname.length)

// console.log(myname.at(3))
// console.log(myname.charAt(3))

let mylstName = " Sahu"

console.log(myname.concat(mylstName))

console.log(myname.endsWith("p"))

console.log(mylstName.indexOf("a"));


// slice
/*The slice() method of String values extracts a section of this string and returns 
it as a new string, without modifying the original string.*/

let str = "Helllooooooooo Hiiiiiiii"
console.log(str.slice(1,6));

// split

/* 
The split() method of String values takes a pattern and divides this string into an 
ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
*/

let para = "substrings+by+searching"
let arrOfPara = para.split("+");

console.log(arrOfPara)