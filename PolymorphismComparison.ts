// PolymorphismComparison.ts - Comparing Compile-Time vs Runtime Polymorphism

import { demonstrateCompileTimePolymorphism } from './CompileTimePolymorphism';
import { demonstrateRuntimePolymorphism } from './RuntimePolymorphism';

/**
 * POLYMORPHISM COMPARISON PROGRAM
 * 
 * This program demonstrates and compares:
 * 1. Compile-Time Polymorphism (Static/Early Binding)
 * 2. Runtime Polymorphism (Dynamic/Late Binding)
 */

// =============================================================================
// SIDE-BY-SIDE COMPARISON EXAMPLES
// =============================================================================

// Example showing both compile-time and runtime polymorphism in one class
class DataProcessor<T> {
    private items: T[] = [];

    // COMPILE-TIME POLYMORPHISM: Method overloading
    process(data: string): string;
    process(data: number): number;
    process(data: boolean): number;
    process(data: T[]): T[];
    
    process(data: any): any {
        if (typeof data === 'string') {
            console.log(`📝 [COMPILE-TIME] Processing string: "${data}"`);
            return data.toUpperCase();
        }
        
        if (typeof data === 'number') {
            console.log(`🔢 [COMPILE-TIME] Processing number: ${data}`);
            return data * 2;
        }
        
        if (typeof data === 'boolean') {
            console.log(`✅ [COMPILE-TIME] Processing boolean: ${data}`);
            return data ? 1 : 0;
        }
        
        if (Array.isArray(data)) {
            console.log(`📋 [COMPILE-TIME] Processing array of length: ${data.length}`);
            this.items = [...data];
            return this.items;
        }
    }

    // RUNTIME POLYMORPHISM: Working with different processors
    processWithStrategy(processor: IProcessor<T>): T[] {
        console.log(`🎭 [RUNTIME] Using processor: ${processor.getName()}`);
        return this.items.map(item => processor.processItem(item));
    }

    getItems(): T[] {
        return [...this.items];
    }
}

// Interface for runtime polymorphism
interface IProcessor<T> {
    getName(): string;
    processItem(item: T): T;
}

// Different runtime implementations
class UpperCaseProcessor implements IProcessor<string> {
    getName(): string {
        return 'UpperCase Processor';
    }

    processItem(item: string): string {
        return item.toUpperCase();
    }
}

class ReverseProcessor implements IProcessor<string> {
    getName(): string {
        return 'Reverse Processor';
    }

    processItem(item: string): string {
        return item.split('').reverse().join('');
    }
}

class DoubleProcessor implements IProcessor<number> {
    getName(): string {
        return 'Double Processor';
    }

    processItem(item: number): number {
        return item * 2;
    }
}

class SquareProcessor implements IProcessor<number> {
    getName(): string {
        return 'Square Processor';
    }

    processItem(item: number): number {
        return item * item;
    }
}

// =============================================================================
// PERFORMANCE COMPARISON
// =============================================================================

class PerformanceComparison {
    // COMPILE-TIME: Generic function (type resolved at compile time)
    static compileTimeSort<T>(array: T[], comparer: (a: T, b: T) => number): T[] {
        console.log('⚡ [COMPILE-TIME] Generic sort - type known at compile time');
        const start = performance.now();
        const result = [...array].sort(comparer);
        const end = performance.now();
        console.log(`   Time: ${(end - start).toFixed(4)}ms`);
        return result;
    }

    // RUNTIME: Interface-based sorting (implementation resolved at runtime)
    static runtimeSort<T>(array: T[], sorter: ISorter<T>): T[] {
        console.log(`🎭 [RUNTIME] Interface sort - ${sorter.getName()}`);
        const start = performance.now();
        const result = sorter.sort([...array]);
        const end = performance.now();
        console.log(`   Time: ${(end - start).toFixed(4)}ms`);
        return result;
    }
}

interface ISorter<T> {
    getName(): string;
    sort(array: T[]): T[];
}

class BubbleSorter<T> implements ISorter<T> {
    constructor(private comparer: (a: T, b: T) => number) {}

    getName(): string {
        return 'Bubble Sort';
    }

    sort(array: T[]): T[] {
        const arr = [...array];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (this.comparer(arr[j], arr[j + 1]) > 0) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }
}

class QuickSorter<T> implements ISorter<T> {
    constructor(private comparer: (a: T, b: T) => number) {}

    getName(): string {
        return 'Quick Sort';
    }

    sort(array: T[]): T[] {
        if (array.length <= 1) return array;
        
        const pivot = array[Math.floor(array.length / 2)];
        const left = array.filter(x => this.comparer(x, pivot) < 0);
        const middle = array.filter(x => this.comparer(x, pivot) === 0);
        const right = array.filter(x => this.comparer(x, pivot) > 0);
        
        return [...this.sort(left), ...middle, ...this.sort(right)];
    }
}

// =============================================================================
// DEMONSTRATION FUNCTIONS
// =============================================================================

