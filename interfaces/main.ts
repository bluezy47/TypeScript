// I N T E R F A C E S ...

// Same as Object Alias but more readable andd good error messages...
//
// Object Alias
type Poet = {
    name: string;
    age: number;
    language: string;
}
//
// Interface - Syntax
interface PoetInterface {
    name: string;
    age: number;
    language: string;
}

// TODO: Always try to Interface over Object Alias...

// Optional Properties
interface Book {
    author?: string;
    readonly title: string;
    pages: number;
}

let loadOfTheRings: Book = {
    title: 'The Load of the Rings',
    pages: 1000
};

loadOfTheRings.author = 'J.R.R. Tolkien'; // OK
// loadOfTheRings.title = "Hello World"; // Error: Cannot assign to 'title' because it is a read-only property.

// Function and Methods....
/*
    TypeScript provides two ways to define a function type:
    01. Method Syntax
    02. Property  Syntax
*/
interface withBothFunctionTypes {
    property: () => string; // Property Syntax
    method?(): string; // Method Syntax (Optional)
}
const testInterface01: withBothFunctionTypes = {
    property: () => {
        return 'Hello World';
    },
    method() {
        return 'Hello World';
    }
}
// One main Diff of these are, `Method` cann't be define as `readonly` but `Property` can be define as `readonly`...

// Call Signature
type SayMyName = (name: string, film: string) => string | boolean; // Function Alias
interface SayMyNameInterface {
    (name: string, film: string): string | boolean;
} // Interface Syntax...

const sayMyName01: SayMyName = (name: string, film: string) => {
    return `My name is ${name} and I am from ${film}`;
}

const sayMyName02: SayMyNameInterface = (name: string, film: string) => {
    return `My name is ${name} and I am from ${film}`;
}