// ! funtions declaration
 
// function sum() {
//     console.log(5+5);
// }
// sum();


// function isEven(number) {
//     return number % 2 === 0;
// }
// console.log(isEven(1));


function checkTarget(array,target) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === target) {
            return i;
        }
    }
    return -1;

} 

console.log(checkTarget([1, 2, 3, 4, 5, 6], 4));