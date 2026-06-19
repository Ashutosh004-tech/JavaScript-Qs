let arr1 = ["Nobita", "sizuka"];
let arr2 = ["Doremon"];

// 1. Concat method
console.log(arr1.concat(arr2)); //[ 'Nobita', 'sizuka', 'Doremon' ]

// 2. spread operator (...)

console.log([...arr1, ...arr2]); // [ 'Nobita', 'sizuka', 'Doremon' ]
