//
// todo -> norml function
function helloWorld() {
  return 'Hello, world!';
}

// with arguments and optional arguments
function greet(name: string, email?: string, age: number = 30) {
  return `Hello, ${name}! Your email is ${email}.`;
}

// with return type
function add(a: number, b: number): number {
  return a + b;
}

// with => syntax
const multiply = (a: number, b: number): number => a * b;
function sayMyName(name: string): string | boolean {
    if (name === 'Heisenberg') {
        return true;
    }
    return `Your name is ${name}`;
}

// Object return type
function createUser(name: string, email: string): { name: string, email: string } {
  return { name, email };
}

// object return type with unknown keys
function createUser2(name: string, email: string): { [key: string]: string } {
  return { name, email };
}


// function types....
let myFunction: (name: string, age: number) => string; // this `myFunction` can only be a function that takes two arguments, a string and a number, and returns a string.
function myTestFunction(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}
// this is okay, because `myTestFunction` fits the type `(name: string, age: number) => string`
myFunction = myTestFunction;

// todo: When function accepts a function as an argument
const myFunction02 = (callback: (name: string, email?: string) => string) => {
    console.log("Going to call the callback function...");
    console.log(callback('John', 'john@gmail.com'));
};
myFunction02(greet);

// function with No return type `void`
const myFunction03 = (name: string, age: number): void => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
};
