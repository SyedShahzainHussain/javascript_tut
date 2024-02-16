// ! event objects
// ! when we trigger event so the webbrowser give me the events objects


const button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function (event) {
        console.log(this,event);
    })
}




