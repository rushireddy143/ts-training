# TypeScript Operators Documentation

This document provides comprehensive documentation for the TypeScript operator demonstration programs.

## 📁 Program Files

- `TernaryOperator.ts` - Ternary Operator (?:) demonstrations
- `LogicalAndOperator.ts` - Logical AND (&&) operator demonstrations

---

## 🎯 TernaryOperator.ts

### Overview
The `TernaryOperator.ts` file demonstrates various uses of the ternary operator (also known as the conditional operator) in TypeScript. The ternary operator provides a concise way to write conditional expressions.

### Syntax
```typescript
condition ? valueIfTrue : valueIfFalse
```

### Class Structure

#### `TernaryOperatorDemo`
Main class containing all ternary operator demonstrations.

### Methods Documentation

#### 1. `checkAge(): void`
**Purpose**: Demonstrates basic ternary operator usage for age validation.

**Features**:
- Simple boolean condition check
- Age-based status determination
- Clean conditional assignment

**Example**:
```typescript
let age: number = 18;
let result: string = age >= 18 ? "Adult" : "Minor";
```

**Output**: Displays age and corresponding status (Adult/Minor).

#### 2. `findMaxNumber(): void`
**Purpose**: Shows ternary operator for numerical comparisons.

**Features**:
- Number comparison logic
- Maximum value determination
- Mathematical conditional operations

**Example**:
```typescript
let max: number = num1 > num2 ? num1 : num2;
```

**Output**: Compares two numbers and displays the maximum.

#### 3. `gradeEvaluation(): void`
**Purpose**: Demonstrates nested ternary operators for complex conditions.

**Features**:
- Multiple condition evaluation
- Nested ternary structure
- Grade calculation logic

**Example**:
```typescript
let grade: string = score >= 90 ? "A" : 
                   score >= 80 ? "B" : 
                   score >= 70 ? "C" : 
                   score >= 60 ? "D" : "F";
```

**Output**: Evaluates score and assigns appropriate grade.

#### 4. `weatherCheck(): void`
**Purpose**: Shows ternary operator with boolean and numerical conditions.

**Features**:
- Multi-condition evaluation
- Weather-based recommendations
- Complex conditional logic

**Example**:
```typescript
let activity: string = isRaining ? "Stay indoors" : 
                      temperature > 25 ? "Go swimming" : 
                      "Go for a walk";
```

**Output**: Provides activity recommendations based on weather conditions.

#### 5. `messageFormatter(): void`
**Purpose**: Demonstrates ternary operator for string manipulation and UI logic.

**Features**:
- String interpolation with ternary
- UI state management
- Dynamic message generation

**Example**:
```typescript
let message: string = isLoggedIn ? `Welcome back, ${username}!` : "Please log in";
```

**Output**: Displays personalized messages based on login status.

#### 6. `executeAllExamples(): void`
**Purpose**: Master method that runs all ternary operator demonstrations.

**Features**:
- Coordinated execution
- Comprehensive output formatting
- Educational summary

---

## 🔗 LogicalAndOperator.ts

### Overview
The `LogicalAndOperator.ts` file demonstrates various applications of the logical AND (&&) operator in TypeScript, including short-circuit evaluation, conditional execution, and safe property access.

### Syntax
```typescript
condition1 && condition2 && ... && conditionN
expression && executionCode
```

### Class Structure

#### `LogicalAndDemo`
Main class containing all logical AND operator demonstrations.

### Methods Documentation

#### 1. `basicAndOperation(): void`
**Purpose**: Demonstrates fundamental logical AND operations.

**Features**:
- Boolean combination logic
- Multiple condition evaluation
- Practical real-world examples

**Example**:
```typescript
let canDrive: boolean = isAdult && hasLicense;
let canDriveLegally: boolean = isAdult && hasLicense && hasInsurance;
```

**Output**: Shows driving eligibility based on multiple conditions.

#### 2. `shortCircuitEvaluation(): void`
**Purpose**: Demonstrates short-circuit evaluation and safe property access.

