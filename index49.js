// ! param destructuring

const map = { "name": "syed", "age": 12 };

function myFunc({name,age}){
    console.log(age,name);
}

myFunc(map);