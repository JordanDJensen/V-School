// document.animals.addEventListener("submit", function(e){
//     e.preventDefault()

//     var animal = document.animals.favorite.value
//     console.log(animal)
// })


///////// Pracitce with localStorage /////////////// 

var obj = {
    name: "Billy",
    age: 45,
    cars: [
        {
            year: 2002,
            make: "Toyota",
            model: "Camry"
        },
        {
            year: 2018,
            make: "Tesla",
            model: "Roadster"
        }
    ]
}

localStorage.user = JSON.stringify(obj)

let user = JSON.parse(localStorage.user)

console.log(user)

///////// Pracitce with localStorage /////////////