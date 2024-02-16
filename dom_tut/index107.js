// ! create event on multiple button

const button = document.querySelectorAll("button");

// for (let i = 0; i < button.length; i++){
//     button[i].addEventListener("click", function () {
//         console.log(this);
//     })
// }


for (const iterator of button) {
    iterator.addEventListener("click",function () {
        console.log(this);
    })
}

