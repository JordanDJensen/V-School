// 1) Sort an array from smallest number to largest
let arr = [1, 3, 5, 2, 90, 20]

let smallToBig = arr.sort(function(a, b){
    return a -b
})

console.log(smallToBig)

//2) Sort an array from largest number to smallest

let bigToSmall = arr.sort((a, b) => b - a)

console.log(bigToSmall)


// 3) Sort an array from shortest string to longest
let stringArr = ["dog", "wolf", "by", "family", "eaten"]


let shortToLong = stringArr.sort(function(a, b){
    return a.length - b.length
})

console.log(shortToLong)


// 4) Sort an array alphabetically
let sortByAlphabet = stringArr.sort()

console.log(sortByAlphabet)


// 5) Sort the objects in the array by age
let peopleObj = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

let byAge = peopleObj.sort((a,b) => a.age - b.age)

console.log(byAge)