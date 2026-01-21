// doubled array using map
let numbers = [7, 16, 35, 29, 11, 0, 15, 33, 17, 25];
let doubled = numbers.map(elem => elem * 2);
console.log(doubled);

// passed students using filter
let marks = [19, 13, 15, 16, 17];
let passed = numbers.filter(marks => marks >= 16);
console.log(passed);

// sum of array elements using reduce
let nums = [1, 2, 3, 4, 5];
let sum = nums.reduce((acc=0, num) => acc+num, 0);
console.log(sum)