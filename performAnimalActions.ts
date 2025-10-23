// Abstract class with abstract and concrete methods
abstract class performAnimalActions {
    constructor(public name: string) {}

    // Abstract method
    abstract makeSound(): void;

    // Concrete method
    move(): void {
        console.log(`${this.name} is moving...`);
    }
}

// Concrete class that implements the abstract class
class DogEx1 extends performAnimalActions {
    makeSound(): void {
        console.log("Woof ! Woof!");
    }
}

// Usage
const dog1 = new DogEx1('Tommy');
dog1.makeSound();
dog1.move();
