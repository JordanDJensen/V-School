const readlineSync = require('readline-sync');

const name = readlineSync.question("What is your name player? ")

console.log("Welcome to the Rebellion " + name + "! We will be flying our starship to the Tatooine system to locate two droids" + 
    " which contain the plans of a secret weapon the Empire is building. In your pursuit, you may encounter Jawas, Tusken Raiders " + 
   "and Stormtroopers. Be safe out there and remember... May the Force be with you.")

console.log("")

console.log("As you were approaching Tatoonie your starship was shot down by the Imperial Star Destroyer but you were able to escape " + 
    "in an escape pod and landed on Tatoonie. Now, it is time to find the missing droids."
)

console.log("")



let gameOver = false; 



while(gameOver === false){
    let answer = readlineSync.keyIn("What would you like to do? [w] walk, [i] check inventory, and [q] quit: ", {limit: 'iqw'})
    if (answer === 'q'){
        quit();
    }

    if(answer === 'i'){
        checkInventory();
    }
    
}

function quit(){
    console.log("Game over.")
    gameOver = true;
}

function checkInventory(){
    let startInventory = ['blaster', 'gernade', 'water flask']

    console.log("Here is your inventory: " + startInventory.join(", "))
    console.log("");

}

function startActions(){

}

