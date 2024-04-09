//your code here

document.addEventListener("DOMContentLoaded", function() {
  const newTodoInput = document.getElementById("newTodoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener("click", function() {
    const todoText = newTodoInput.value.trim(); // Trim to remove leading/trailing spaces

    if (todoText) { // Check if input is not empty
      const newTodoItem = document.createElement("li");
      newTodoItem.textContent = todoText;
      todoList.appendChild(newTodoItem);
      newTodoInput.value = ""; // Clear input after adding todo
    } else {
      alert("Please enter a valid todo item.");
    }
  });
});
