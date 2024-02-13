// ! rest parameter

function myFunc(name, age = 1, ...rest) {
    console.log(name + age);
    console.log(name, age);
    console.log(rest);
}

myFunc(10, 1, 12121312312);
