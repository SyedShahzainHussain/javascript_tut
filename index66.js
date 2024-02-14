// ! object assign  means copy
var data = { "name": "shahzain", "age": 12 };
// var data2 = {...data};
var data2 = Object.assign({},data);
// console.log(data);
// console.log(data2);

data.name2 = "ali";
console.log(data);
console.log(data2);

