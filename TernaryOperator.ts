// TernaryOperator.ts - Demonstrating Ternary Operator Usage

class TernaryOperatorDemo {

    // Method to demonstrate basic ternary operator
    public checkAge(): void {
        console.log('🔍 Basic Ternary Operator Demo:');

        const age: number = 18;
        const result: string = age >= 18 ? 'Adult' : 'Minor';

        console.log(`Age: ${age}`);
        console.log(`Status: ${result}`);
    }

    // Method to demonstrate ternary with numbers
    public findMaxNumber(): void {
        console.log('\n🔢 Finding Maximum Number:');

        const num1: number = 25;
        const num2: number = 40;
        const max: number = num1 > num2 ? num1 : num2;

        console.log(`Number 1: ${num1}`);
        console.log(`Number 2: ${num2}`);
        console.log(`Maximum: ${max}`);
    }

    // Method to demonstrate nested ternary operators
    public gradeEvaluation(): void {
        console.log('\n📊 Grade Evaluation with Nested Ternary:');

        const score: number = 85;
        const grade: string = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
                score >= 70 ? 'C' :
                    score >= 60 ? 'D' : 'F';

        console.log(`Score: ${score}`);
        console.log(`Grade: ${grade}`);
    }

    // Method to demonstrate ternary with boolean conditions
    public weatherCheck(): void {
        console.log('\n🌤️ Weather Recommendation:');

        const isRaining: boolean = true;
        const temperature: number = 22;

        const activity: string = isRaining ? 'Stay indoors' :
            temperature > 25 ? 'Go swimming' :
                'Go for a walk';

        console.log(`Is raining: ${isRaining}`);
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Recommendation: ${activity}`);
    }

    // Method to demonstrate ternary with string manipulation
    public messageFormatter(): void {
        console.log('\n💬 Message Formatting:');

        const username: string = 'Alice';
        const isLoggedIn: boolean = true;

        const message: string = isLoggedIn ? `Welcome back, ${username}!` : 'Please log in';
        const buttonText: string = isLoggedIn ? 'Logout' : 'Login';

        console.log(`User: ${username}`);
        console.log(`Logged in: ${isLoggedIn}`);
        console.log(`Message: ${message}`);
        console.log(`Button: ${buttonText}`);
    }

    // Method to demonstrate all ternary examples
    public executeAllExamples(): void {
        console.log('🎯 TERNARY OPERATOR DEMONSTRATION');
        console.log('=====================================');

        this.checkAge();
        this.findMaxNumber();
        this.gradeEvaluation();
        this.weatherCheck();
        this.messageFormatter();

        console.log('\n✨ Ternary Operator Benefits:');
        console.log('- Concise conditional expressions');
        console.log('- Single-line if-else alternative');
        console.log('- Readable for simple conditions');
        console.log('- Returns a value (not just executes)');
    }
}

// Create instance and execute all examples
const ternaryDemo = new TernaryOperatorDemo();
ternaryDemo.executeAllExamples();