**Features**:
- Null safety patterns
- Early exit optimization
- Safe object navigation

**Example**:
```typescript
let userName: string = user && user.name;
let safeName: string = nullUser && nullUser.name; // Returns null, no error
```

**Output**: Shows safe property access preventing runtime errors.

#### 3. `conditionalExecution(): void`
**Purpose**: Shows conditional code execution using && operator.

**Features**:
- Conditional method calls
- Debug mode implementation
- Performance optimization

**Example**:
```typescript
isLoggedIn && console.log("✅ User is logged in!");
debugMode && this.debugInfo();
```

**Output**: Executes code only when conditions are met.

#### 4. `formValidation(): void`
**Purpose**: Demonstrates form validation using logical AND.

**Features**:
- Multi-field validation
- Email format checking
- Password strength validation
- Terms acceptance verification

**Example**:
```typescript
let isFormValid: boolean = isEmailValid && isPasswordValid && termsAccepted;
isFormValid && console.log("✅ Form submitted successfully!");
```

**Output**: Validates form fields and shows submission status.

#### 5. `rangeChecking(): void`
**Purpose**: Shows range validation using AND operator.

**Features**:
- Numerical range validation
- Environmental condition checking
- Age range verification

**Example**:
```typescript
let isComfortable: boolean = temperature >= 18 && temperature <= 26 && 
                           humidity >= 30 && humidity <= 50;
```

**Output**: Evaluates environmental comfort based on multiple parameters.

#### 6. `arrayObjectChecking(): void`
**Purpose**: Demonstrates array and object validation.

**Features**:
- Array existence checking
- Deep object property access
- Type validation
- Safe navigation patterns

**Example**:
```typescript
let hasCity: boolean = person && person.address && person.address.city;
let isValidArray: boolean = numbers && 
                          Array.isArray(numbers) && 
                          numbers.length > 0 && 
                          numbers.every(n => typeof n === 'number');
```

**Output**: Safely checks nested properties and validates array data.

#### 7. `executeAllExamples(): void`
**Purpose**: Master method that runs all logical AND demonstrations.

---

## 🚀 Usage Instructions

### Compilation
```bash
# Compile individual files
tsc TernaryOperator.ts --outDir dist
tsc LogicalAndOperator.ts --outDir dist

# Or compile all TypeScript files
tsc
```

### Execution
```bash
# Run ternary operator demo
node dist/TernaryOperator.js

# Run logical AND operator demo
node dist/LogicalAndOperator.js
```

## 📊 Key Benefits

### Ternary Operator Benefits
- **Conciseness**: Single-line conditional expressions
- **Readability**: Clear conditional logic for simple cases
- **Return Values**: Always returns a value (unlike if-else statements)
- **Performance**: Optimized by TypeScript/JavaScript engines

### Logical AND Benefits
- **Short-Circuit Evaluation**: Prevents errors and improves performance
- **Safe Navigation**: Avoids null/undefined reference errors
- **Conditional Execution**: Clean way to execute code conditionally
- **Multiple Validations**: Efficient way to check multiple conditions

## 🎓 Learning Outcomes

After studying these programs, you will understand:

1. **Ternary Operator**:
   - Basic conditional assignment
   - Nested ternary structures
   - Best practices and readability considerations

2. **Logical AND Operator**:
   - Short-circuit evaluation mechanics
   - Safe property access patterns
   - Conditional execution techniques
   - Form validation strategies

## 🔧 Best Practices

### Ternary Operator
- Use for simple conditions only
- Avoid excessive nesting
- Consider readability over brevity
- Use parentheses for clarity in complex expressions

### Logical AND Operator
- Leverage short-circuit evaluation for safety
- Use for null/undefined checks
- Combine with optional chaining (?.) in modern TypeScript
- Keep conditions readable and maintainable

## 📝 Code Examples Summary

Both programs demonstrate practical, real-world applications of their respective operators, providing a solid foundation for understanding conditional logic in TypeScript development.