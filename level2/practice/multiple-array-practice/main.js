var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let sortedOfAge = peopleArray.filter(function(user){
    if(user.age > 18){
        return user
    }
}).sort(function(a,b){
   return a.lastName.localeCompare(b.lastName)
}).map(function(user){
    return `<li>${user.firstName} ${user.lastName} is ${user.age} </li>`
})

console.log(sortedOfAge)


