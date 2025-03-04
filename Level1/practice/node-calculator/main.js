const readline = require("readline-sync")
let stringInput = readline.question("Please enter your first number ")
let stringInput2 = readline.question("Please enter your second number ")
let operation = readline.keyIn("Please enter the operation to perform (a)dd, (m)ultiple, (d)ivide or (s)ubract: ")

let num1 = parseInt(stringInput)
let num2 = parseInt(stringInput2)


if(operation == "a"){
   function addTwoNums(a, b){
      return a + b
   }
   console.log("The result is " + addTwoNums(num1, num2))
}

if(operation == "m"){
   function multipleTwoNums(a, b){
      return a * b
   }
   console.log("The result is " + multipleTwoNums(num1, num2))
}

if(operation == "d"){
   function divideTwoNums(a, b){
      return a / b
   }
   console.log("The result is " + divideTwoNums(num1, num2))
}

if(operation == "s"){
   function subtractTwoNums(a, b){
      return a - b
   }
   console.log("The result is " + subtractTwoNums(num1, num2))
}













