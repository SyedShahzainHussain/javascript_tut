// ! innerHtml  means inside the div or section

const inner = document.querySelector(".header");
inner.innerHTML = "<h1>hello<h1/>";
inner.innerHTML += "<button>hello<button/>";
console.log(inner.innerHTML);
