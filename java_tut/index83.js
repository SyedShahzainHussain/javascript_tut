// ! static keyword
// ? normal class method or property base on their object or instance
// ? static class method or property base on their class itself



class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
  static get eat() {
        console.log(this.name + " is eating");
    }

    static set eat(name) {
        this.name = name;
    }
    static running() {
        console.log(this.name + " is running");
    }
}


Animal.eat;
Animal.running();