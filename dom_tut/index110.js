// ! little practise with click event


const button = document.querySelectorAll("button");
for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", function (event) {
        console.log(this);
        event.target.style.color = "white";
        event.target.style.backgroundColor = "blue";
    });
}

