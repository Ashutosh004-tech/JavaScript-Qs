
//Singletone Object
// The most common way to create a singleton object is using the Object constructor or by directly assigning an object to a variable.
const myObj = new Object;
myObj.name = "Sam";
myObj.id = "101";
myObj.age = 12;
console.log(myObj)

// Array of Objects
const users = [
  (user1 = {
    name: "Nobita",
    id: "10N",
  }),
  (user2 = {
    name: "Sizuka",
    id: "10S",
  }),
  (user3 = {
    name: "Doremon",
    id: "10D",
  }),
];

users.map((el) => {
  console.log(el);
});
// console.log(users);


// Addiing Multiple Objects with in single object

let obj1 = {a:1,b:2}
let obj2 = {c:7,d:5}
let obj3 = {e:9,f:3}

// 1. Using Object.assign()
let allObj = Object.assign({}, obj1, obj2, obj3);
console.log(allObj);

// 2. Using Spread (...) operator
let Objects = {...obj1, ...obj2, ...obj3}
console.log(Objects);

