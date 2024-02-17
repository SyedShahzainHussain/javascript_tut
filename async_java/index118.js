// ! asynchronous callback
// ! callback hell
// ! paramid

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// ? callback hell
// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "Violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple";
//     }, 2000);
//     setTimeout(() => {
//         heading3.textContent = "three";
//         heading3.style.color = "red";
//     }, 3000);
//     setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//     }, 4000);
//     setTimeout(() => {
//         heading5.textContent = "five";
//         heading5.style.color = "green";
//     }, 5000);
//     setTimeout(() => {
//         heading6.textContent = "six";
//         heading6.style.color = "blue";
//     }, 6000);

//     setTimeout(() => {
//         heading7.textContent = "seven";
//         heading7.style.color = "brown";
//     }, 7000);
// }, 1000);

// ? second way of paramid of dom or callback hell

function changeText(element, color, text, time, onSuccess, onFailure) {
  setTimeout(() => {
    if (element) {
      element.changeText = text;
      element.style.color = color;
      if (onSuccess) {
        onSuccess();
      }
    } else {
      if (onFailure) {
        onFailure();
      }
    }
  }, time);
}

changeText(
  heading1,
  "violet",
  "one",
  1000,
  () => {
    changeText(
      heading2,
      "purple",
      "two",
      2000,
      () => {
        changeText(
          heading3,
          "red",
          "three",
          3000,
          () => {
            changeText(
              heading4,
              "pink",
              "four",
              4000,
              () => {
                changeText(
                  heading5,
                  "green",
                  "five",
                  5000,
                  () => {
                    changeText(
                      heading6,
                      "blue",
                      "six",
                      6000,
                      () => {
                        changeText(
                          heading7,
                          "brown",
                          "seven",
                          7000,
                          () => {},
                          () => {
                            console.log("headline7 is not present");
                          }
                        );
                      },
                      () => {
                        console.log("headline6 is not present");
                      }
                    );
                  },
                  () => {
                    console.log("headline5 is not present");
                  }
                );
              },
              () => {
                console.log("headline4 is not present");
              }
            );
          },
          () => {
            console.log("headline3 is not present");
          }
        );
      },
      () => {
        console.log("headline2 is not present");
      }
    );
  },
  () => {
    console.log("headline1 is not present");
  }
);
