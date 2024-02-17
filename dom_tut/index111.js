// ! keypress event
// ! mouseover event

const body = document.body;
const button = document.querySelector(".btn");
// body.addEventListener("keypress", function (event){
    
//     console.log(event.key);
// });


button.addEventListener("mouseover", function (event){
    event.target.style.color = "white";
    event.target.style.backgroundColor = "black";
    console.log(event.type);
});

button.addEventListener("mouseleave", function (event){
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
    console.log(event.type);
});