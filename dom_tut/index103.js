// ! some old method

// ? appendChild
// ? insertBefore
// ? replaceChild
// ? removeChild


const todoList = document.querySelector(".todo-list");
const reference= document.querySelector(".todo-list li");

const newTodo = document.createElement("li");

newTodo.textContent = "hello world";
// todoList.appendChild(newTodo);
// todoList.removeChild(newTodo);
// todoList.insertBefore(newTodo,reference);
// todoList.replaceChild(newTodo,reference);

