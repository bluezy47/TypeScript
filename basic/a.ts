(() => {
    let hello: string = "Hello World";
    console.log(hello);

    let age: number = 24;
    let status: string | number = age >= 45 ? "Old" : 100;
    if (typeof status === "string") 
        status.toUpperCase();
    // do something with status...


    // object define 01
    // this is called as `Object Literal`, we can define object with properties and their types
    // we can define optional properties as well also not reuseable as `Alias`.
    let myInfo: {
        name: string;
        age: number;
        isMarried: boolean;
        email?: string | undefined;
    }
    // object define 02
    // this is called as `Alias`, we can use this alias to define multiple objects with same structure
    // Simply this is kind of `Type` in TypeScript.
    type HelloWorld = {
        name: string;
        age: number;
        isMarried: boolean;
        email?: string | undefined;
    }
    //  
    // add values for the object
    myInfo = {
        name: "Anuruddha",
        age: 24,
        isMarried: false,
        email: "anuruddha@gmail.com"
    }
    //
    // add values for the object
    let myInfo2: HelloWorld = {
        name: "Anuruddha",
        age: 24,
        isMarried: false,
        email: "hello@gmail.com"
    }
    let myInfo3: HelloWorld = {
        name: "Nimeshika",
        age: 24,
        isMarried: false,
        email: "nethu@gmail.com"
    }
    // 
    // Structurally typed or Duck typing
    type withFirstName = {
        firstName: string;
    }

    // for this you will not able to add new properties, ( even we define it as `let` )
    const hasBoth = {
        firstName: "Anuruddha",
        lastName: "Bandara"
    }
    //
    // see exmaple
    type hasBothTest = {
        firstName: string;
        lastName: string;
    }
    let hasBoth1: hasBothTest = {
        firstName: "Anuruddha",
        lastName: "Bandara",
        // todo: email: "anuruddha@gmail.com" // -> Error: Object literal may only specify known properties, and 'email' does not exist in type 'hasBothTest'.
    }
    // But ... if we do like this, it will work
    let testHack = {
        firstName: "Anuruddha",
        lastName: "Bandara",
        email: "anuruddha@gmail.com",
        age: 33
    }
    const testHackImplemnt: hasBothTest = testHack;
    // todo: console.log(testHackImplemnt.age); // -> 33 ( error will not show, because hasBothTest do not have age property)
    // todo: console.log(testHackImplemnt.email); // -> Error
    console.log(testHackImplemnt.firstName); // -> Anuruddha ( error will not show, because hasBothTest have firstName property)



    // if we need a changable object we can define it as this..
    const hasBoth2: {[key: string]: string } = {
        firstName: "Anuruddha",
        lastName: "Bandara"
    }
    hasBoth2.middleName = "Jayampathi";


    // hasBoth is structurally typed as withFirstName
    let hasFirstName: withFirstName = hasBoth;
    console.log(hasFirstName.firstName); // -> Anuruddha


    // Nested Objects ... 
    type PoemPublisher = {
        name: string;
        email: string;
    }
    type Poem = {
        author: {
            name: string;
            email: string;
        };
        publisher?: PoemPublisher;
        title: string;
        isbn: string;
    }
    // define a object with nested objects
    let myPoem: Poem = {
        author: {
            name: "Anuruddha",
            email: "anuruddha@gmail.com"
        },
        // todo: since publisher is optional, we can remove it if we want...
        // publisher: {
        //     name: "Nimeshika",
        //     email: "nethu@gmail.com",
        // },
        title: "My Poem",
        isbn: "1234567890"
    }


})();