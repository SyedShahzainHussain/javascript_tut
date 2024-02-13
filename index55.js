//! reduce method
const list = [
    {
        "name": "shahzain",
        "age": 15,
        "price": 200,
    },
    {
        "name": "hassan",
        "age": 18,
        "price": 400,
    },
];

var totalAmount = list.reduce((accumalate, currentValue) => accumalate+ currentValue["price"], 0);

console.log(totalAmount);