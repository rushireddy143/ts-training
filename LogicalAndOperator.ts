// LogicalAndOperator.ts - Demonstrating Logical AND (&&) Operator Usage

class LogicalAndDemo {

    // Method to demonstrate basic logical AND
    public basicAndOperation(): void {
        console.log('🔗 Basic Logical AND (&&) Demo:');

        const isAdult: boolean = true;
        const hasLicense: boolean = true;

        const canDrive: boolean = isAdult && hasLicense;

        console.log(`Is Adult: ${isAdult}`);
        console.log(`Has License: ${hasLicense}`);
        console.log(`Can Drive: ${canDrive}`);

        // Test with one false condition
        const hasInsurance: boolean = false;
        const canDriveLegally: boolean = isAdult && hasLicense && hasInsurance;

        console.log(`Has Insurance: ${hasInsurance}`);
        console.log(`Can Drive Legally: ${canDriveLegally}`);
    }

    // Method to demonstrate short-circuit evaluation
    public shortCircuitEvaluation(): void {
        console.log('\n⚡ Short-Circuit Evaluation:');

        const user: any = { name: 'Alice', age: 25 }; // eslint-disable-line @typescript-eslint/no-explicit-any

        // Safe property access using &&
        const userName: string = user && user.name;
        console.log(`User Name: ${userName}`);

        // Test with null user
        const nullUser: any = null; // eslint-disable-line @typescript-eslint/no-explicit-any
        const safeName: string = nullUser && nullUser.name;
        console.log(`Safe Name (null user): ${safeName}`);

        // Multiple conditions with short-circuit
        const hasPermission: boolean = user && user.age >= 18 && user.name === 'Alice';
        console.log(`Has Permission: ${hasPermission}`);
    }

    // Method to demonstrate conditional execution
    public conditionalExecution(): void {
        console.log('\n🎯 Conditional Execution with &&:');

        const isLoggedIn: boolean = true;
        const showWelcome: boolean = false;

        // Execute code only if condition is true
        // eslint-disable-next-line no-unused-expressions
        isLoggedIn && console.log('✅ User is logged in!');
        // eslint-disable-next-line no-unused-expressions
        showWelcome && console.log('👋 Welcome message displayed');

        // Multiple conditions for execution
        const score: number = 95;
        const isPassing: boolean = true;

        // eslint-disable-next-line no-unused-expressions
        score >= 90 && isPassing && console.log('🏆 Excellent performance!');

        // Conditional method calls
        const debugMode: boolean = true;
        // eslint-disable-next-line no-unused-expressions
        debugMode && this.debugInfo();
    }

    // Method to demonstrate form validation
    public formValidation(): void {
        console.log('\n📝 Form Validation using &&:');

        const email: string = 'user@example.com';
        const password: string = 'password123';
        const termsAccepted: boolean = true;

        const isEmailValid: boolean = email.includes('@') && email.includes('.');
        const isPasswordValid: boolean = password.length >= 8;
        const isFormValid: boolean = isEmailValid && isPasswordValid && termsAccepted;

        console.log(`Email: ${email}`);
        console.log(`Email Valid: ${isEmailValid}`);
        console.log(`Password Valid: ${isPasswordValid}`);
        console.log(`Terms Accepted: ${termsAccepted}`);
        console.log(`Form Valid: ${isFormValid}`);

        // Conditional form submission
        // eslint-disable-next-line no-unused-expressions
        isFormValid && console.log('✅ Form submitted successfully!');
        // eslint-disable-next-line no-unused-expressions
        !isFormValid && console.log('❌ Please fix form errors');
    }

    // Method to demonstrate number range checking
    public rangeChecking(): void {
        console.log('\n📊 Range Checking with &&:');

        const temperature: number = 22;
        const humidity: number = 45;

        const isComfortable: boolean = temperature >= 18 && temperature <= 26 &&
                                   humidity >= 30 && humidity <= 50;

        console.log(`Temperature: ${temperature}°C`);
        console.log(`Humidity: ${humidity}%`);
        console.log(`Comfortable Environment: ${isComfortable}`);

        // Age range validation
        const age: number = 25;
        const isWorkingAge: boolean = age >= 18 && age <= 65;

        console.log(`Age: ${age}`);
        console.log(`Working Age: ${isWorkingAge}`);
    }

    // Method to demonstrate array and object checking
    public arrayObjectChecking(): void {
        console.log('\n📦 Array & Object Checking:');

        const numbers: number[] = [1, 2, 3, 4, 5];
        const hasElements: boolean = numbers && numbers.length > 0;

        console.log(`Array: [${numbers}]`);
        console.log(`Has Elements: ${hasElements}`);

        // Object property checking
        const person: any = { name: 'Bob', address: { city: 'New York', zip: '10001' } }; // eslint-disable-line @typescript-eslint/no-explicit-any

        const hasCity: boolean = person && person.address && person.address.city;
        const cityName: string = person && person.address && person.address.city;

        console.log(`Has City: ${hasCity}`);
        console.log(`City Name: ${cityName}`);

        // Check multiple array conditions
        const isValidArray: boolean = numbers &&
                                  Array.isArray(numbers) &&
                                  numbers.length > 0 &&
                                  numbers.every(n => typeof n === 'number');

        console.log(`Valid Number Array: ${isValidArray}`);
    }

    // Helper method for debugging
    private debugInfo(): void {
        console.log('🐛 Debug: Method executed conditionally');
    }

    // Method to execute all logical AND examples
    public executeAllExamples(): void {
        console.log('🔗 LOGICAL AND (&&) OPERATOR DEMONSTRATION');
        console.log('==========================================');

        this.basicAndOperation();
        this.shortCircuitEvaluation();
        this.conditionalExecution();
        this.formValidation();
        this.rangeChecking();
        this.arrayObjectChecking();

        console.log('\n✨ Logical AND (&&) Benefits:');
        console.log('- Short-circuit evaluation prevents errors');
        console.log('- Concise conditional execution');
        console.log('- Safe property access');
        console.log('- Multiple condition validation');
        console.log('- Performance optimization through early exit');
    }
}

// Create instance and execute all examples
const logicalAndDemo = new LogicalAndDemo();
logicalAndDemo.executeAllExamples();
