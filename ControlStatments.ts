class ControlStatements {
    public executeSwitch(): void {
        let day: number = 4;

        switch (day) {
            default: console.log("Other Day");
            break;
            case 1: console.log("Monday");
            break;
            case 2: console.log("Tuesday"); 
            break;
           
        }
    }
}

// Create instance and call the method
const control = new ControlStatements();
control.executeSwitch();
