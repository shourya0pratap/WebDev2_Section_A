// Q1. reverse the array by using push and pop method.
function reverse(arr) {
  copy = [...arr];
  rev = [];
  while (copy.length > 0) rev.push(copy.pop());
  console.log(rev);
}

// Q2. remove all negative numbers from an array
function removeNegative(arr) {
  let newarr = [];
  while (arr.length > 0) {
    let x = arr.shift();
    if (x > 0) newarr.push(x);
  }
  console.log(newarr);
}

// Homework tasks

// Q3. remove duplicate elements from an array
function removeDuplicates(arr) {
  newarr = [];
  for (let elem of arr) {
    if (newarr.indexOf(elem) == -1) newarr.push(elem);
  }
  console.log(newarr);
}

// Q4. move all zeros to the end of the array
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

// Q5. undo/redo simulation