function demonstrateComparisonExamples(): void {
    console.log('\n' + '='.repeat(80));
    console.log('⚖️ COMPILE-TIME vs RUNTIME POLYMORPHISM COMPARISON');
    console.log('='.repeat(80));
    
    console.log('\n📊 1. DATA PROCESSING EXAMPLE');
    console.log('-'.repeat(50));
    
    // Compile-time polymorphism example
    const stringProcessor = new DataProcessor<string>();
    const numberProcessor = new DataProcessor<number>();
    
    // Method overloading (resolved at compile time)
    console.log('Result:', stringProcessor.process('hello world'));
    console.log('Result:', numberProcessor.process(42));
    console.log('Result:', stringProcessor.process(['apple', 'banana', 'cherry']));
    
    // Runtime polymorphism example
    const upperProcessor = new UpperCaseProcessor();
    const reverseProcessor = new ReverseProcessor();
    const doubleProcessor = new DoubleProcessor();
    const squareProcessor = new SquareProcessor();
    
    console.log('\nString results:', stringProcessor.processWithStrategy(upperProcessor));
    console.log('String results:', stringProcessor.processWithStrategy(reverseProcessor));
    
    numberProcessor.process([1, 2, 3, 4, 5]);
    console.log('Number results:', numberProcessor.processWithStrategy(doubleProcessor));
    console.log('Number results:', numberProcessor.processWithStrategy(squareProcessor));
    
    console.log('\n🚀 2. PERFORMANCE COMPARISON');
    console.log('-'.repeat(50));
    
    const testArray = [64, 34, 25, 12, 22, 11, 90];
    const comparer = (a: number, b: number): number => a - b;
    
    // Compile-time generic sort
    const compileResult = PerformanceComparison.compileTimeSort(testArray, comparer);
    console.log('   Result:', compileResult);
    
    // Runtime polymorphic sorts
    const bubbleSorter = new BubbleSorter(comparer);
    const quickSorter = new QuickSorter(comparer);
    
    const runtimeResult1 = PerformanceComparison.runtimeSort(testArray, bubbleSorter);
    console.log('   Result:', runtimeResult1);
    
    const runtimeResult2 = PerformanceComparison.runtimeSort(testArray, quickSorter);
    console.log('   Result:', runtimeResult2);
}

function displayComparisonTable(): void {
    console.log('\n' + '='.repeat(80));
    console.log('📋 COMPILE-TIME vs RUNTIME POLYMORPHISM COMPARISON TABLE');
    console.log('='.repeat(80));
    
    const table = `
╔══════════════════════════╤══════════════════════════╤══════════════════════════╗
║         ASPECT           │    COMPILE-TIME          │       RUNTIME            ║
╠══════════════════════════╪══════════════════════════╪══════════════════════════╣
║ Binding Time             │ Compile Time             │ Runtime                  ║
║ Method Resolution        │ Static/Early Binding     │ Dynamic/Late Binding     ║
║ Performance              │ Faster (no lookup)      │ Slower (vtable lookup)   ║
║ Memory Usage             │ Lower                    │ Higher (vtable overhead) ║
║ Type Safety              │ Compile-time checks      │ Runtime checks needed    ║
║ Flexibility              │ Less flexible            │ More flexible            ║
║ Code Reusability         │ Template-based           │ Interface-based          ║
║ Error Detection          │ Compile-time errors      │ Runtime errors           ║
║ Examples                 │ Generics, Overloading    │ Inheritance, Interfaces  ║
║ Use Cases                │ Algorithms, Utilities    │ Frameworks, Plugins      ║
╚══════════════════════════╧══════════════════════════╧══════════════════════════╝
    `;
    
    console.log(table);
    
    console.log('\n🎯 WHEN TO USE EACH:');
    console.log('-'.repeat(50));
    console.log('📊 COMPILE-TIME POLYMORPHISM:');
    console.log('  ✅ Performance-critical code');
    console.log('  ✅ Mathematical algorithms');
    console.log('  ✅ Type-safe generic containers');
    console.log('  ✅ Compile-time optimizations needed');
    console.log('  ✅ Template-heavy libraries');
    
    console.log('\n🎭 RUNTIME POLYMORPHISM:');
    console.log('  ✅ Plugin architectures');
    console.log('  ✅ Framework development');
    console.log('  ✅ Dynamic behavior needed');
    console.log('  ✅ Extensible applications');
    console.log('  ✅ Abstract factory patterns');
}

// =============================================================================
// MAIN DEMONSTRATION PROGRAM
// =============================================================================

function main(): void {
    console.log('🚀 COMPREHENSIVE POLYMORPHISM DEMONSTRATION PROGRAM');
    console.log('═'.repeat(80));
    
    try {
        // Run compile-time polymorphism demo
        demonstrateCompileTimePolymorphism();
        
        // Run runtime polymorphism demo  
        demonstrateRuntimePolymorphism();
        
        // Run comparison examples
        demonstrateComparisonExamples();
        
        // Display comparison table
        displayComparisonTable();
        
        console.log('\n' + '═'.repeat(80));
        console.log('✅ ALL POLYMORPHISM DEMONSTRATIONS COMPLETED SUCCESSFULLY!');
        console.log('═'.repeat(80));
        
    } catch (error) {
        console.error('❌ Error during demonstration:', error);
    }
}

// Export for use in other modules
export { main as runPolymorphismComparison };

// Execute the demonstration
main();