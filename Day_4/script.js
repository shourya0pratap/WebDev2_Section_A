arr = [4, 0, 3, 3, 0, 4];

function reverseArray(arr) {
  let revarr = [];
  while (arr.length > 0) {
    arr.push(temparr.pop());
  }
  console.log(revarr);
}

function removeNegative(arr) {
  let newarr = [];
  while (arr.length > 0) {
    let x = arr.shift();
    if (x > 0) newarr.push(x);
  }
  console.log(newarr);
}

function isPalindrome(arr) {
  while (arr.length % 2 == 0 || arr.length > 0) {
    let x = arr.pop();
    let y = arr.shift();
    console.log(x, y);
    if (x != y) {
      console.log("Not Palindrome");
      return;
    }
  }
  console.log(arr);
}

function removeDuplicates(arr) {
  newarr = [];
  for (let elem of arr) {
    if (newarr.indexOf(elem) == -1) newarr.push(elem);
  }
  console.log(newarr);
}

function moveZeroes(arr) {
  newarr = [];
  let count = 0;
  for (let elem of arr) {
    if (elem == 0) count++;
    else newarr.push(elem);
  }
  while (count > 0) {
    newarr.push(0);
    count--;
  }
  console.log(newarr);
}

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