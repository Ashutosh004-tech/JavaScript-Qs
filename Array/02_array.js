let arr = [2, 11, 4, 6, 5, 6, 3, 4, 5, 6, 8, 8,18];

// to reverse an array
console.log(arr.toReversed())

// to string
console.log(arr.toString())

// slice vs Splice

/*
    Splice
--------------
 The splice() method of Array instances changes the contents of 
 an array by removing or replacing existing elements and/or adding new elements in place.

*/

/*
    Slice
--------------
The slice() method of Array instances returns a shallow copy of a portion of an array into a 
new array object selected from start to end (end not included) where start and end represent 
the index of items in that array. The original array will not be modified.

 */

/*

slice()	                                        splice()
=>Returns a portion of an array.	            => Adds, removes, or replaces elements in an array.
=>Does not modify the original array.	        => Modifies the original array.
=>Returns a new array containing 
the selected elements.	                        => Returns an array of the removed elements.
=>Syntax: array.slice(start, end)	            => Syntax: array.splice(start, deleteCount, items...)
*/