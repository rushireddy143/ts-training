// AnimalPolymorphism.ts - Demonstrating Polymorphism in TypeScript

// Base abstract class that defines common interface for all animals
abstract class Animal {
    protected name: string;
    protected species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    // Common method that all animals share
    getName(): string {
        return this.name;
    }

    getSpecies(): string {
        return this.species;
    }

    // Abstract methods that MUST be implemented by subclasses
    // This enforces polymorphic behavior
    abstract makeSound(): void;
    abstract move(): void;
    abstract eat(): void;

    // Common method that can be overridden (but doesn't have to be)
    sleep(): void {
        console.log(`${this.name} is sleeping...`);
    }
}

export { Animal };