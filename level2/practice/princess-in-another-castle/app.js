class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;

    }

    setName(namePicked){
        this.name = namePicked;
    }

    gotHit(){
        if(this.status == "Power Up"){
            this.status = "Big"
        } else if(this.status == "Big"){
            this.status = "Small"
        } else {
            this.status = "Dead"
        }
    }

    gotPowerUp(){
        if(this.status == "Small"){
            this.status = "Big"
        } else if(this.status == "Big"){
            this.status = "Power Up"
        } else {
            this.hasStar = true;
        }
    }

    addCoin(totalCoins = 0){
        this.totalCoins++;
    }

    print(){
        console.log(`Name: ${this.name} Status: ${this.status} TotalCoins: ${this.totalCoins}` )
    }

    getRandom(){
        return Math.floor((Math.random() * 3))
    }
}

let mario = new Player("Mario", 0, "Power Up", false)

let gameOver = false;

// while (gameOver != true){
    
//     let rand = mario.getRandom();

//     if(rand == 0){
//         mario.gotHit();
//         mario.print();

//         if()
//     }
//     // else if(rand == 1){
//     //     console.log("bye")
//     // } else {
//     //     console.log("hola")
//     // }


// }




