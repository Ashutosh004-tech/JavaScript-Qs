let num = 23

let str = "Hello"

let isOkay = false

let str2 = String(isOkay); 

console.log(str2) // false 

let val = Number(str)

console.log(val) // NaN
/*
NaN : The NaN global property is a value representing Not-A-Number.
-> Failed number conversion (e.g., explicit ones like parseInt("blabla"), Number(undefined)
-> Math operation where the result is not a real number (e.g., Math.sqrt(-1))
-> Indeterminate form (e.g., 0 * Infinity, 1 ** Infinity, Infinity / Infinity, Infinity - Infinity)
-> A method or expression whose operand is or gets coerced to NaN (e.g., 7 ** NaN, 7 * "blabla") — this means NaN is contagious
-> Other cases where an invalid value is to be represented as a number.
*/
// Example
let a= 10
let ch = "Hii"
console.log(a + Number(ch)) // NaN

let okay = Number(isOkay)

console.log(okay) // 0