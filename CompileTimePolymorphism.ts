// CompileTimePolymorphism.ts - Demonstrating Compile-Time Polymorphism

/**
 * COMPILE-TIME POLYMORPHISM
 * 
 * Also known as Static Polymorphism or Early Binding
 * - Method resolution happens at compile time
 * - Includes: Method Overloading, Generics, Template Specialization
 * - Performance benefit: no runtime overhead for method resolution
 */

// =============================================================================
// 1. METHOD OVERLOADING - Multiple methods with same name, different signatures
// =============================================================================

class Calculator {
    // Overloaded add methods - TypeScript uses function overloads
    
    // Method signatures (compile-time declarations)
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: number[], b: number[]): number[];
    add(a: boolean, b: boolean): number;
    
    // Implementation (must handle all overloads)
    add(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(`📊 Adding numbers: ${a} + ${b}`);
            return a + b;
        }
        
        if (typeof a === 'string' && typeof b === 'string') {
            console.log(`🔗 Concatenating strings: "${a}" + "${b}"`);
            return a + b;
        }
        
        if (Array.isArray(a) && Array.isArray(b)) {
            console.log(`📋 Adding arrays: [${a}] + [${b}]`);
            return [...a, ...b];
        }
        
        if (typeof a === 'boolean' && typeof b === 'boolean') {
            console.log(`🔢 Converting booleans to numbers: ${a} + ${b}`);
            return Number(a) + Number(b);
        }
        
        throw new Error('Unsupported parameter types');
    }
    
    // Overloaded multiply methods
    multiply(a: number, b: number): number;
    multiply(a: string, times: number): string;
    multiply(matrix: number[][], scalar: number): number[][];
    
    multiply(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {
            console.log(`✖️ Multiplying numbers: ${a} × ${b}`);
            return a * b;
        }
        
        if (typeof a === 'string' && typeof b === 'number') {
            console.log(`📝 Repeating string: "${a}" × ${b}`);
            return a.repeat(b);
        }
        
        if (Array.isArray(a) && Array.isArray(a[0]) && typeof b === 'number') {
            console.log(`🧮 Multiplying matrix by scalar: ${b}`);
            return a.map(row => row.map(cell => cell * b));
        }
        
        throw new Error('Unsupported parameter types');
    }
}

// =============================================================================
// 2. GENERICS - Type parameters resolved at compile time
// =============================================================================

// Generic class with type parameter T
class Container<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
        console.log(`📦 Added item to container: ${item}`);
    }
    
    get(index: number): T | undefined {
        return this.items[index];
    }
    
    getAll(): T[] {
        return [...this.items];
    }
    
    getCount(): number {
        return this.items.length;
    }
    
    // Generic method with additional type parameter U
    transform<U>(transformer: (item: T) => U): Container<U> {
        const newContainer = new Container<U>();
        this.items.forEach(item => {
            newContainer.add(transformer(item));
        });
        return newContainer;
    }
}

// Generic function with constraints
interface Measurable {
    length: number;
}

function getLength<T extends Measurable>(item: T): number {
    console.log(`📏 Measuring length of: ${item}`);
    return item.length;
}

// Generic utility functions
class ArrayUtils {
    // Generic swap function
    static swap<T>(array: T[], i: number, j: number): T[] {
        console.log(`🔄 Swapping elements at positions ${i} and ${j}`);
        const newArray = [...array];
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        return newArray;
    }
    
    // Generic find function with predicate
    static findFirst<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
        console.log(`🔍 Searching array with custom predicate`);
        return array.find(predicate);
    }
    
    // Generic reduce function
    static reduce<T, R>(array: T[], initialValue: R, reducer: (acc: R, item: T) => R): R {
        console.log(`🔢 Reducing array to single value`);
        return array.reduce(reducer, initialValue);
    }
}

// =============================================================================
// 3. CONDITIONAL TYPES AND MAPPED TYPES - Advanced compile-time polymorphism
// =============================================================================

// Conditional type that behaves differently based on type parameter
type ApiResponse<T> = T extends string 
    ? { message: T; status: 'success' } 
    : T extends number 
    ? { code: T; timestamp: Date }
    : { data: T; metadata: object };

// Mapped type that transforms properties
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

type Optional<T> = {
    [K in keyof T]?: T[K];
};

