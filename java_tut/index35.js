"use strict"

// ! computed properties

const key1 = "objKey1";
const key2 = "objKey2";
const value1 = "objValue1";
const value2 = "objValue2";

const map = {
    [key1]: value1,
    [key2]: value2,
};

console.log(map);

// * normally we do this 

const map2 = {};
map2[key1] = value1;
map2[key2] = value2;
console.log(map2);