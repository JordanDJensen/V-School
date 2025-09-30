

document.add.addEventListener("submit", function(e){
    e.preventDefault();
    let num1 = parseInt(document.add.add1.value)
    
    let num2 = parseInt(document.add.add2.value)
    
    let sum = num1 + num2
    
   let total = document.createElement("h1");
   total.textContent = "Sum: " + sum 

   document.getElementById("add-container").appendChild(total)
    

})