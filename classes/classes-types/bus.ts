
class SchoolBus {
    numberPlate: string;
    seatCount?: number;
    // constructor
    constructor(numberPlate: string, seatCount?: number) {
        this.numberPlate = numberPlate;
        this.seatCount = seatCount;
    }
    // methods
    getInfo = (): string[] => {
        return [this.numberPlate, this.seatCount?.toString() || 'unknown'];
    }
}
let busTest01: SchoolBus = new SchoolBus('ABC123', 23);
//

interface SchoolBusV2 {
    numberPlate: string;
    seatCount?: number;
    getInfo: () => string[];
}
// implement the interface SchoolBusV2
let busTest02: SchoolBusV2 = {
    numberPlate: 'XYZ123',
    seatCount: 45,
    getInfo: function (): string[] {
        return [this.numberPlate, this.seatCount?.toString() || 'unknown'];
    }
}
//
// Here we can see the function requires an object of type SchoolBus, But we can pass an object of type SchoolBusV2 as well.
// This is because SchoolBusV2 has the same properties and methods as SchoolBus.
// Which mean, TypeScript class are `Structural Typing`.
// `if it's talks like a duck and walks like a duck, then it's a duck` :) 
const callGetInfo = (bus: SchoolBus): void => {
    let value: string[] = bus.getInfo();
    console.log(value);
}
//
callGetInfo(busTest01);
callGetInfo(busTest02);



// Method Vs Property Functions....
class HelloWorld {
    private _message: string;
    private _name: string;
    //
    // constructor
    constructor(message: string, name: string) {
        this.message = message; // calling the setter function ( advantage: we can get more control over the value )
        this._name = name; // assigning the value directly to the property ( disadvantage: we can't get control over the value )
    }
    // Property function 
    // These function mostly used to get or set the value of a property.
    // They can be assed as a property, not as a function. 
    // example: helloWorld.message = 'Hello World';
    // example: console.log(helloWorld.message); // -> 'Hello World'
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    //
    // Method function
    getDetails: () => string = () => {
        return `Hello ${this._name}, ${this._message}`;
    }
}


