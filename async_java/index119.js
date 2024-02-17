// ! promise   ( means future value )


// ! how to produce promise
console.log("scripts start");
const bucket = ["vegetable", "rice", "salts", "oil"];

const friedPromise =  new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("rice") && bucket.includes("salts")) {
        resolve("fried rices completed");
    } else {
        reject("Could not do it");
    }
});




// ! how to consume

friedPromise.then((value) => {
    console.log(value);
}).catch((err)=>{
    console.log(err);
    
});



setTimeout(() => {
    console.log("hello from settimeout");
}, 0)

console.log("scripts end");