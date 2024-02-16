// ! innerHtml is use for only if we change the whole innerHtml

const todoList = document.querySelector(".todo-list");
todoList.innerHTML += "<li> hello </li> "
todoList.innerHTML += "<li> teach Students </li> "

console.log(todoList.innerHTML);