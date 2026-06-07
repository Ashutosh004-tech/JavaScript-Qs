// Arithmatic operator
let a = 5
let b = 2

// 1.Addition
console.log(a+b);

// 2.Subtraction
console.log(a-b)

// 3.Division
console.log(a/b)

// 4.Multiplication
console.log(a*b)

// 5.Power
console.log(a**b)

// 6.Modules
console.log(a%b)


// Logical Operator
let v1 = 6
let v2 = 0
// 1.Logical AND(&&)
if( v1 != 0 && v1>v2){
    console.log(v1); //6
}

// 2.Logical AND assignment (&&=)
// Logical AND assignment short-circuits, meaning that x &&= y is equivalent to x && (x = y)

let v4 = 10
v4 &&= 12 // v4 && (v4 = 12)
console.log(v4); // 12

// 3. Logical OR(||)
if( v2 != 0 || v1>v2){
    console.log(v2); //0
}

// 4.Logical Not
console.log((v1>v2)); //true
console.log(!(v1>v2)); //false

//Unary Operator

// 1.Assignment Operator 
let xyz = 23

// 2.Increment Operator
let x = 4
// Post Increment 
let p = x++;
console.log(p); // 4

//Pre Increment
let q = ++x;
console.log(q); // 6
