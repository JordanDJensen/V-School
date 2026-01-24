// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type number:

function sum(x, y){

try{
    if(typeof x !== "number" || typeof y !== "number"){
        throw "not a number"
    }
    return x + y;
} catch(err){
    console.log(err);
}
    
}


sum("hello", 1)
sum(1, "bye")
console.log(sum(1, 1))

try{
    console.log(sum("1", "2"))
}catch(err){
    console.log(err)
}

// 2a) Given a user object, write a function called login that 
// takes a username and password as parameters. Throw an error 
// if either of them don't match. Otherwise, log to the console 
// a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  try {
    if(username !== user.username || password !== user.password){
        throw new Error ("username or password incorrect!")
    }
        console.log("login successful!")
  } catch (error) {
        console.log(error)
  }
}

try {
    login("sam", "123abc")
    login("sam", "134abc")
    
} catch (error) {
    console.log(error)
}

// login("sam", "123abc")
// console.log("Second test:")
// login("sam", "134abc")