// Utility class using advanced types
class TypeProcessor {
    // Method using conditional types
    static processResponse<T>(input: T): ApiResponse<T> {
        if (typeof input === 'string') {
            console.log(`📨 Processing string response: ${input}`);
            return { message: input, status: 'success' } as ApiResponse<T>;
        }
        
        if (typeof input === 'number') {
            console.log(`🔢 Processing numeric response: ${input}`);
            return { code: input, timestamp: new Date() } as ApiResponse<T>;
        }
        
        console.log(`📊 Processing data response`);
        return { data: input, metadata: { processed: true } } as ApiResponse<T>;
    }
    
    // Method creating readonly version
    static makeReadOnly<T>(obj: T): ReadOnly<T> {
        console.log(`🔒 Creating readonly version of object`);
        return Object.freeze({ ...obj });
    }
}

// =============================================================================
// DEMONSTRATION FUNCTION
// =============================================================================

export function demonstrateCompileTimePolymorphism(): void {
    console.log('\n' + '='.repeat(80));
    console.log('⚡ COMPILE-TIME POLYMORPHISM DEMONSTRATION');
    console.log('='.repeat(80));
    
    console.log('\n🔢 1. METHOD OVERLOADING');
    console.log('-'.repeat(40));
    
    const calc = new Calculator();
    
    // Method calls resolved at compile time based on parameter types
    console.log('Result:', calc.add(5, 3));                    // number overload
    console.log('Result:', calc.add('Hello', ' World'));       // string overload  
    console.log('Result:', calc.add([1, 2], [3, 4]));         // array overload
    console.log('Result:', calc.add(true, false));            // boolean overload
    
    console.log('Result:', calc.multiply(4, 7));               // number overload
    console.log('Result:', calc.multiply('Hi! ', 3));          // string overload
    console.log('Result:', calc.multiply([[1, 2], [3, 4]], 2)); // matrix overload
    
    console.log('\n🧬 2. GENERICS');
    console.log('-'.repeat(40));
    
    // Generic containers with different types
    const numberContainer = new Container<number>();
    numberContainer.add(10);
    numberContainer.add(20);
    numberContainer.add(30);
    
    const stringContainer = new Container<string>();
    stringContainer.add('Apple');
    stringContainer.add('Banana');
    stringContainer.add('Orange');
    
    console.log('Numbers:', numberContainer.getAll());
    console.log('Strings:', stringContainer.getAll());
    
    // Generic transformation
    const doubledNumbers = numberContainer.transform(x => x * 2);
    console.log('Doubled numbers:', doubledNumbers.getAll());
    
    const uppercaseStrings = stringContainer.transform(s => s.toUpperCase());
    console.log('Uppercase strings:', uppercaseStrings.getAll());
    
    // Generic utility functions
    console.log('String length:', getLength('Hello World'));
    console.log('Array length:', getLength([1, 2, 3, 4, 5]));
    
    const numbers = [1, 2, 3, 4, 5];
    console.log('Original:', numbers);
    console.log('Swapped:', ArrayUtils.swap(numbers, 1, 3));
    console.log('Found:', ArrayUtils.findFirst(numbers, x => x > 3));
    console.log('Sum:', ArrayUtils.reduce(numbers, 0, (acc, x) => acc + x));
    
    console.log('\n🎯 3. CONDITIONAL AND MAPPED TYPES');
    console.log('-'.repeat(40));
    
    // Conditional types resolved at compile time
    const stringResponse = TypeProcessor.processResponse('Operation successful');
    const numberResponse = TypeProcessor.processResponse(404);
    const dataResponse = TypeProcessor.processResponse({ users: ['Alice', 'Bob'] });
    
    console.log('String response:', stringResponse);
    console.log('Number response:', numberResponse);
    console.log('Data response:', dataResponse);
    
    // Mapped types
    const user = { name: 'Alice', age: 30, email: 'alice@example.com' };
    const readOnlyUser = TypeProcessor.makeReadOnly(user);
    console.log('Original user:', user);
    console.log('ReadOnly user:', readOnlyUser);
    
    console.log('\n✨ COMPILE-TIME POLYMORPHISM BENEFITS:');
    console.log('- Type safety at compile time');
    console.log('- Zero runtime overhead for type resolution');
    console.log('- Better IDE support and autocomplete');
    console.log('- Early error detection');
    console.log('- Optimized generated code');
}