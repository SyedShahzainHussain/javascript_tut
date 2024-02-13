// ! map  return data any


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


const userNames = users.map((user) => user.firstName);
console.log(userNames);