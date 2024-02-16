// ? usse phele ___proto___ smjh loh kya hotah hai kyunke hm wha yehi use krenge 
// ? Object.create(user) yeh bascially yeh kr rha hai kai is kai apne dosre object ki value ko listen kr  sktah jo mainai is kai andr dala hai  Object.create(user) isko ham proto yeh phr [[prototype ]] kehte hai ab ajao next file mai 😁 

// ! ___proto___


const user = {
    "name": "zain",
    "age": 16,
};

const user2 = Object.create(user);

user2.hobby = "coding",

console.log(user2.age);


