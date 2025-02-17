var box = document.createElement("div")
box.setAttribute("id", "box")
box.style.width ="925px";
box.style.height = "925px";
box.style.backgroundColor ="pink"
document.body.append(box)

document.getElementById("box").addEventListener("mouseover", changeBlue)
document.getElementById("box").addEventListener("mousedown", changeRed)
document.getElementById("box").addEventListener("mouseup", changeYellow)
document.getElementById("box").addEventListener("dblclick", changeGreen)




function changeBlue(){
    box.style.backgroundColor = "blue"
}

function changeRed(){
    box.style.backgroundColor = "red"
}

function changeYellow(){
    box.style.backgroundColor = "yellow"
}

function changeGreen(){
    box.style.backgroundColor = "green"
}
function changeOrange(){
    box.style.backgroundColor = "orange"
}

window.addEventListener("scroll", changeOrange)

window.addEventListener("keydown", function (event){
    if(event.key == "b"){
        box.style.backgroundColor = "blue"
    }

    if(event.key == "r"){
        box.style.backgroundColor = "red"
    }

    if(event.key == "y"){
        box.style.backgroundColor = "yellow"
    }

    if(event.key == "g"){
        box.style.backgroundColor = "green"
    }

    if(event.key == "o"){
        box.style.backgroundColor = "orange"
    }
})


