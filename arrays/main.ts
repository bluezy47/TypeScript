// A R R A Y S - []
// ----------------------------------------------

// 01. only allow to hold a specific type of data
const emails = ["jenny@gmail.com", "lucy@gmail.com", "jhon@gmailcom"];
// emails.push(134); -> error ( only allow to hold a specific type of data (strings) )

const warriors: string[] = ['Ninja', 'Samurai', 'Ronin'];;
warriors.push('Viking'); // -> ok
// warriors.push(123); -> error ( only allow to hold a specific type of data (strings) )

// Array Types..
// When define an array, we can define the type of the array elements
const ninjas: string[] = [];
const samurais: Array<string> = [];
const ages: number[] = [];
// etc...


// Array and Function Types...
let createStrgins: () => string[]; // type is a function, which returns an array of strings
let stringsCreators: (() => string)[]; // type is an array of functions, which returns a string

// Exmaple:
let sayMyName: (name: string) => string | boolean;
sayMyName = (name: string): string | boolean => {
    if (name === "Walter White") {
        console.log("You are god damn right");
        return true;
    }
    return `Hello my Name is: ${name}`;
}

// make a Array to Hold the functions...
let sayMyNames: ((name: string) => string | boolean)[] = [];
sayMyNames.push(sayMyName); // push the function to the array
// call the functions...
sayMyNames.forEach((fn) => {
    console.log(fn("Walter White"));
    console.log(fn("Jesse Pinkman"));
    console.log(fn("Saul Goodman"));
    console.log(fn("Gus Fring"));
    console.log(fn("Mike Ehrmantraut"));
});


//
// Union Type Arrays...
let arrayOfNumbersOrStrings: (number | string)[] = [];
arrayOfNumbersOrStrings.push(123);
arrayOfNumbersOrStrings.push("Hello World");


//
// Evolving Any Arrays...
// If we don't know the type of the array elements, we can use the any type
let randomArray: any[] = []; // this can hold any type of data
randomArray.push(123);
randomArray.push("Hello World");
randomArray.push(true);
randomArray.push({ name: "Jenny" });
randomArray.push(["Jenny", "Lucy", "Jhon"]);
randomArray.push(() => console.log("Hello World"));
randomArray.push(undefined);
randomArray.push(null);
// etc... you got the idea ...

//
// Array - Spreads-
// ... -> spread operator
const fruits: string[] = ['apple', 'banana', 'orange'];
const vegetables: string[] = ['carrot', 'potato', 'onion'];
const foods: string[] = [...fruits, ...vegetables]; // join the two arrays...

// When you need to join diff type of arrays... then you have to use the any type
const names: string[] = ['Jenny', 'Lucy', 'Jhon'];
const salles: number[] = [123, 456, 789];
const namesAndSalles: any[] = [...names, ...salles]; // join the two arrays...


// Array as Arguments in Functions...
const printNumbers = (numbers: number[]): void => {
    numbers.forEach((num) => console.log(num));
};

//
// T U P L E S - []
// ----------------------------------------------
// Tuples - []
// ----------------------------------------------
// Array of a Fixed Length = Tuple
let person: [string, number, boolean];
person = ["Jenny", 25, true]; // ok
// person = ["Jenny", 25]; // error (missing the boolean value)
// person = ["Jenny", 25, true, "Hello World"]; // error (more than 3 values)
// etc... you got the idea ...

// `Tuple` can be passesd as arguments in functions...
const printPerson = (name: string, age: number, isMarried: boolean): void => {
    console.log(`Name: ${name}, Age: ${age}, Married: ${isMarried}`);
};
/* 
    Here TypeScript allows us to pass the tuple as arguments, 
    Because tuple will hold exactly 3 values and with correct types in order.
    But, we can't pass an `Array` becuase we do not know the size and order of the values...
*/
printPerson(...person);

