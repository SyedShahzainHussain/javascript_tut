// ! hoisting  only declare function is call before declare

hello();

function hello() {
    console.log("hello");
}


console.log(a); // ! before calling a variable is give undefined 
var a = 156;
console.log(a);
