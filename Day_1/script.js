// function demo(){
//     return "hello world";
// }
// console.log(demo());

// const demo=()=>"demo"
// console.log(demo());


// Asynchronous function: we can move to another task before the previous one finishes its execution.
// callback function: we can pass one function inside another function as an argument. 
// callback=test
function sample(callback){
    console.log("sample");
    callback()
}
function test(){
    console.log("test")
}
sample(test)

// Hoisting
console.log(a);
var a; // Hoisted and initialised with undefined

/*
console.log(b);
let b;
// Hoisted but not initialised (Temporal Dead Zone)

console.log(c);
const c;
// 1. Cannot declare constant without a value
// 2. Also hoisted but not initialised (Temporal Dead Zone)
*/

var d;
console.log(d); // Undefined

let e;
console.log(e); // Undefined
