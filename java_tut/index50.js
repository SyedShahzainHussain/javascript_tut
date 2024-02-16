// ! callback function

function myFunc(callback) {
    console.log("callback");
    callback();
}

function myFunc2() {
    console.log("function2");
}

myFunc(myFunc2);
