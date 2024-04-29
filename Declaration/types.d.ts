// .d.ts files are used to declare types and interfaces...

export interface User {
    name: string;
    age: number;
    email: string;
    phone: string;
    isMarried?: boolean;
}


// Define a class type...
export interface Employee {
    name: string;
    age: number;
    email: string;
    phone: string;
    isMarried?: boolean;
    getDetails(): string;
}

// Declare a function type...
declare function HelloWorld(message: string, date: string): string;
declare function HelloName(name: string): string;

//
// RunTime values...
declare let EmployeeName: string;
