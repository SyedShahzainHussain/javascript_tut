// ! function return function

function myFunc() {
    return function myFunc2(){
        return "hello World";
    }
}

const fun = myFunc();
console.log(fun());