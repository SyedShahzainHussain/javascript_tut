// ! createElement
// ! append  add in last of the element
// ! prepend add in first of the element
// ! remove remove the element
// ! before add before of the element
// ! after add after of the element



const newTodo = document.createElement("li");
newTodo.textContent = "hello world";

const oldTodo = document.querySelector(".todo-list");
// oldTodo.append(newTodo);
// oldTodo.prepend(newTodo);
// oldTodo.remove(newTodo);
// oldTodo.before(newTodo);
// oldTodo.after(newTodo);
// console.log(oldTodo);