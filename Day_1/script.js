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
