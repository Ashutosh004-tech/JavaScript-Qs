
function scopeExample (){
    let val = 50;
    var num = 20;
    console.log(val);
}

// console.log(val);
// console.log(num);

scopeExample();
var age = 18;
function myApp(){
    const name = "sizuka";
    console.log(`${name}, you are ${age} years old`)
}
myApp();