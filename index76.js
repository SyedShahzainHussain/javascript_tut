
// ! prototype only use in function 




// const userMethods = {
//     about: function () {
//         return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
//     },
//     singing:
//         function () {
//             return "Tana na la la la ";
//         },
// }



function createUser(firstName, lastName, age, hubby,) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName,
        user.age = age;
    user.hubby = hubby;

    return user;


}

createUser.prototype.about = function () {
    return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
};

createUser.prototype.singing = function () {
    return "Tana na la la la ";
};


const user1 = createUser("zain", "hussain", 16, "coding");

console.log(user1.about());
console.log(user1.firstName);
console.log(user1);