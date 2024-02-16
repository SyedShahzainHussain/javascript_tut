// ! static and live list
// ? querySelector are static list
// ? getElementBySomeThing are live list


// const todo = document.querySelector(".todo-list");
// const listItem = document.querySelector(".todo-list li");
// const newTodo = document.createElement("li");
// newTodo.textContent = "hello";

// todo.append(newTodo);

// console.log(listItem);


const todo = document.querySelector(".todo-list");
const listItem = document.getElementsByTagName("li");
const newTodo = document.createElement("li");
newTodo.textContent = "hello";

todo.append(newTodo);

console.log(listItem);

