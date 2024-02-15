
// ! ___proto___  creting a chain or reference

const userMethods = {
    about: function () {
        return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
    },
    singing:
        function () {
            return "Tana na la la la ";
        },
}



function createUser(firstName, lastName, age, hubby,) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName,
        user.age = age;
    user.hubby = hubby;

    return user;


}

const user1 = createUser("zain", "hussain", 16, "coding");
console.log(user1.firstName);
console.log(user1.about());
console.log(user1.singing());
console.log(user1.__proto__);
