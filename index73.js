// ? usse phele ___proto___ smjh loh kya hotah hai kyunke hm wha yehi use krenge 

// ! ___proto___


const user = {
    "name": "zain",
    "age": 16,
};

const user2 = Object.create(user);

user2.hobby = "coding",

console.log(user2.age);


