
// ! phela wala code shi tha lekin jb hr object kai agr same fucntion pass kr rhe hai toh hm us ka alag sai object bna lenge is se kya hogah kai hamara object jb bhi create hogah toh woh function bar bar create nhi honge jis ki wajah sai memory mai woh baar baar save nhi honge ;  ab hm nai woh common function ek alag object mai dalde ab hm us object kai function kese use kre? simple app ne us ka reference pass kr na hai. sawal yeh hai keh reference pass krne sai woh baar baar create nhi honge ? Answer: No.  Why?  kynke hm uski id le rhe hai jo kke hamre memory mai store hai woh id hm use krenge ayr id kai through woh function call honge ...


// ? ab is code mai bhi ek ayr masla hai 😂 woh masla yeh hai kai jo ham ne function likhe hai ( userMethod ) kai object mai woh function hame baar baar apni ( createUser ) wale function mai refernce dena pregah toh mai nhi chatah kai mai function bhi add kro  ( userMethod ) mai ayr phr us kah reference bhi pass kro . mai chatah hon mai srf function add kro ( userMethod )  object mai ayr woh usko  ( userMethod ) ko automatically detech krde toh kese krenge chlo dekhte hai next file mai 😁

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
