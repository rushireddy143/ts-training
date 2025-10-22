// RuntimePolymorphism.ts - Demonstrating Runtime Polymorphism

/**
 * RUNTIME POLYMORPHISM
 *
 * Also known as Dynamic Polymorphism or Late Binding
 * - Method resolution happens at runtime based on actual object type
 * - Includes: Inheritance, Method Overriding, Interface Implementation
 * - Enables flexible, extensible code through common interfaces
 */

// =============================================================================
// 1. ABSTRACT BASE CLASSES AND INHERITANCE
// =============================================================================

abstract class Vehicle {
    protected brand: string;
    protected model: string;
    protected year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Concrete method - same implementation for all subclasses
    getInfo(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    // Abstract methods - must be implemented by subclasses (runtime polymorphism)
    abstract start(): string;
    abstract stop(): string;
    abstract getMaxSpeed(): number;
    abstract getFuelType(): string;

    // Virtual method - can be overridden by subclasses
    honk(): string {
        return '🔊 Generic vehicle sound';
    }

    // Template method pattern - uses polymorphic methods
    displayFullInfo(): void {
        console.log(`\n🚗 Vehicle: ${this.getInfo()}`);
        console.log(`   Fuel: ${this.getFuelType()}`);
        console.log(`   Max Speed: ${this.getMaxSpeed()} km/h`);
        console.log(`   Start: ${this.start()}`);
        console.log(`   Sound: ${this.honk()}`);
        console.log(`   Stop: ${this.stop()}`);
    }
}

// =============================================================================
// 2. CONCRETE IMPLEMENTATIONS - Runtime Polymorphism through Inheritance
// =============================================================================

class Car extends Vehicle {
    private doors: number;

    constructor(brand: string, model: string, year: number, doors: number) {
        super(brand, model, year);
        this.doors = doors;
    }

    // Polymorphic implementations - resolved at runtime
    start(): string {
        return '🔑 Insert key, turn ignition, engine purrs to life';
    }

    stop(): string {
        return '⏹️ Press brake, turn off engine, remove key';
    }

    getMaxSpeed(): number {
        return 200; // km/h
    }

    getFuelType(): string {
        return '⛽ Gasoline';
    }

    // Override parent method
    honk(): string {
        return '📯 Beep beep!';
    }

    // Car-specific method
    openTrunk(): string {
        return `🚗 Opening trunk of ${this.doors}-door car`;
    }
}

class Motorcycle extends Vehicle {
    private engineSize: number;

    constructor(brand: string, model: string, year: number, engineSize: number) {
        super(brand, model, year);
        this.engineSize = engineSize;
    }

    // Different runtime implementations
    start(): string {
        return '🏍️ Kick start, engine roars with power!';
    }

    stop(): string {
        return '🛑 Gear down, engine off, kickstand down';
    }

    getMaxSpeed(): number {
        return 180;
    }

    getFuelType(): string {
        return '⛽ Premium gasoline';
    }

    honk(): string {
        return '📢 Vroom vroom!';
    }

    // Motorcycle-specific method
    wheelie(): string {
        return `🤸 Performing wheelie on ${this.engineSize}cc bike!`;
    }
}

class ElectricCar extends Vehicle {
    private batteryCapacity: number;

    constructor(brand: string, model: string, year: number, batteryCapacity: number) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
    }

    // Electric-specific implementations
    start(): string {
        return '🔋 Silent start - ready to drive electrically';
    }

    stop(): string {
        return '🔌 Regenerative braking, silent stop';
    }

    getMaxSpeed(): number {
        return 250;
    }

    getFuelType(): string {
        return `🔋 Electric (${this.batteryCapacity}kWh battery)`;
    }

    honk(): string {
        return '🎵 Futuristic electric beep!';
    }

    // Electric car specific method
    charge(): string {
        return `⚡ Charging ${this.batteryCapacity}kWh battery`;
    }
}

// =============================================================================
// 3. INTERFACE-BASED RUNTIME POLYMORPHISM
// =============================================================================

interface Drawable {
    draw(): string;
    getArea(): number;
    getPerimeter(): number;
}

interface Colorable {
    setColor(color: string): void;
    getColor(): string;
}

// Multiple interface implementation
abstract class Shape implements Drawable, Colorable {
    protected color: string = 'black';

    abstract draw(): string;
    abstract getArea(): number;
    abstract getPerimeter(): number;

    setColor(color: string): void {
        this.color = color;
        console.log(`🎨 Color set to: ${color}`);
    }

