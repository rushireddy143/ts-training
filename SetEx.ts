// Create and work with Set directly without creating new objects
let fruits: Set<string> = new Set(["apple", "banana", "custard apple"]);

console.log("Original Set:");
console.log(fruits);

console.log("\nSet size:", fruits.size);

console.log("\nAdding elements to the Set:");
fruits.add("apple");
fruits.add("kiwi");
fruits.add("mango");

console.log("\nAfter adding elements:");
console.log(fruits);

console.log("\nChecking if 'banana' exists:", fruits.has("banana"));
console.log("Checking if 'grape' exists:", fruits.has("grape"));

console.log("\nDeleting 'kiwi':");
fruits.delete("kiwi");
console.log(fruits);

console.log("\nIterating through Set:");
fruits.forEach((fruit) => {
    console.log("- " + fruit);
});

console.log("\nConverting Set to Array:");
const fruitsArray = Array.from(fruits);
console.log(fruitsArray);

console.log("\nClear all elements:");
fruits.clear();
console.log("Set after clear:", fruits);
console.log("Size after clear:", fruits.size);