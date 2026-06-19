// Override Object Value

const Student  = {
    name : "Nobita",
    class : "IV",
    Books : ["Math", "Science", "English", "IT"],
    gmail : "nobita@gmail.com",
}
console.log(Student);

Student.name = "Sizuka";

console.log(Student);

// Function with in a object 
Student.result = function(){
    console.log("Passed");
}
Student.grade = function(){
   return "A";
}

console.log(Student);
console.log(Student.result) // Return function
console.log(Student.result()) // || Passed || Excute function and return the output 
// || Due to no return type in the function result so it automatically return a undefined

console.log(Student.grade()) // A || No undefiend


//Freeze an Object 

/*
The Object.freeze() static method freezes an object. 
Freezing an object prevents extensions and makes existing properties non-writable and non-configurable
 */

Object.freeze(Student);
Student.name = "Doremon";

console.log(Student.name); // Student name still remain as Sizuka 