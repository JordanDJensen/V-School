// console log numbers 0 to 9 
for(var i = 0; i <10; i++){
    console.log(i)
}

// console log numbers 9 to 0
for(var i = 9; i >= 0; i--){
    console.log(i)
}

// console log the fruits
const fruit = ["banana", "orange", "apple", "kiwi"]
for(var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

// push the number 0 to 9 into an array. 
var num = [];
for(var i = 0; i < 10; i++){
    num.push(i)
}
console.log(num)

// console log even numbers 0 through 100.
for(var i = 0; i < 101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// Push every other fruit to an array. 
const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const newFruit = [];

for(var i = 0; i < fruit2.length; i+= 2){
   newFruit.push(fruit2[i])
}

console.log(newFruit)

// print all name of the people 
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for(var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

var names = []
var occupation = []

for(var i = 0; i <peopleArray.length; i++){
    names.push(peopleArray[i].name)
    occupation.push(peopleArray[i].occupation)
}
console.log(names)
console.log(occupation)
