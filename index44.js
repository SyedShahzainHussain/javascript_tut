// ! function inside function

function hello() {
    function hello2() {
        return 2 + 5;
    }
    const a = function () {
        console.log("done");
    }
    const arrow = () => console.log("arrow");

    console.log("hello");
    console.log(hello2());
    a();
    arrow();

}
hello();

