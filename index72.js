


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
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName,
        user.age = age;
    user.hubby = hubby;
    user.about = userMethods.about;
    user.singing = userMethods.singing;
    return user;


}

const user1 = createUser("shahzain", "hussain", 16, "coding");
console.log(user1.firstName);
console.log(user1.about());
console.log(user1.singing());

const user2 = createUser("hassan", "hussain", 16, "programming");
console.log(user2.firstName);
console.log(user2.about());
console.log(user2.singing());
