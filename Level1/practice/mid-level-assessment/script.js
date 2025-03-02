document.getElementById("changeButton").addEventListener("click", ()=>{
    changeContent('heading', "TEST")
})

function changeContent(elementId, newText){
  document.getElementById(elementId).textContent = newText
}

