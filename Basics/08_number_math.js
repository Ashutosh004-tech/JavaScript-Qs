const num = new Number(100.123);

console.log(num);

console.log(num.toFixed(2));

console.log(num.toPrecision(4));

let bal = 230050;
console.log(bal.toLocaleString("en-IN"));

let dt = 13;
let age = dt.toString();
console.log(age);
console.log(typeof age);

// ********************************* MATH ********************************* \\

let nm = 25;
let sqrOfNum = Math.sqrt(nm);
console.log(sqrOfNum);

let someNum = 12.4393;
console.log(Math.floor(someNum));

let randomNum = Math.random();
console.log(randomNum);
console.log(Math.floor((Math.random()*10)+1))

let val = 12.54
console.log(Math.ceil(val));
console.log(Math.round(val));

let Num = 200.3333
console.log(Math.abs(Num));
