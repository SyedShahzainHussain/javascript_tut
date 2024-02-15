// ! class and extends keyword


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

class Cow  extends Animal{

}


const pet = new Cow("cow",5);
pet.eat();
pet.running();