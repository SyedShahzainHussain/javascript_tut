// ! lexical scope
var myVar = 12;

function myApp() {

    function hello() {
        console.log(myVar);
    }
    console.log("lexical");
    hello();

}



myApp();