    getColor(): string {
        return this.color;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    draw(): string {
        return `📐 Drawing ${this.color} rectangle (${this.width}x${this.height})`;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    draw(): string {
        return `🔵 Drawing ${this.color} circle (radius: ${this.radius})`;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle extends Shape {
    constructor(private a: number, private b: number, private c: number) {
        super();
    }

    draw(): string {
        return `🔺 Drawing ${this.color} triangle (sides: ${this.a}, ${this.b}, ${this.c})`;
    }

    getArea(): number {
        // Using Heron's formula
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }
}

// =============================================================================
// 4. RUNTIME POLYMORPHISM UTILITIES
// =============================================================================

class PolymorphismDemo {
    // Method that works with any Vehicle (runtime polymorphism)
    static testVehicle(vehicle: Vehicle): void {
        console.log('\n🧪 Testing vehicle polymorphically:');
        vehicle.displayFullInfo();

        // Runtime type checking for specific behaviors
        if (vehicle instanceof Car) {
            console.log(`   Extra: ${vehicle.openTrunk()}`);
        } else if (vehicle instanceof Motorcycle) {
            console.log(`   Extra: ${vehicle.wheelie()}`);
        } else if (vehicle instanceof ElectricCar) {
            console.log(`   Extra: ${vehicle.charge()}`);
        }
    }

    // Method that works with any Drawable object
    static renderShape(shape: Drawable): void {
        console.log('\n🎨 Rendering shape:');
        console.log(`   ${shape.draw()}`);
        console.log(`   Area: ${shape.getArea().toFixed(2)}`);
        console.log(`   Perimeter: ${shape.getPerimeter().toFixed(2)}`);

        if (shape instanceof Shape) {
            console.log(`   Color: ${shape.getColor()}`);
        }
    }

    // Demonstrate method dispatch at runtime
    static processVehicles(vehicles: Vehicle[]): void {
        console.log('\n🚗 Processing vehicle fleet:');
        console.log('-'.repeat(50));

        vehicles.forEach((vehicle, index) => {
            console.log(`\n[${index + 1}] ${vehicle.getInfo()}`);
            console.log(`    Start method: ${vehicle.start()}`);
            console.log(`    Honk method: ${vehicle.honk()}`);
            console.log(`    Fuel type: ${vehicle.getFuelType()}`);
        });
    }

    // Demonstrate interface polymorphism
    static drawShapes(shapes: Drawable[]): void {
        console.log('\n🎨 Drawing shapes collection:');
        console.log('-'.repeat(50));

        shapes.forEach((shape, index) => {
            console.log(`\n[${index + 1}] ${shape.draw()}`);
            console.log(`    Area: ${shape.getArea().toFixed(2)} sq units`);
            console.log(`    Perimeter: ${shape.getPerimeter().toFixed(2)} units`);
        });
    }
}

// =============================================================================
// DEMONSTRATION FUNCTION
// =============================================================================

export function demonstrateRuntimePolymorphism(): void {
    console.log('\n' + '='.repeat(80));
    console.log('🎭 RUNTIME POLYMORPHISM DEMONSTRATION');
    console.log('='.repeat(80));

    console.log('\n🚗 1. INHERITANCE-BASED POLYMORPHISM');
    console.log('-'.repeat(50));

    // Create different vehicle types
    const vehicles: Vehicle[] = [
        new Car('Toyota', 'Camry', 2023, 4),
        new Motorcycle('Harley-Davidson', 'Street 750', 2023, 750),
        new ElectricCar('Tesla', 'Model 3', 2023, 75),
        new Car('BMW', 'X5', 2023, 4),
        new Motorcycle('Yamaha', 'R1', 2023, 1000)
    ];

    // Test individual vehicles (runtime method resolution)
    vehicles.forEach(vehicle => {
        PolymorphismDemo.testVehicle(vehicle);
    });

    // Process all vehicles polymorphically
    PolymorphismDemo.processVehicles(vehicles);

    console.log('\n🎨 2. INTERFACE-BASED POLYMORPHISM');
    console.log('-'.repeat(50));

    // Create different shapes
    const shapes: Drawable[] = [
        new Rectangle(10, 5),
        new Circle(7),
        new Triangle(3, 4, 5)
    ];

    // Set colors (if the shape supports it)
    shapes.forEach((shape, index) => {
        if (shape instanceof Shape) {
            const colors = ['red', 'blue', 'green'];
            shape.setColor(colors[index]);
        }
    });

    // Render shapes polymorphically
    shapes.forEach(shape => {
        PolymorphismDemo.renderShape(shape);
    });

    // Draw all shapes in collection
    PolymorphismDemo.drawShapes(shapes);

    console.log('\n✨ RUNTIME POLYMORPHISM BENEFITS:');
    console.log('- Dynamic method dispatch based on actual object type');
    console.log('- Code flexibility and extensibility');
    console.log('- Uniform interface for different implementations');
    console.log('- Support for plugin architectures');
    console.log('- Late binding enables runtime decision making');

    console.log('\n🔄 METHOD RESOLUTION:');
    console.log('- Compile time: Method signatures are checked');
    console.log('- Runtime: Actual implementation is determined by object type');
    console.log('- Virtual table (vtable) lookup for method dispatch');
}

// Execute the demonstration
demonstrateRuntimePolymorphism();
