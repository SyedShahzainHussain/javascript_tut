// ! compilation hogah
// ! code execute hogah

// ! global execution context create hogah
// ! 1. create Phase
// ! 2. code execution phase



console.log(this);
console.log(window);
console.log(firstName);
var firstName = "zain";
console.log(firstName);
helo();

const helo =  function () {
    console.log("helo");
}
