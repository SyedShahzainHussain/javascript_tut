// ! find method  in dart is use firstwhere
// ?(return the single the data )


// var list = [1, 2, 3, 4, 5, 6, 7];
var list = ["abc", "abcd", "abcdef", "abcdefg"];


list.find((string)=>{
   return string.length === 4;
});



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


var findData = data.find((data) => data.price == 100);
console.log(findData);


