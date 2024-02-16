// ! change the anchar tag color

// ! difference between html and Node List Collection



// ! Html Collection  ( Array like object ) iske andr mai  for loop or for of loop laga skta hon agr mujhe list ki tarah mujhe iterate kr na hogah

// const anchorTag = document.getElementsByTagName("a");
// console.log(anchorTag.length);

// for (let index = 0; index < anchorTag.length; index++) {
//     const element = anchorTag[index];
//     element.style.color = "white";
//     element.style.fontSize = "14px";
//     element.style.fontWeight = "bold";
//     element.style.backgroundColor = "black";
//     element.style.border = "2px solid white";
//     element.style.borderRadius = "12px";
//     element.style.padding = "12px";

// }

// ! Node List
let anchorTag = document.querySelectorAll("a");
anchorTag= Array.from(anchorTag);

console.log(typeof anchorTag);
console.log(Array.isArray(anchorTag));

for (let index = 0; index < anchorTag.length; index++) {
    const element = anchorTag[index];
    element.style.color = "white";
    element.style.fontSize = "14px";
    element.style.fontWeight = "bold";
    element.style.backgroundColor = "black";
    element.style.border = "2px solid white";
    element.style.borderRadius = "12px";
    element.style.padding = "12px";

}

