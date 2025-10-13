// Dog1.ts
import { Animal1 } from './Animal1';

class Dog1 extends Animal1 {
    breed: string;

    constructor(name: string, breed: string) {
        // Call the parent class's constructor, MUST be the first statement
        super(name);
        this.breed = breed;
    }

    // New method specific to Dog
    bark(): void {
        console.log('Woof! Woof!');
    }
}

// --- Execution ---
let myDog1 = new Dog1("Buddy", "Golden Retriever");

myDog1.move(5); 
console.log(myDog1.name); 
myDog1.bark(); 

// 🐛 FIX: Calling the move method with parentheses
myDog1.move();