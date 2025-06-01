const { version } = require("react");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// remove last item
vegetables.pop()

console.log(vegetables)

// remove first item
fruit.shift()
console.log(fruit)

// find index of orange
var indexOfOrange = fruit.indexOf("orange")
console.log(indexOfOrange)

// add index to end of array 
fruit.push(indexOfOrange)
console.log(fruit)

// find the length of vegetables
var lengthOfVeggies = vegetables.length
console.log(lengthOfVeggies)

// add length to end of array 
vegetables.push(lengthOfVeggies)
console.log(vegetables)

// add two array together beginning with fruit
var food = fruit.concat(vegetables)
console.log(food)

// remove 2 items starting at index 4 
food.splice(4, 2)
console.log(food)

// reverse array
food.reverse()
console.log(food)

// turn array into string 
var newfood = food.join(",")
console.log(newfood)

