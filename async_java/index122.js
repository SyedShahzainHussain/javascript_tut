// ! promise.resolve
// ! promise chain



const promises =  Promise.resolve(5);

promises.then((value) => {
    console.log(value);
});



// ? chain promise

function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    });
}

myPromise().then((value) => {
    console.log(value);
    value += "bar";
    return value;
}).then((value2) => {
    console.log(value2);
});