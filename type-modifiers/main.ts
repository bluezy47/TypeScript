// Type Predicates 

const helloWorldV1 = (name: any): void => {
    console.log(name.toUpperCase()); // Error: Object is possibly 'null'.
}

const helloWorldV2 = (name: unknown): void => {
    if (typeof name === 'string')
        console.log(name.toUpperCase()); // Error: Object is possibly 'null'.
}



// type Operators...

// keyof
// ---------------------------------------------------------------------------------------------------
interface Person {
    name: string;
    age: number;
}
//
const getAge = (person: Person, key: string): any => {
    return person[key];
}
// Here you can pass any string as key, but we want to restrict it to only 'name' or 'age'
let personAge: number = getAge({ name: 'John', age: 30 }, 'age of person');

// For that we can use keyof operator...
const getAgeV2 = (person: Person, key: keyof Person): any => {
    return person[key];
}
let personAgeV2: number = getAgeV2({ name: 'John', age: 30 }, 'age'); // No error now...
// let personAgeV3: number = getAgeV2({ name: 'John', age: 30 }, 'age of person'); // Error: Argument of type '"age of person"' is not assignable to parameter of type '"name" | "age"'.


// typeof
// ---------------------------------------------------------------------------------------------------
const original = {
    medium: "movie",
    title: "Breaking Bad",
}

//
let adaptation: typeof original;
adaptation = {...original, title: "Better Call Saul"};


// try-catch
try {
    // some code ...
} catch (error) {
    // check error is instance of Error
    if (error instanceof Error)
        console.log(error.message);
    else
        console.log(error); // We do not know the type of error...
}

// define 
const getNameV1 = () => "Hello World";

// define `getName` with type
const getNameV2: (name: string, age: number) => string = (name: string, age: number) => "Hello World";

// define `getName` with return type
const getNameV3 = (name: string, age: number): string => "Hello World!";

// If we need to tell as Const type
const getNameV4 = (name: string, age: number): string => "Hello World!" as const;



