// 1) Turn an array of numbers into a total of all the numbers
let arr = [1,2,3]

let total = arr.reduce(function(sum, num){
    sum = sum + num

    return sum
})

console.log(total)

// 2) Turn an array of numbers into a long string of all those numbers.

let stringConcat = arr.reduce(function(str, num){
    str = str + num
    return str
}, "")

console.log(stringConcat)


//  Turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let totalVotes = voters.reduce(function(total, vote){
    if(vote.voted){
        total++
    }
    return total

}, 0)

console.log(totalVotes)

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

let shoppingSpree = wishlist.reduce(function(total, item){
    total = total + item.price

    return total
}, 0)

console.log(shoppingSpree)


//5) Given an array of arrays, flatten them into a single array
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

let flatten = arrays.reduce(function(final, array){
    final.push(array)
    return final
}, [])

console.log(flatten)


// 6) Given an array of potential voters, return an object representing the results of the vote

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let voterResults = voters.reduce(function(final, voter){
    if(voter.age <= 25){
        final.numYoungPeople++
    }
    if(voter.voted && voter.age < 25){
        final.numYoungVotes++
    }

    if(voter.age >= 26 && voter.age <=35){
        final.numMidsPeople++
    }

    if(voter.age >= 26 && voter.age <=35 && voter.voted){
        final.numMidVotePeople++
    }

    if(voter.age >= 36){
        final.numOldsPeople++
    }

    if(voter.age >=36 && voter.voted){
        final.numOldVotesPeople++
    }

    return final

},{numYoungVotes: 0, numYoungPeople: 0, numMidVotePeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0})

console.log(voterResults)

