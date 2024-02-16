// ! spread operator with objects


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


const newArray = [...array1, ..."12223"];
console.log(newArray);


const obj1 = {
    key1: "key1",
    key2: "key2",
};


const obj2 = {
    key3: "key3",
    key4: "key4",
};


const newObject = {
    ...obj1,
    ...obj2,
    ..."abcdefghijklmnopqrstuvwxyz",
};

console.log(newObject);