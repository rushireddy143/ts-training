# TypeScript Operators Examples

Quick reference and usage guide for the TypeScript operator demonstration programs.

## 📁 Files Overview

| File | Purpose | Key Concepts |
|------|---------|--------------|
| `TernaryOperator.ts` | Ternary operator (?:) examples | Conditional expressions, nested ternary |
| `LogicalAndOperator.ts` | Logical AND (&&) examples | Short-circuit evaluation, safe navigation |

## 🎯 TernaryOperator.ts

### What it demonstrates:
- ✅ Basic age validation (`age >= 18 ? "Adult" : "Minor"`)
- ✅ Number comparison (`num1 > num2 ? num1 : num2`)
- ✅ Nested grade evaluation (A, B, C, D, F logic)
- ✅ Weather-based recommendations
- ✅ Dynamic UI message formatting

### Key Learning Points:
```typescript
// Basic syntax
condition ? valueIfTrue : valueIfFalse

// Nested ternary
score >= 90 ? "A" : score >= 80 ? "B" : "C"

// String interpolation
isLoggedIn ? `Welcome ${username}!` : "Please log in"
```

## 🔗 LogicalAndOperator.ts

### What it demonstrates:
- ✅ Basic boolean logic (`isAdult && hasLicense`)
- ✅ Short-circuit evaluation (`user && user.name`)
- ✅ Conditional execution (`debugMode && this.debugInfo()`)
- ✅ Form validation (`email && password && terms`)
- ✅ Range checking (`temp >= 18 && temp <= 26`)
- ✅ Safe object navigation (`obj && obj.prop && obj.prop.value`)

### Key Learning Points:
```typescript
// Basic AND logic
let canDrive = isAdult && hasLicense;

// Safe property access
let name = user && user.name;

// Conditional execution
isLoggedIn && console.log("Welcome!");

// Multiple validations
let isValid = email && password && terms;
```

## 🚀 Quick Start

### Compile and Run:
```bash
# Compile
tsc TernaryOperator.ts --outDir dist
tsc LogicalAndOperator.ts --outDir dist

# Run
node dist/TernaryOperator.js
node dist/LogicalAndOperator.js
```

### Expected Output:
- **TernaryOperator**: Age checks, grade calculations, weather recommendations
- **LogicalAndOperator**: Boolean operations, safe navigation, form validation

## 💡 When to Use Each

### Ternary Operator (?:)
- ✅ Simple if-else replacements
- ✅ Conditional assignments
- ✅ JSX/template expressions
- ❌ Complex nested conditions (use if-else instead)

### Logical AND (&&)
- ✅ Null/undefined safety checks
- ✅ Conditional method calls
- ✅ Multiple condition validation
- ✅ React conditional rendering patterns

## 🎓 Educational Value

These programs teach:
1. **Operator precedence** and evaluation order
2. **Short-circuit evaluation** benefits
3. **Code readability** considerations
4. **Real-world applications** of conditional logic
5. **TypeScript type safety** with operators

Perfect for learning conditional programming patterns in TypeScript! 🚀