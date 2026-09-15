var myArray = []

myArray.push("Jordan", "Cynthia", "Gigi")
console.log(myArray)

// myArray.pop()
// console.log(myArray)

// myArray.shift()
// console.log(myArray)

myArray.unshift("James")
console.log(myArray)

myArray.splice(0, 1, "Jacob")
console.log(myArray)

myArray.splice(1, 1, "Trenton")
console.log(myArray)

var newArray = myArray.slice(1,3)
console.log(newArray)

var names = myArray.join("-")
console.log(names)

myArray.reverse()

console.log(myArray)


const form = document['my-form']
