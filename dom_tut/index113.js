// ! event delagation
// ? why we use delgation  agr hamre pss parent child and child to parent hai ayr us me mujhe same vent lagane hai toh mai event delegation ko use krongah

const body = document.body;
const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');




grandParent.addEventListener("click", function (event) {
    console.log("grandparent bubbling");
    console.log(event.target);
},);


