const readlineSync = require('readline-sync');

let character = {
    name: "",
    hp: 100,
    inventory: ['blaster', 'gernade', 'water flask']
}

let enemies =[
    { name: "Jawa", hp: 25, inventory: 10, weapon: 'blaster'},
    { name: "Tusken Raider", hp: 50, inventory: "blaster rifle"},
    { name: "Stormtropper", hp: 65, invetory: 25, weapon: "blaster"}



];

character.name = readlineSync.question("What is your name player? ")

console.log("Welcome to the Rebellion " + character.name + "! We will be flying our starship to the Tatooine system to locate two droids" + 
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

    if(answer === 'w'){
        isWalking()

    }
    
}

function quit(){
    console.log("Game over.")
    gameOver = true;
}

function checkInventory(){
    console.log("Here is your inventory: " + character.inventory.join(", "))
    console.log("");

}

function isWalking(){
    let randomNum = Math.floor(Math.random() * 4)
    if(randomNum === 0){
        let enemy = enemies[Math.floor(Math.random() * enemies.length)]
        console.log(` A ${enemy.name} has appear with ${enemy.hp} hp.`)
        let actions = ["Run", "Fight"]
        let choice = readlineSync.keyInSelect(actions, "What would you like to do?")
        if(actions[choice] === "Run"){
           let isRunning = Math.random() < 0.5

           if(isRunning){
            let scratch = Math.floor(Math.random() * 25) + 1
            character.hp -= scratch;
            console.log(`You were able to escape from the ${enemy.name} but lost ${scratch} hp. (HP: ${character.hp})`)
            return;
           } 

        } 


    } else {
        console.log("keep walking")
    }
    
    // while(enemies[0].hp > 0 && character.hp > 0){
       

        
    // }

}

