// Animal1.ts

export class Animal1 {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance}m.`);
    }
}
