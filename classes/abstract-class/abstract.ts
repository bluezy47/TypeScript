// -  A B S T R A C T  -

abstract class TeacherX {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    teach() {
        console.log(this.name + ' is teaching');
    }
    abstract studyStyle(): void;
}

class StudentTeacherX extends TeacherX {
    uniGrade: number;
    univercity: string;
    constructor(name: string, uniGrade: number, univercity: string) {
        super(name);
        this.uniGrade = uniGrade;
        this.univercity = univercity;
    }
    studyStyle(): void {
        console.log("I'm a student teacher and I study at " + this.univercity);
    }
}