// Get todo list
axios
  .get("https://api.vschool.io/jordanjensen1/todo/")
  .then((result) => {
    let todoList = result.data;
    let list = document.querySelector(".list");
    console.log(todoList);
    for (let i = 0; i < todoList.length; i++) {
      let todoDiv = document.createElement("div");
      todoDiv.classList.add("todo-item");

      let h1 = document.createElement("h1");
      h1.textContent = todoList[i].title;

      let h3 = document.createElement("h3");
      h3.textContent = todoList[i].description;

      let p = document.createElement("p");
      p.textContent = todoList[i].price;

      let isCompleteTitle = document.createElement("p");
      isCompleteTitle.textContent = "Is Complete";
      isCompleteTitle.id = "test";

      let isCompleted = document.createElement("input");
      isCompleted.type = "checkbox";

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");

      let image = document.createElement("img");
      image.src = todoList[i].imgUrl;
      image.alt = todoList[i].title || "Todo image";

      todoDiv.appendChild(h1);

      todoDiv.appendChild(h3);

      todoDiv.appendChild(p);

      todoDiv.appendChild(image);

      todoDiv.appendChild(isCompleteTitle);

      todoDiv.appendChild(isCompleted);

      todoDiv.appendChild(deleteButton);

      list.appendChild(todoDiv);
    }
  })
  .catch((err) => {
    console.log(err);
  });

const todoForm = document.todoForm;

// Add new todo item
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    price: todoForm.price.value,
    description: todoForm.description.value,
    imageUrl: todoForm.imageUrl.value,
  };

  axios
    .post("https://api.vschool.io/jordanjensen1/todo/", newTodo)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
});

//update todo item to complete
