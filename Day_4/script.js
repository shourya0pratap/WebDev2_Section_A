function spreadOperator() {
  let fruits1 = ["apple", "banana"];
  let fruits2 = ["cherry", "orange"];
  console.log(fruits1 + fruits2);
  console.log(fruits1.concat(fruits2));
  console.log([...fruits1, ...fruits2]);
}

function ternaryOperator() {
  let age = 18;
  let canVote = age >= 18 ? "Can Vote" : "Can't Vote";
  console.log(canVote);
}

function leapYear() {
  let num = 101;
  let isEvenOdd = num % 2 == 0 ? "Even" : "Odd";
  console.log(`${num} is ${isEvenOdd}`);
  let year = 100;
  let leapYear =
    (year % 4 == 0 && year % 100 != 0) || year % 400 != 0
      ? "leap Year"
      : "not a Leap Year";
  console.log(`${year} is ${leapYear}`);
}

// function sample(callback){
//     console.log("sample");
//     callback()
// }
// function test(){
//     console.log("test")
// }
// sample(test)

function sample() {
  console.log("sample");
  return function demo() {
    console.log("demo");
    return function test() {
      console.log("test");
    };
  };
}

// sample()()()
// var value = sample()
// let valueTwo = value()
// valueTwo();

// setTimeout(Callback,delay)

// setInterval(function() {
//     console.log("Hello world");
// }, 1000);

function demo() {
  console.log("demo");
}
console.log("sample");
function sample() {
  demo();
}
sample()(function () {
  console.log("This is an IIFE.");
})();

// Predict the Output

for (var a = 0; a < 5; a++) {
  setTimeout(console.log(a), 100);
}
for (let a = 0; a < 5; a++) {
  setTimeout(console.log(a), 100);
}
