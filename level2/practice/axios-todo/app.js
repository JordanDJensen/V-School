axios.get("https://api.vschool.io/jordanjensen1/todo/").then((result) => {
    let todoList = result.data
    for(let i = 0; i < todoList.length; i++){
      let list =  document.getElementsByClassName("list")[0]
      let h1 = document.createElement("h1");
      h1.textContent = todoList[i].title
    list.appendChild(h1)
    }
}).catch((err) => {
    console.log(err)
});