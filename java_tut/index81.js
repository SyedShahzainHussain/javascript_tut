// ! super keyword  


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(this.name + " is eating");
    }
    running() {
        console.log(this.name + " is running");
    }
}

class Cow extends Animal{
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }


}


const cow = new Cow("bachra", 1, "brown");
console.log(cow);



