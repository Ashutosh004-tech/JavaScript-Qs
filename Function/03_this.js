/*
The this keyword refers to the context where a piece of code, such as a 
function's body, is supposed to run. Most typically, it is used in object methods, 
where this refers to the object that the method is attached to, 
thus allowing the same method to be reused on different objects.
 */

let obj = {
  name: "John",
  age: 20,
  email: "john@gmai.com",
  islog: function () {
    console.log(`${this.name} , Welcome`);
    console.log(this);
  },
};

obj.islog();

console.log(this); // {}

// This in Browser 
console.log(this) // Window {...}

function f1() {
  console.log(this);
}
f1(); // Object [global] {...}
