// ! hasOwnProperty means he only give the that object value not the prototype value



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

for (let key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key);
 }
}





