// ! event behind the scene


console.log("event start!!");

function click() {
    let num = 0;

    for (let index = 0; index <= 100000000; index++) {
        num += index;

    }
    console.log(this, num);
}

const button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", click)



}

let num = 0;

for (let index = 0; index <= 100000000; index++) {
    num += index;

}
console.log( num);

console.log("event end");

