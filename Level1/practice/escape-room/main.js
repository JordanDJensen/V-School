    const readline = require("readline-sync")
    const name = readline.question("What is your name? ")
    console.log(`Wecome, ${name}! Your mission, should you choose to accept it... Is to escape this room before your life meter runs out.`)
    let lifeMeter = 3; 

    while (lifeMeter > 0){
      let answer =  readline.question("What would you like to do? 1. Find the key 2. Put hand in the hole 3. Open the door ")

      switch (answer){
        case("2"):
            console.log("You have died.")
            break;
        default:
            console.log("Hello")
      }

    
    }
    
    
