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
            this.hasStar++
        } else {
            this.hasStar = true;
        }
    }

    addCoin(totalCoins = 0){
        this.totalCoins++;
    }

    print(){
        console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotalCoins: ${this.totalCoins} \n` )
    }

    getRandom(){
        return Math.floor((Math.random() * 3))
    }
}

let mario = new Player("Mario", 0, "Power Up", false)

let gameOver = false;

let gameInterval = setInterval(() =>{
    
    let rand = mario.getRandom();

    if(rand == 0){
        mario.gotHit();
       
    } else if(rand == 1){
        mario.gotPowerUp();
    } else {
        mario.addCoin();
    }
    mario.print();

     if(mario.status == "Dead"){
            console.log("Game Over")
            gameOver = true;
            clearInterval(gameInterval);
        }


}, 3000 );

// mario.gotHit();
// mario.print();
// mario.addCoin();
// mario.print();
// mario.gotPowerUp();
// mario.print();


