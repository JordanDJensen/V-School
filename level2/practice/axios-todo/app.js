const listEl = document.querySelector(".list");
const todoForm = document.forms.namedItem("todoForm");

function renderTodoItem(todo, list) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");
  todoDiv.dataset.id = todo._id;

  const h1 = document.createElement("h1");
  h1.textContent = todo.title;

  const h3 = document.createElement("h3");
  h3.textContent = todo.description;

  const p = document.createElement("p");
  p.textContent = todo.price;

  const isCompleteTitle = document.createElement("p");
  isCompleteTitle.textContent = "Is Complete";
  isCompleteTitle.classList.add("is-complete-label");

  const isCompleted = document.createElement("input");
  isCompleted.type = "checkbox";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.type = "button";
  deleteButton.classList.add("delete-btn");

  const image = document.createElement("img");
  image.src = todo.imgUrl || todo.imageUrl || "";
  image.alt = todo.title || "Todo image";

  todoDiv.appendChild(h1);
  todoDiv.appendChild(h3);
  todoDiv.appendChild(p);
  todoDiv.appendChild(image);
  todoDiv.appendChild(isCompleteTitle);
  todoDiv.appendChild(isCompleted);
  todoDiv.appendChild(deleteButton);

  list.appendChild(todoDiv);
}

// Get todo list
axios
  .get("https://api.vschool.io/jordanjensen1/todo/")
  .then((result) => {
    const todoList = result.data;
    for (let i = 0; i < todoList.length; i++) {
      renderTodoItem(todoList[i], listEl);
    }
  })
  .catch((err) => {
    console.log(err);
  });

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
    .then((response) => {
      renderTodoItem(response.data, listEl);
      todoForm.reset();
    })
    .catch((error) => console.log(error));
});

//update todo item to complete

// Delete todo item (delegation: buttons are added after axios loads)
listEl.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;
  const todoDiv = deleteBtn.closest(".todo-item");
  const id = todoDiv?.dataset.id;
  if (!id) return;

  axios
    .delete(`https://api.vschool.io/jordanjensen1/todo/${id}`)
    .then(() => {
      todoDiv.remove();
    })
    .catch((err) => console.log(err));
});
