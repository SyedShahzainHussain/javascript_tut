// ! asynchronous use callback


function sum(callback) {
    callback(5,3);
}


function add(num,num2) {
    console.log(num+num2);
}
function minus(num,num2) {
    console.log(num-num2);
}




sum(minus);