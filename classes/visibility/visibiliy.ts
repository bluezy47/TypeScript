// =  V I S I B I L I T Y  =

/*
    - public: default visibility, can be accessed from anywhere
    - protected: can be accessed only within the class and its subclasses
    - private: can be accessed only within the class
*/

class TeacherTest{
    private name: string;
    public school: string;
    protected email: string;
    //
    constructor(name: string, school: string, email: string) {
        this.name = name;
        this.school = school;
        this.email = email;
    }
    teach() {
        console.log(this.name + ' is teaching');
    }
}

class StudentTest extends TeacherTest {
    uniGrade: number;
    univercity: string;
    constructor(name: string, school: string, email: string, uniGrade: number, univercity: string) {
        super(name, school, email);
        this.uniGrade = uniGrade;
        this.univercity = univercity;
    }
    studyStyle(): void {
        console.log("I'm a student teacher and I study at " + this.univercity);
        // this.name; // Error: Property 'name' is private and only accessible within class 'TeacherTest'.
    }
}
