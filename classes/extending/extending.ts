// -  E X T E N D I N G  -

class Teacher {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    teach() {
        console.log(this.name + ' is teaching');
    }
}

class StudentTeacher extends Teacher {
    uniGrade: number;
    univercity: string;
    constructor(name: string, uniGrade: number, univercity: string) {
        super(name);
        this.uniGrade = uniGrade;
        this.univercity = univercity;
    }
    //
    studyStyle(): void {
        console.log("I'm a student teacher and I study at " + this.univercity);
    }
}


// Now we are going to implement the class Teacher
let teacher = new Teacher('John Doe');
teacher.teach();

// Now we are going to implement the class StudentTeacher
let studentTeacher = new StudentTeacher('Jane Doe', 90, 'Harvard');
studentTeacher.teach();
studentTeacher.studyStyle();
