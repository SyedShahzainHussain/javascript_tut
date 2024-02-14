


function createUser(firstName, lastName, age, hubby,) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName,
        user.age = age;
    user.hubby = hubby;
    user.about = function () {
        return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
    };
    user.singing =
        function () {
            return "Tana na la la la ";
        };
    return user;


}


const user1 = createUser("shahzain", "hussain", 16, "coding");
const user2 = createUser("hassan", "hussain", 22, "programming");
console.log(user1.firstName);
console.log(user2.firstName);




