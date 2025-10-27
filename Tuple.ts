// Tuple declaration and initialization
let person: [string, number, boolean] = ["Rushi", 36, true];

// Different ways to print tuple data
console.log("Print individual elements:");
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log("\nPrint entire tuple:");
console.log(person);

console.log("\nPrint with template literal:");
console.log(`Name: ${person[0]}, Age: ${person[1]}, Active: ${person[2]}`);

console.log("\nPrint using destructuring:");
const [personName, personAge, personActive] = person;
console.log(`Destructured - Name: ${personName}, Age: ${personAge}, Active: ${personActive}`);

console.log("\nPrint using spread operator:");
console.log(...person);

console.log("\nPrint using join:");
console.log(person.join(" | "));