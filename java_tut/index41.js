// ! function expression


const checkTarget = function (array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(checkTarget([1, 2, 3, 4, 5, 6], 4));