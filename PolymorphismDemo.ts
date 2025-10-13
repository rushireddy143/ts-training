// PolymorphismDemo.ts - Demonstrating Polymorphism in Action

import { Animal } from './AnimalPolymorphism';
import { Dog, Cat, Bird } from './PolymorphicAnimals';

// Function that demonstrates polymorphism - it accepts any Animal type
// but calls the specific implementation of each subclass
function performAnimalActions(animal: Animal): void {
    console.log(`\n--- Working with ${animal.getName()} (${animal.getSpecies()}) ---`);
    
    // These method calls will execute the specific implementation
    // of each subclass - this is POLYMORPHISM in action!
    animal.makeSound();  // Different sound for each animal type
    animal.move();       // Different movement for each animal type
    animal.eat();        // Different eating behavior for each animal type
    animal.sleep();      // Some override this, others use the default
}

// Function to demonstrate polymorphism with an array of different animals
function demonstratePolymorphicArray(): void {
    console.log("\n" + "=".repeat(60));
    console.log("🎭 POLYMORPHISM DEMONSTRATION WITH ARRAY");
    console.log("=".repeat(60));

    // Create an array of different animal types
    // All are stored as 'Animal' type, but maintain their specific behavior
    const animals: Animal[] = [
        new Dog("Rex", "Golden Retriever"),
        new Cat("Whiskers", true),
        new Bird("Tweety", "Canary", true),
        new Dog("Buddy", "German Shepherd"),
        new Cat("Shadow", false),
        new Bird("Penguin Pete", "Penguin", false)
    ];

    // Iterate through the array and call the same methods
    // Each animal will respond according to its own implementation
    animals.forEach((animal, index) => {
        console.log(`\n[${index + 1}] Processing animal...`);
        performAnimalActions(animal);
    });
}

// Function to demonstrate method overriding and specific behaviors
function demonstrateSpecificBehaviors(): void {
    console.log("\n" + "=".repeat(60));
    console.log("🔧 SPECIFIC BEHAVIORS AND METHOD ACCESS");
    console.log("=".repeat(60));

    const dog = new Dog("Max", "Labrador");
    const cat = new Cat("Luna", true);
    const bird = new Bird("Eagle", "Eagle", true);

    // Access specific methods that are unique to each class
    console.log("\n--- Dog-specific behavior ---");
    dog.fetch(); // Only dogs can fetch

    console.log("\n--- Cat-specific behavior ---");
    cat.climb(); // Only cats can climb (in our example)

    console.log("\n--- Bird-specific behavior ---");
    bird.buildNest(); // Only birds can build nests
}

// Function to explain polymorphism concepts
function explainPolymorphism(): void {
    console.log("\n" + "=".repeat(80));
    console.log("📚 POLYMORPHISM EXPLANATION");
    console.log("=".repeat(80));
    
    console.log(`
🎯 WHAT IS POLYMORPHISM?
Polymorphism means "many forms". It allows objects of different types
to be treated as instances of the same base type, while maintaining
their specific behaviors.

🔑 KEY CONCEPTS DEMONSTRATED:

1. ABSTRACT BASE CLASS (Animal):
   - Defines common interface (makeSound, move, eat)
   - Forces subclasses to implement specific behaviors
   - Provides common properties (name, species)

2. METHOD OVERRIDING:
   - Each subclass provides its own implementation
   - Dog: "Woof!", Cat: "Meow!", Bird: "Tweet!"
   - Same method call, different behavior

3. UNIFORM TREATMENT:
   - Array of Animal[] can hold Dogs, Cats, Birds
   - Same method calls work on all objects
   - Runtime determines which implementation to use

4. LATE BINDING (Dynamic Dispatch):
   - Method resolution happens at runtime
   - TypeScript/JavaScript determines the correct method to call
   - Based on the actual object type, not the reference type

💡 BENEFITS:
- Code Reusability: Write once, use with many types
- Extensibility: Add new animal types without changing existing code
- Maintainability: Common interface makes code easier to understand
- Flexibility: Treat different objects uniformly
    `);
}

// Main execution function
function main(): void {
    console.log("🚀 STARTING POLYMORPHISM DEMONSTRATION");
    
    // Explain the concept first
    explainPolymorphism();
    
    // Demonstrate polymorphism with array processing
    demonstratePolymorphicArray();
    
    // Show specific behaviors and method overriding
    demonstrateSpecificBehaviors();
    
    console.log("\n" + "=".repeat(80));
    console.log("✅ POLYMORPHISM DEMONSTRATION COMPLETE!");
    console.log("=".repeat(80));
}

// Execute the demonstration
main();