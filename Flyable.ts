interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyable, Swimmable {
    fly(): void {
        console.log("Duck is flying through the air");
    }

    swim(): void {
        console.log("Duck is swimming in the water");
    }
}

const d = new Duck();
d.fly();
d.swim();
