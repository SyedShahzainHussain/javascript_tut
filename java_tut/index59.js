// ! every method is return true or false in dart is use every method


// var list = [
//     1,2, 4, 6, 8,
// ];

// var isEven = list.every((number) => number % 2 == 0);
// console.log(isEven);





var data = [
    {
        "ProductId": 1,
        "ProductTitle": "shirt",
        "price": 200,
    },
    {
        "ProductId": 5,
        "ProductTitle": "t-shirt",
        "price": 400,
    },
    {
        "ProductId": 3,
        "ProductTitle": "aeans",
        "price": 100,
    },
];



var checkPriceisLessThen500 = data.every((data) => data.price < 500);
console.log(checkPriceisLessThen500);