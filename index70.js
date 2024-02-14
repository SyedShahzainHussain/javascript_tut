// ! create multip funcation and ojects


const user1 = {
    "firstName": "shahzain",
    "lastName": "hussain",
    "age": 17,
    "hubby": "Coding",
    "about": function () {
        return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
    },
    "singing":
        function () {
            return "Tana na la la la ";
        },
};

const user2 = {
    "firstName": "hassan",
    "lastName": "hussain",
    "age": 17,
    "hubby": "developing",
    "about": function () {
        return "My name is " + this.firstName + " " + this.lastName + " and my age is " + this.age;
    },
    "singing":
        function () {
            return "La la la la la ";
        },
};
// ! user 1
console.log(user1.about());
console.log(user1.firstName);
console.log(user1.lastName);
console.log("");
// ! user 2
console.log(user2.about());
console.log(user2.firstName);
console.log(user2.lastName);