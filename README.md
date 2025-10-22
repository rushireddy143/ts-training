# TypeScript Learning Repository 🎭

A comprehensive collection of **TypeScript** programs demonstrating object-oriented programming concepts, operators, and control structures.

## 📁 Project Structure

```
ts-training/
├── AnimalPolymorphism.ts     # Abstract base Animal class
├── PolymorphicAnimals.ts     # Concrete animal implementations (Dog, Cat, Bird)
├── PolymorphismDemo.ts       # Main demonstration program
├── CompileTimePolymorphism.ts # Compile-time polymorphism examples
├── RuntimePolymorphism.ts    # Runtime polymorphism examples
├── PolymorphismComparison.ts # Comparison of both types
├── TernaryOperator.ts        # Ternary operator demonstrations
├── LogicalAndOperator.ts     # Logical AND operator examples
├── Loops.ts                  # Loop demonstrations
├── ControlStatments.ts       # Control statement examples
├── Dog1.ts                   # Simple inheritance example
├── Animal1.ts                # Base class for Dog1 example
├── tsconfig.json             # TypeScript configuration
├── package.json              # Node.js project configuration
├── OPERATORS_DOCUMENTATION.md # Detailed operators documentation
├── README_OPERATORS.md       # Quick operators reference
└── README.md                 # This file
```

## 🎯 What This Repository Covers

This repository demonstrates multiple TypeScript concepts:

### **🎭 Polymorphism** 
Objects of different types treated as instances of the same base type while maintaining specific behaviors.

### **� Operators**
Ternary operator (?:) and Logical AND (&&) operator demonstrations with practical examples.

### **🔄 Control Structures**
Loops, switch statements, and conditional logic examples.

## 🔑 Key Concepts Demonstrated

### 1. Polymorphism Types
- **Compile-time**: Method overloading, generics, conditional types
- **Runtime**: Inheritance, method overriding, dynamic dispatch

### 2. Operator Usage
- **Ternary Operator**: Conditional expressions, nested conditions
- **Logical AND**: Short-circuit evaluation, safe navigation, conditional execution

### 3. Control Flow
- **Loops**: for, while loop implementations in classes
- **Conditionals**: switch statements, if-else logic

### 4. Object-Oriented Programming
- Abstract classes and inheritance
- Method overriding and polymorphic behavior
- Encapsulation in class structures

## 🚀 Running the Programs

1. **Compile TypeScript:**
   ```bash
   tsc
   ```

2. **Run specific demonstrations:**
   ```bash
   # Polymorphism demos
   node dist/PolymorphismDemo.js
   node dist/CompileTimePolymorphism.js
   node dist/RuntimePolymorphism.js
   node dist/PolymorphismComparison.js
   
   # Operator demos
   node dist/TernaryOperator.js
   node dist/LogicalAndOperator.js
   
   # Control structure demos
   node dist/Loops.js
   node dist/ControlStatments.js
   
   # Simple inheritance example
   node dist/Dog1.js
   ```

3. **Use npm scripts:**
   ```bash
   npm run build    # Compile TypeScript
   npm run demo     # Build and run main polymorphism demo
   npm run lint     # Run ESLint
   ```

3. **Run the simple inheritance example:**
   ```bash
   node dist/Dog1.js
   ```

## 💡 Benefits of Polymorphism

- **Code Reusability**: Write once, use with many types
- **Extensibility**: Add new animal types without changing existing code
- **Maintainability**: Common interface makes code predictable
- **Flexibility**: Treat different objects uniformly

## 🎨 Example Output

```
🎭 POLYMORPHISM DEMONSTRATION WITH ARRAY

[1] Processing animal...
--- Working with Rex (Canine) ---
Rex the Golden Retriever says: Woof! Woof! 🐕
Rex runs on four legs, wagging tail! 🏃‍♂️
Rex chomps on dog food and bones! 🦴

[2] Processing animal...  
--- Working with Whiskers (Feline) ---
Whiskers the cat says: Meow! Purr... 🐱
Whiskers gracefully stalks and pounces silently! 🐾
Whiskers delicately nibbles on cat food and fish! 🐟
```

## 🏗️ Real-World Applications

This polymorphism pattern is used everywhere:
- **UI Components**: Button, TextField, Dropdown all implement `render()` differently
- **Database Drivers**: MySQL, PostgreSQL, SQLite all implement `connect()` differently  
- **Payment Systems**: PayPal, Stripe, Square all implement `processPayment()` differently

## 📚 Learning Objectives

After studying this code, you'll understand:
- Abstract classes and inheritance
- Method overriding and polymorphic behavior
- Runtime method resolution (dynamic dispatch)
- Interface segregation and code organization
- Object-oriented design principles

## 🛠️ TypeScript Configuration

The project uses TypeScript with:
- Target: ES6
- Module: CommonJS
- Strict type checking enabled
- Output directory: `dist/`

---

*This project demonstrates core object-oriented programming concepts in TypeScript, making it perfect for learning polymorphism and inheritance patterns.* 🚀