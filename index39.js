// ! nested destructuring



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

const [{userId,firstName},_,] = users;
console.log(userId,firstName);