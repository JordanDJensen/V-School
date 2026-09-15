// document.animals.addEventListener("submit", function(e){
//     e.preventDefault()

//     var animal = document.animals.favorite.value
//     console.log(animal)
// })


///////// Pracitce with localStorage /////////////// 

// var obj = {
//     name: "Billy",
//     age: 45,
//     cars: [
//         {
//             year: 2002,
//             make: "Toyota",
//             model: "Camry"
//         },
//         {
//             year: 2018,
//             make: "Tesla",
//             model: "Roadster"
//         }
//     ]
// }

// localStorage.user = JSON.stringify(obj)

// let user = JSON.parse(localStorage.user)

// console.log(user)

///////// Pracitce with localStorage /////////////


/////// Practice with setTimeOut////////// 
// setTimeout(function(){
//     console.log("HAPPY BIRTHDAY")
// }, 5000)


// // Load clickCount from localStorage, or start at 0 if it doesn't exist
// let clickCount = parseInt(localStorage.getItem("click")) || 0;

// // Get the display element
// let clickDisplay = document.getElementById("click-count");

// // Initialize the display with the current count
// clickDisplay.textContent = clickCount;

// // Add click event listener
// window.addEventListener('click', function(){
//     clickCount++
//     localStorage.setItem("click", clickCount)
//     clickDisplay.textContent = clickCount
// });

// var arr = [1,2,3,4]

// var newArr = arr.map(function(item){
//     return item + 1
// })
// console.log(newArr)

function addNumbers(...numbers) {
  // numbers is now an array that we can use .reduce() on
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));


//Practice with rest operator 
let collectAnimals =(...animals) =>(animals);


console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


let combineFruit = (fruit, sweets, vegetables) =>({
fruit, sweets, vegetables})

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
//  {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

let parseSentence = ({location, duration})=>( `We're going to have a good time in ${location} for ${duration}`);

console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
}));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav] = favoriteActivities;

let returnFavorites = (firstFav, secondFav, thirdFav) =>(
    `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`);


console.log(returnFavorites(firstFav, secondFav, thirdFav))


let combineAnimals = (...allAnimals) =>{
    return [].concat(...allAnimals)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


let product = (...numbers) =>


  numbers.reduce((acc, number) => acc * number, 1);

  console.log(product(1,2,3,4,5))


let unshift = (array, ...items) => 
  [...items, ...array];

let populatePeople = (names) =>
     names.map(name =>{
       const [firstName, lastName] =  name.split(" ")
        // your code
      return {firstName, lastName}
    })


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


