// -  I N T E R F A C E S  -

interface IAnimal {
    name: string;
    age: number;
    country: string;
    getInfo: () => string[];
}

interface IPet {
    petName: string;
    getPetSong: () => string;
}


// Now we are going to implement the interface IAnimal
class Lion implements IAnimal {
    name: string;
    age: number;
    country: string;
    //
    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //
    public getInfo = (): string[] => {
        return [this.name, this.age.toString(), this.country];
    };
}
//
//
class Dog implements IAnimal, IPet {
    name: string;
    petName: string;
    age: number;
    country: string;
    //
    constructor(name: string, petName: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.petName = petName;
    }
    //
    public getInfo = (): string[] => {
        console.log("Hi! im a dog");
        return [this.name, this.age.toString(), this.country];
    };
    //
    public getPetSong = (): string => {
        return "Woof Woof!";
    };
}
