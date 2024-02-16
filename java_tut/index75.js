// ! prototype only use in function   when function is decalre is give an empty space means an empty objects that is called prototype;

// ! in javascript the function is a combo of object is means in function we can use object

function hello() {
    console.log("hello");
}

hello();

hello.prototype.firstname = "zain";
console.log(hello.prototype.firstname);


