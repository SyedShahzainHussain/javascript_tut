// ! this in event







const button = document.querySelector(".btn");

// button.onclick = ()=>{
//     console.log("hello");
// }

 function button2 () { console.log("hello world", this); }

button.addEventListener("click", button2)
