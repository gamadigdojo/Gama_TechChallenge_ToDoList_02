const input = document.getElementById("input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

function addTask() {
  if (input.value === "") {
    return;
  }

  const task = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.innerText = input.value;
  task.appendChild(taskText);

  const taskDelete = document.createElement("button");
  taskDelete.innerText = "Delete";
  taskDelete.addEventListener("click", deleteTask);
  task.appendChild(taskDelete);

  taskList.appendChild(task);
  input.value = "";
}

function deleteTask(e) {
  e.target.parentElement.remove();
}

addButton.addEventListener("click", addTask);
