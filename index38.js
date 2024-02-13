// ! object inside array
// ! very usefull in real world application

const users = [
    {
        "userId":1,"firstName":"zain",
    },
    {
        "userId":2,"firstName":"shah",
    },
    {
        "userId":3,"firstName":"shahzain",
    },
];

for (const iterator of users) {
    console.log(iterator.firstName,iterator.userId);
}

for (const iterator in users) {
    console.log(users[iterator].firstName,users[iterator].userId);
}