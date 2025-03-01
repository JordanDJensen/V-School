let todoList = document.getElementById("list")


document.addItem.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    let addListItem = document.createElement("li")
    let taskName = document.createElement("div")

    let editBtn = document.createElement("button")
    let xBtn = document.createElement("button")
    

    todoList.appendChild(addListItem)

    let text = document.getElementById("title")
    taskName.textContent = text.value

    addListItem.appendChild(taskName)
    text.value = " "


    editBtn.textContent = "edit"
    xBtn.textContent = "X"
    addListItem.appendChild(editBtn)
    addListItem.appendChild(xBtn)

    xBtn.addEventListener("click", ()=>{
        todoList.removeChild(addListItem)
    })
    
    
})















