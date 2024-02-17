// ! setTimeOut

// ? setTimeOut is an async dunction is also return an id 

console.log("Set Time Start");

var id = setTimeout(() => {
    console.log(Math.random());
 console.log("inside setTimeout");
},1000);


console.log("Set Time End");
console.log(id);