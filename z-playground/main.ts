// For Testing.....

interface Employee {
    userName: string;
    fullName: string;
    birthDate: Date;
    nic: string;
    email: string;
    phone?: string;
    homeAddress?: string;
    prvJobs?: string[];
    getBasicInfo: () => string;
}

// make a new object
let Jenny: Employee;
Jenny = {
    userName: 'jenny',
    fullName: 'Jenny Doe',
    birthDate: new Date('1990-01-01'),
    nic: '900101-1234',
    email: 'jenny@gmail.com',
    phone: '0771234567',
    homeAddress: '123, Main Street, Colombo 01',
    prvJobs: ['ABC Company', 'XYZ Company'],
    getBasicInfo: function () {
        return `${this.fullName} - ${this.email}`;
    }
}
//
console.log(Jenny.getBasicInfo());


// Array Types....
type StringArray = Array<string>;
let names: StringArray;
names = ['John', 'Doe', 'Smith'];

// Any Type Array
let anyArray: any[];
anyArray = [1, 'John', true, 3.14];

// Array type which accepts a function as an element
type funcArray = ((name: string, age: number) => string | boolean)[];

interface funcArrayElement {
    (name: string, age: number): string | boolean;
}
let helloWorldFunc: funcArrayElement;
helloWorldFunc = (name: string, age: number) => {
    return `Hello ${name}, you are ${age} years old.`;
}

//
//
let funcArray1: funcArray;
funcArray1 = [helloWorldFunc]; // Assigning the function to the array

