// PolymorphicAnimals.ts - Different animal implementations demonstrating polymorphism

import { Animal } from './AnimalPolymorphism';

// Dog class - implements Animal's abstract methods with dog-specific behavior
class Dog extends Animal {
    private breed: string;

    constructor(name: string, breed: string) {
        super(name, "Canine");
        this.breed = breed;
    }

    // Polymorphic implementation - Dog's way of making sound
    makeSound(): void {
        console.log(`${this.name} the ${this.breed} says: Woof! Woof! 🐕`);
    }

    // Polymorphic implementation - Dog's way of moving
    move(): void {
        console.log(`${this.name} runs on four legs, wagging tail! 🏃‍♂️`);
    }

    // Polymorphic implementation - Dog's way of eating
    eat(): void {
        console.log(`${this.name} chomps on dog food and bones! 🦴`);
    }

    // Dog-specific method
    fetch(): void {
        console.log(`${this.name} fetches the ball and brings it back! 🎾`);
    }
}

// Cat class - implements Animal's abstract methods with cat-specific behavior
class Cat extends Animal {
    private indoor: boolean;

    constructor(name: string, indoor: boolean = true) {
        super(name, "Feline");
        this.indoor = indoor;
    }

    // Polymorphic implementation - Cat's way of making sound
    makeSound(): void {
        console.log(`${this.name} the cat says: Meow! Purr... 🐱`);
    }

    // Polymorphic implementation - Cat's way of moving
    move(): void {
        console.log(`${this.name} gracefully stalks and pounces silently! 🐾`);
    }

    // Polymorphic implementation - Cat's way of eating
    eat(): void {
        console.log(`${this.name} delicately nibbles on cat food and fish! 🐟`);
    }

    // Override the sleep method with cat-specific behavior
    sleep(): void {
        console.log(`${this.name} curls up in a sunny spot and purrs while sleeping... 😴`);
    }

    // Cat-specific method
    climb(): void {
        console.log(`${this.name} climbs up the cat tree with agility! 🌳`);
    }
}

// Bird class - implements Animal's abstract methods with bird-specific behavior
class Bird extends Animal {
    private canFly: boolean;

    constructor(name: string, species: string = "Avian", canFly: boolean = true) {
        super(name, species);
        this.canFly = canFly;
    }

    // Polymorphic implementation - Bird's way of making sound
    makeSound(): void {
        console.log(`${this.name} the bird says: Tweet! Chirp! 🐦`);
    }

    // Polymorphic implementation - Bird's way of moving
    move(): void {
        if (this.canFly) {
            console.log(`${this.name} soars through the sky with graceful wings! ✈️`);
        } else {
            console.log(`${this.name} hops around on the ground! 🦆`);
        }
    }

    // Polymorphic implementation - Bird's way of eating
    eat(): void {
        console.log(`${this.name} pecks at seeds and small insects! 🌱`);
    }

    // Bird-specific method
    buildNest(): void {
        console.log(`${this.name} carefully builds a nest with twigs and leaves! 🏠`);
    }
}

export { Dog, Cat, Bird };