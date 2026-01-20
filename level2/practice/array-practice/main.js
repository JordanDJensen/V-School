// Make an array of numbers that are doubles of the first array
let numbers = [2, 5, 100]

let results = numbers.map(function(number) {
   return number * 2
})

console.log(results)

// Take an array of numbers and make them strings
let stringResults = numbers.map(function(number){
    return number.toString();
})

console.log(stringResults)

let names =  ["john", "JACOB", "jinGleHeimer", "schmidt"]

let capNameResults = names.map(function(name){
    let results = name.toLocaleLowerCase();
    
    return results.charAt(0).toUpperCase().charAt(0).toUpperCase() + results.substring(1);
})

console.log(capNameResults)

// Make an array of strings of the names
let namesWithAge = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]



let result = namesWithAge.map(function(user){
    return user.name
})

console.log(result)


