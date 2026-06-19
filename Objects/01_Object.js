/*
The Object type represents one of JavaScript's data types. 
It is used to store various keyed collections and more complex entities. 
Objects can be created using the Object() constructor or the object initializer / literal syntax.
 */

// Object initializer / literal :

let Pin = Symbol("000000")

const user = {
    name : "John",
    age : 24,
    gmail : "josh@gmail.com",
    mobNo : ["77484930","94223442"],
    address : {
        At : "Xyz",
        PoliceSt : "Chicago",
        "Country" : "America",
        [Pin] : "786892"
    }
}

console.log(user);

// Accessing a object key :

// 1 By using Dot (.) Operator
console.log(user.name);

// 2 By Using Square Bracket ["key-value"] 
console.log(user["name"])

// Nested Object Value
console.log(user.address.At)
console.log(user["address"]["At"])

// Access a symbol 
console.log(user["address"][Pin])

// Access an array
console.log(user.mobNo)
console.log(user.mobNo[1]) // 1st Index
console.log(user["mobNo"][0]) // 0th index value