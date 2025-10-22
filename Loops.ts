class LoopDemo {
    // Method to demonstrate for loop
    public executeForLoop(): void {
        console.log('🔄 Executing For Loop:');
        for (let i: number = 100; i >=1; i--) {
            console.log('Value:', i);
        }
    }
    public executeWhileLoop(): void {
        console.log('🔄 Executing while Loop:');
        let j: number = 100;
        while (j >=1){
            console.log('Value:', j);
            j--;
        }
    }
    public executeDoWhileLoop(): void {
        console.log('🔄 Executing do while Loop:');
        let j: number = 100;
        do{
            console.log('Value:', j);
            j--;
        }while(j >=1);
    }
    public executeForOfLoop(): void {
        const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
        for (const i of fruits) {
            console.log(i);
        }}

    public executeForInLoop(): void {
        const user = { name: 'Rushi', age: 25 };
        for (const key in user) {
            console.log(key, ':', user[key as keyof typeof user]);
        }

    }}


// Create an instance and execute the loop
const loopDemo = new LoopDemo();
loopDemo.executeForLoop();
loopDemo.executeWhileLoop();
loopDemo.executeDoWhileLoop();
loopDemo.executeForOfLoop();
loopDemo.executeForInLoop();
