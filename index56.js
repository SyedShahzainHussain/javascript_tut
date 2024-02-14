// ! sort method  in dart also use sort   ( update the original array )


const list = [9, 5,  600,200];


const map = [
    {
        "ProductId": 1,
        "ProductTitle": "shirt",
        "price":200,
    },
    {
        "ProductId": 5,
        "ProductTitle": "t-shirt",
        "price":400,
    },
    {
        "ProductId": 3,
        "ProductTitle": "aeans",
        "price":100,
    },
];

//  list.sort((a,b)=>a-b);
// console.log(list);


map.sort((a,b)=>b.price-a.price);
console.log(map);