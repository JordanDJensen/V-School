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
  let start = findMiddleIndex(str)
  let result = str.slice(start, 5)
  
  return result
}
console.log(returnFirstHalf("Hello"))