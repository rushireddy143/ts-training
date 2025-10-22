class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        // Call the parent class's constructor, MUST be the first statement
        super(name);
        this.breed = breed;
    }

    // New method specific to Dog
    bark() {
        console.log('Woof! Woof!');
    }


}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.move();
console.log(myDog.name); // Accesses inherited property
myDog.bark();
console.log(myDog.move); // Calls subclass-specific method
