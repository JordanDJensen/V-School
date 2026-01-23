//*
// ## **Challenge 1: Sorting an Array**
// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
//*

const numbers = [4, 2, 7, 1, 9, 5];

let sortedNumbers = numbers.sort((a,b) => a -b)

console.log(sortedNumbers)


//*
// ## **Challenge 2: Mapping an Array**
// Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.
//*

const strings = ['hello', 'world', 'javascript'];

let upperCaseString = strings.map((str) => str.toUpperCase())

console.log(upperCaseString)