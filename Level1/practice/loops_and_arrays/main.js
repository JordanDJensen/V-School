// Count how many computers there are 

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0; 
for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] == "computer"){
        count++
    }
}

console.log(count)

// Log to console "old enough" if they are 18 or older and "not old enough" if not
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE's good to see Mad Max Fury Road.");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE's good to see Mad Max Fury Road.");
        }
        
    } else{
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " not old enough to see Mad Max Fury Road, don't let HIM in.")
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " not old enough to see Mad Max Fury Road, don't let HER in.")
        }
        
    }
}

let a1 = [2, 5, 435, 4, 3] // "The light is on"
let a2 = [1, 1, 1, 1, 3]   // "The light is on"
let a3 = [9, 3, 4, 2]      // "The light is off"
var total = 0

for(var i = 0; i < a3.length; i++ ){
    
    total = a3[i] + total;

   
   
}
 
  if(total % 2 == 0){
        console.log("The light is off")
    } else{
        console.log("The light is on")
    }
