
// ? is code kai andr hm ne ab ek function banaya ayr uske ander ek object ayr object ki value parameter sai accept ki aur object return krwadya.. phele hm object ko baar baar create kr rhe the lekin ab code readable hogya lekin isme bhi ek masla hai  jb object create hogah toh function dobara sai create honge jis ki wajah sai memory allocated hogi ab isko solve krte hai ;



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




