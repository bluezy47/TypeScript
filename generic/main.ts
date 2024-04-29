
const helloWorld = (data: any): any => {
    return data;
}

// test
let info = helloWorld('Hello World');
info.toLowercase(); // Error: Property 'toLowercase' does not exist on type 'any'.  

let count01 = helloWorld(1);    
count01.toLowercase(); // Error: Property 'toLowercase' does not exist on type 'any'.


// When we use `Generic` in the function, it will throw an error if we try to access the property that does not exist in the data type.
const helloWorldG = <T>(data: T): T => {
    return data;
}

//
let infoG = helloWorldG<string>('Hello World');
infoG.toLowerCase(); // OK

let countG = helloWorldG<number>(1);
// countG.toLowercase(); // Error: Property 'toLowercase' does not exist on type 'number'.