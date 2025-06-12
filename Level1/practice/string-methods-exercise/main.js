function capitalizeAndLowercase(str){
   let result = str.toUpperCase() + str;

    return result 
}

console.log(capitalizeAndLowercase("Hello"))

function findMiddleIndex(str){
    let result = str.length / 2
    


    return Math.floor(result)
}

console.log(findMiddleIndex("Hello World"))

function returnFirstHalf(str){
  let middle = findMiddleIndex(str)
  let result = str.slice(0, middle)
  
  return result
}
console.log(returnFirstHalf("Hello"))
console.log(returnFirstHalf("Hello World"))

function capitalizeAndLowercase(str){
    let middle = str.length / 2 
    

     if(middle % 2 !== 0){
        middle = Math.floor(middle) 
     } 
       let firstHalf = str.slice(0, middle)
       let secondHalf = str.slice(middle, str.length)
     

    return firstHalf.toUpperCase() + secondHalf.toLowerCase()

}
console.log(capitalizeAndLowercase("Hello World"))