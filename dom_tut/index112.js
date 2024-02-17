// ! event bubbling and capturing
// ? bubbling tb hogah jb event same hogah wrna ek event trigger hogah
// ? capturing tb hogah jb event same hogah wrna ek event trigger hogah


const body = document.body;
const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');



// ? bubbling
body.addEventListener("click", function (event) {
    console.log("body bubbling");
});

grandParent.addEventListener("click", function (event) {
    console.log("grandparent bubbling");
});


parent.addEventListener("click", function (event) {
    console.log("parent bubbling");
});


child.addEventListener("click", function (event) {
    console.log("child bubbling");
});

// ? capturing    
body.addEventListener("click", function (event) {
    console.log("body capturing");
},true);

grandParent.addEventListener("click", function (event) {
    console.log("grandparent capturing");
},true);


parent.addEventListener("click", function (event) {
    console.log("parent capturing");
},true);


child.addEventListener("click", function (event) {
    console.log("child capturing");
},true);