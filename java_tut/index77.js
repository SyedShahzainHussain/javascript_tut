// ! new Keyword

// ? 1.) give an empty object {} ;
// ? 2.) return the object also  ;
// ? 3.) and also create the chain of that object 

// function CreateUser(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;

// }


// const user1 = new CreateUser("shahzain", 12);
// CreateUser.prototype.hooby = "sound";
// console.log(user1.hooby);



function CreateUser(firstName, lastName, age, hubby,) {
    this.firstName = firstName;
    this.lastName = lastName,
        this.age = age;
    this.hubby = hubby;


 
}

CreateUser.prototype.about = function () {
    return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
};

CreateUser.prototype.singing = function () {
    return "Tana na la la la ";
};




const user1 = new CreateUser("shahzain", "hussain", 12,"coding")
console.log(user1.hubby);


