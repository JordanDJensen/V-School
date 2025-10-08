

document.forms.add.addEventListener("submit", function(e){
    e.preventDefault();
    let num1 = parseInt(document.forms.add.add1.value)
    
    let num2 = parseInt(document.forms.add.add2.value)
    
    let sum = num1 + num2
    
   const container = document.getElementById("add-container")
   let total = container.querySelector("h1")
   if (!total) {
   	total = document.createElement("h1")
   	container.appendChild(total)
   }
   total.textContent = "Sum: " + sum
    

})

document.forms.sub.addEventListener("submit", function(e){
    e.preventDefault();
    let num1 = parseInt(document.forms.sub.sub1.value)
    let num2 = parseInt(document.forms.sub.sub2.value)

    let subtract = num1 - num2

    const container = document.getElementById("sub-container")
    let total = container.querySelector("h1")
    if(!total){
        total = document.createElement("h1")
        container.appendChild(total)
    }
    total.textContent = "total: " + subtract

})

document.forms.mul.addEventListener("submit", function(e) {
    e.preventDefault();
    let num1 = parseInt(document.forms.mul.mul1.value)
    let num2 = parseInt(document.forms.mul.mul2.value)

    let multiple = num1 * num2

    const container = document.getElementById("mul-container")
    let total = container.querySelector("h1")

    if(!total){
        total = document.createElement("h1")
        container.appendChild(total)
    }
    total.textContent = "Total: " + multiple
})