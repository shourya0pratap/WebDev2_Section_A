// // Promise using constructor  (sparingly used)
// let myPromise = new Promise((res, rej) => {
//   let data = "hello world";
//   if (data) {
//     res(data);
//   } else {
//     rej("Error: Promise rejected");
//   }
// });

// // Then statement to handle resolve and error
// myPromise.then(
//   (data) => {
//     console.log(data);
//   }, //resolved
//   (error) => {
//     console.log(error);
//   }, // rejected
// );

// // More readable code with then-catch statement
// myPromise
//   .then(
//     (data) => {
//       console.log(data);
//     }, //resolved
//   )
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(myPromise);

// Promise hell
// fetch("https://jsonplaceholder.typicode.com/todos/1").then((robj) => {
//   robj.json().then((data) => {
//     console.log(data);
//   });
// });

const heading = document.getElementById("title");
const para = document.getElementById("status");

let resp = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((robj) => robj.json())
  .then((rjson) => {
    console.log(rjson);
    heading.textContent = `Task: ${rjson.title}`;
    para.textContent = `Completed: ${rjson.completed}`;
  });
