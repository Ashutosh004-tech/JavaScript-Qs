const MyDob = new Date();

console.log(MyDob); //2026-06-12T02:24:15.213Z
console.log(MyDob.toString()); // Fri Jun 12 2026 07:54:15 GMT+0530 (India Standard Time)
console.log(MyDob.toLocaleDateString()); // 12/6/2026
console.log(MyDob.toLocaleTimeString()); // 7:54:15 am
console.log(MyDob.toISOString()); // 2026-06-12T02:24:15.213Z
console.log(MyDob.toJSON()); // 2026-06-12T02:24:15.213Z
 
// Input as String
const today = new Date("12-23-2004");
console.log(today);

// Input as number
const date = new Date(12, 4, 2005)
console.log(date);
console.log(date.toLocaleDateString())

//
const dateOfN = new Date("12 4 2004")
console.log(dateOfN)

//



 // ********************** TIME **********************
 const time =  Date.now();
 console.log(time) // 1781405835482 || Miliseconed

 console.log(new Date(Date.now())) //2026-06-14T02:57:15.485Z
 console.log(new Date) //2026-06-14T02:57:15.485Z