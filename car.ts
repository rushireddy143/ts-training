class Car {

    // Properties initialized to undefined/default for cleaner structure
    brand: string;
    model: string;
    enginecc: number | undefined; // enginecc is optional, so it can be undefined

    // A single, unified constructor implementation handles all the overloads
    // We make parameters optional and set default values/types to cover all cases.
    constructor(brand?: string, model?: string, enginecc?: number) {
        // Use nullish coalescing (??) or logical OR (||) to set defaults
        this.brand = brand ?? 'Unknown Brand';
        this.model = model ?? 'Unknown Model';
        this.enginecc = enginecc; // Leave as undefined if not provided
    }

    displayInfo(): void {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
    }

    displayEngineInfo(): void {
        if (this.enginecc !== undefined) {
            console.log(`Engine CC: ${this.enginecc}`);
        } else {
            console.log('Engine CC not specified.');
        }
    }
}

// 1. Works with both brand and model
const car1 = new Car('VW', 'Taigun');
car1.displayInfo(); // Output: Brand: VW, Model: Taigun

// 2. Works with both brand and model (as intended by original car2)
const car2 = new Car('Skoda', 'Superb');

car2.displayInfo(); // Output: Brand: Skoda, Model: Superb

// 3. Works with both brand and model (as intended by original car3)
const car3 = new Car('Maruthi', 'Victorius');
car3.displayInfo(); // Output: Brand: Maruthi, Model: Victorius

// Example of calling with just one argument (covered by the optional 'model?')
const car4 = new Car('BMW');
car4.displayInfo(); // Output: Brand: BMW, Model: Unknown Model

// Example of calling with no arguments (covered by the optional 'brand?' and 'model?')
const car5 = new Car();
car5.displayInfo(); // Output: Brand: Unknown Brand, Model: Unknown Model

// Example with enginecc
const car6 = new Car('Honda', 'City', 1500);
car6.displayInfo();
car6.displayEngineInfo(); // Output: Engine CC: 1500
