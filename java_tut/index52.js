// ! forEach - forEach accept  the callback function
// !  in dart also
// ? (which return nothing)

const list = [4, 2, 3, 1];


function myFunc(numbers) {
    console.log(numbers * 2);
}
// list.forEach(myFunc);


const users = [
    {
        "firstName": "syedshahzain", "age": 12,
    },
    {
        "firstName": "arham", "age": 22,
    },
    {
        "firstName": "fakhir", "age": 32,
    },
    {
        "firstName": "hassan", "age": 10,
    },


];

// for (const user of users) {
//     console.log(user.firstName);

// }

var a = users.forEach((user) => {
    return user;
});

console.log(a);