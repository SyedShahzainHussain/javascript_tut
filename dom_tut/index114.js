// ! last tast add todo with event and delagation


const formTodo = document.querySelector(".form-todo");
const formText = document.querySelector(".form-todo input[type='text']");
const oldli = document.querySelector(".todo-list");

formTodo.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formText.value == "") {
        return;
    }
    const newTodoText = formText.value;
    formText.value = "";
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;

    newLi.innerHTML = newLiInnerHtml;

    oldli.append(newLi);



})

oldli.addEventListener("click", (e) => {
    if (e.target.classList.contains("done")) {
        const span = e.target.parentNode.previousElementSibling;
        console.log(span);
        span.style.textDecoration = "line-through";
    }
    if (e.target.classList.contains("remove")) {
        const li = e.target.parentNode.parentNode;
        li.remove();
    }
})