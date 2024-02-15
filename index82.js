// ! getter and setter
// ? getter means mai kisi function ko property ki tarah treat kro ayr koi data merea change nah kr ske mai srf usko woh data get krwao ;

// ? setter kai throush mai data change krta hon ayr setter ko bhi property ki tarah treat kr ta hon ;


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
   get eat() {
        console.log(this.name + " is eating");
    }

    set eat(name) {
        this.name = name;
    }
    running() {
        console.log(this.name + " is running");
    }
}


const cat = new Animal("cat", 3);
cat.eat;

cat.eat = "cow";

cat.eat;
