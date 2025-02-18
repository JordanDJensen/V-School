var title = document.createElement("h1")
var createP = document.createElement("p")

var header =document.getElementById('header')




title.textContent = "JavaScript Made This!!"
title.style.textAlign = "center"

createP.innerHTML += "<span id='jordan'>Jordan</span> wrote the JavaScript!"
createP.style.textAlign = "center"
createP.style.fontWeight = "bold"


header.append(title)
header.append(createP)

var myName = document.getElementById("jordan")
myName.style.color ="blue"

var messages = document.getElementsByClassName("message")
messages[0].textContent = "Knock Knock"
messages[1].textContent = "Who's there?"
messages[2].textContent = "Woo."
messages[3].textContent = "Woo. Who?"



document.getElementById("clear-button").addEventListener("click", deleteConvo);

function deleteConvo(){
    var messages = document.querySelectorAll(".message")

    for(var i = 0; i < messages.length; i++){
        messages[i].remove()
    }
}

var selectElement = document.getElementById("theme-drop-down")
var left = document.getElementsByClassName("left")
var right = document.getElementsByClassName("right")

selectElement.addEventListener("change", function(){
    var selectedValue = this.value 
    if(selectedValue == "theme-one"){
        for(var i = 0; i <left.length; i++){
            left[i].style.backgroundColor = "brown"
        }
        for(var i = 0; i < right.length; i++){
            right[i].style.backgroundColor = "blue"
            right[i].style.color = "white"
        }
        
    } else {
        for(var i = 0; i < left.length; i++){
            left[i].style.backgroundColor = "black"
            left[i].style.color = "white"
        }

        for(var i = 0; i < right.length; i++){
            right[i].style.backgroundColor = "red"
        }
    }
})





