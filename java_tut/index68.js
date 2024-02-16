// ! method
// ! inside object function is called method

// ? this means the current objects  and arrow function dont have this if u use the arrow function is give u the lexical opject means windows 

const person = {
    firstName: "zain",
    "address": { "houseNumber": "12345" },
    "about": function () {
        return console.log(this.firstName);
    },


};

person.about();



