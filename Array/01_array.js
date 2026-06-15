//------------------ Array ------------------
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
/*
=> JavaScript arrays are resizable and can contain a mix of different data types.
=> JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.
=> JavaScript arrays are zero-indexed: the first element of an array is at index 0
=> JavaScript array-copy operations create shallow copies.
    @ Shallow copies : A shallow copy of an object is a copy whose properties share the same references 
                      (point to the same underlying values) as those of the source object from which the copy was made.
    @ Deep copies : A shallow copy of an object is a copy whose properties share the same references 
                    (point to the same underlying values) as those of the source object from which the copy was made.
*/

let arr = [1, 4, 5, 6, 8];
console.log(arr);

let strArr = ["Hii", "Hello", "Bye"];
console.log(strArr);

// ----------------------- Prototype -----------------------

// at(idx)
console.log(arr.at(3)); // 6

// Concatenate two array
let ar1 = [2, 4, 5, 2, 5];
let ar2 = [4, 6, 7, 2, 7];

let concatAr = ar1.concat(ar2);
console.log(concatAr);

// Push and Pop in an array
let val = [34, 64, 63];
val.push(3);
console.log(val);

val.pop();
console.log(val);

let numArray = [8, 9, 6, 4, 87, 54, 67, 34, 21];
console.log(Array.isArray(numArray)) // true
let newNumArray = numArray.sort()
console.log("A : ", newNumArray) // This happens because numbers are treated as strings:

