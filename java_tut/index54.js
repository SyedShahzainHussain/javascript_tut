// ! filter  in dart is use as a where method   ( return the whole data )
const list = [1, 2, 3, 4, 5, 6, 7, 8];

// var evenNumbers = list.filter((numbers) => numbers % 2 === 0);

// console.log(evenNumbers);

var oddNumbers = list.filter((numbers) => numbers % 2 !== 0);

console.log(oddNumbers);

