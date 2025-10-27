class ArraysEx {
    numbers: number[] = [10, 20, 30];

    constructor() {
        this.numbers.push(40);
    }

    displayArray(): void {
        console.log("Array elements:", this.numbers);
    }

    displayElement(index: number): void {
        console.log(`Element at index ${index}:`, this.numbers[index]);
    }
}

// Create an instance and test
const arraysExample = new ArraysEx();
arraysExample.displayArray();
arraysExample.displayElement(2);
arraysExample.displayElement(3);
arraysExample.displayElement(4);
