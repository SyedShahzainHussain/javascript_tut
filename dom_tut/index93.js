// ! get and set attributes

const navItem = document.querySelector("a");
// const navhref= navItem.getAttribute("href");

console.log(navItem.getAttribute("href"));
const navhref = navItem.setAttribute("href","https://www.google.com");

console.log(navItem.getAttribute("href"));

