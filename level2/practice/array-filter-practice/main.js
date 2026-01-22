let arr = [3, 6, 8, 2]

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

let fiveAndGreaterOnly = arr.filter(function(num){
    if(num > 5){
        return true;
    }
})

console.log(fiveAndGreaterOnly)



// 2) Given an array of numbers, return a new array that only includes the even numbers.
let onlyEvensNum = arr.filter(function(num){
    if(num % 2 == 0){
        return true
    }
})

console.log(onlyEvensNum)


//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
let wordArr = ["dog", "wolf", "by", "family", "eaten", "camping"]

let onlyFiveChar = wordArr.filter(function(char){
    if(char.length <= 5){
        return true
    }
})

console.log(onlyFiveChar)

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

let peopleObj = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

let onlyMembers = peopleObj.filter(function(user){
    if(user.member == true){
        return true
    }
})

console.log(onlyMembers)


// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
let peopleObj2 =
[
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

let ofAge = peopleObj2.filter(function(user){
    if(user.age > 18){
        return true
    }
})

console.log(ofAge)