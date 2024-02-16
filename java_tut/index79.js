// ! class
// ! in this ( CreateUser ) we are creating a prototype manually but java script also give a class that solve are problem class automatically do this



class CreateUser {
    constructor(firstName, lastName, age, hubby,) {
        this.firstName = firstName;
        this.lastName = lastName,
            this.age = age;
        this.hubby = hubby;

    }

    about() {
        return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
    };
    singing() {
        return "Tana na la la la ";
    };
}


const user1 = new CreateUser("shahzain", "hussain", 12, "coding");
console.log(user1.about());


// function CreateUser(firstName, lastName, age, hubby,) {
//     this.firstName = firstName;
//     this.lastName = lastName,
//         this.age = age;
//     this.hubby = hubby;



// }

// CreateUser.prototype.about = function () {
//     return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
// };

// CreateUser.prototype.singing = function () {
//     return "Tana na la la la ";
// };

