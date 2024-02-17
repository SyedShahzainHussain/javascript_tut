const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, color, text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.changeText = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

changeText(heading1, "green", "one").then((_) => {
 return changeText(heading2, "blue", "two");
}).then((_) => {
   return changeText(heading3, "red", "three");
}).then((_) => {
    return changeText(heading4, "orange", "four");
}).then((_) => {
    return changeText(heading5, "purple", "five");
}).then((_) => {
    return changeText(heading6, "grey", "six");
}).then((_) => {
    return changeText(heading7, "yellow", "seven");
});
