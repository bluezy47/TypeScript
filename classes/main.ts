// - C L A S S E S -

const helloWorld013 = (name: string, age: number): void => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};
//
class Greeter {
    // properties of the class
    unusedPropert?: string;
    readonly message: string;
    sayHello: (name: string, age: number) => void;

    constructor(message: string, callFunc: (name: string, age: number) => void) {
        this.message = message;
        this.sayHello = callFunc;
    }
    // methods of the class
    greet(name: string): void {
        console.log(`Hello ${name}!`);
    }
}

let greeter: Greeter = new Greeter('Hello, world!', helloWorld013);
//
greeter.greet('John');
greeter.sayHello('John', 30);

// todo: greeter.message = "Hello, world!"; // error: Cannot assign to 'message' because it is a read-only property.
greeter.unusedPropert = "Hello, world!"; // okay

console.log(greeter.message.length);
console.log(greeter.unusedPropert?.length); // here we have to use `?` to avoid error