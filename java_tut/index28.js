// ! for loop in array use reference datatype as a constant because he does change. 
// ! the memory of that data is only change the value i mean he add the value.

const array = ["graphes", "mango", "orange", "banana"];

const newArray = [];
for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
}
console.log(newArray);


