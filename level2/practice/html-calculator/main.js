

document.add.addEventListener("submit", function(e){
    e.preventDefault();
    let num1 = parseInt(document.add.add1.value)
    
    let num2 = parseInt(document.add.add2.value)
    
    let sum = num1 + num2
    
   const container = document.getElementById("add-container")
   let total = container.querySelector("h1")
   if (!total) {
   	total = document.createElement("h1")
   	container.appendChild(total)
   }
   total.textContent = "Sum: " + sum
    

})

document.sub.addEventListener("submit", function(e){
    e.preventDefault();
    let num1 = parseInt(document.sub.sub1.value)
    let num2 = parseInt(document.sub.sub2.value)

    let subtract = num1 - num2

    const container = document.getElementById("sub-container")
    let total = container.querySelector("h1")
    if(!total){
        total = document.createElement("h1")
        container.appendChild(total)
    }
    total.textContent = "total: " + subtract

})