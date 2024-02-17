// ! setInterval

// ? setInterval is an async function is also return an id and is called every time when

// console.log("Set Time Start");

// var id = setInterval(() => {
//     console.log(Math.random());
//  console.log("inside setTimeout");
// },1000);


// // ?  clearTimeout(id); is clear the timeout
// clearTimeout(id);
// console.log("Set Time End");
// console.log(id);


// ? real example

const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random() * 126);
    const color = `rgb(${red}, ${green}, ${blue})`;
    console.log(color);
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
},5000);

