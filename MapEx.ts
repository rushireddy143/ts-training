let studentMarks: Map<string, number> = new Map();

console.log("Adding students and marks:");
studentMarks.set("Jyothi", 85);
studentMarks.set("Madhu", 95);
studentMarks.set("Ravi", 78);
studentMarks.set("Priya", 92);

console.log("\nRetrieve individual marks:");
console.log("Jyothi's marks:", studentMarks.get("Jyothi"));
console.log("Madhu's marks:", studentMarks.get("Madhu"));
console.log("Ravi's marks:", studentMarks.get("Ravi"));

console.log("\nCheck if student exists:");
console.log("Has 'Priya':", studentMarks.has("Priya"));
console.log("Has 'Arjun':", studentMarks.has("Arjun"));

console.log("\nMap size:", studentMarks.size);

console.log("\nDisplay entire map:");
console.log(studentMarks);

console.log("\nIterate through Map entries:");
studentMarks.forEach((marks, student) => {
    console.log(`${student} - ${marks} marks`);
});

console.log("\nUsing entries():");
for (const [student, marks] of studentMarks.entries()) {
    console.log(`${student}: ${marks}`);
}

console.log("\nUsing keys():");
for (const student of studentMarks.keys()) {
    console.log(`Student: ${student}`);
}

console.log("\nUsing values():");
for (const marks of studentMarks.values()) {
    console.log(`Marks: ${marks}`);
}

console.log("\nDelete a student:");
studentMarks.delete("Ravi");
console.log("After deleting Ravi:", studentMarks);

console.log("\nClear all entries:");
studentMarks.clear();
console.log("Map after clear:", studentMarks);
console.log("Size after clear:", studentMarks.size);