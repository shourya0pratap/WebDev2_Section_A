function spreadOperator() {
  let fruits1= ["apple","banana"];
  let fruits2 = ["cherry","orange"];
  console.log(fruits1 + fruits2);
  console.log(fruits1.concat(fruits2));
  console.log([...fruits1, ...fruits2]);
}

function ternaryOperator() {
  let age = 18;
  let canVote = age>=18? "Can Vote" : "Can't Vote";
  console.log(canVote);
}

function practice() {
  let num = 101;
  let isEvenOdd = num%2 == 0? "Even" : "Odd";
  console.log(`${num} is ${isEvenOdd}`);
  let year = 100;
  let leapYear = (year%4 == 0 && year%100 != 0) || year%400 != 0 ? "leap Year" : "not a Leap Year";
  console.log(`${year} is ${leapYear}`)
}