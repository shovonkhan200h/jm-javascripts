class Student {
    constructor(studentId, studentName){
        this.id = studentId;
        this.name = studentName;
    }
}

const student1= new Student(1, `shovon`)
console.log(student1)

class Parent {
  constructor(fatherName) {
    this.fatherName = fatherName;
  }
}

class Child extends Parent {
  constructor(fatherName, name) {
    super(fatherName);
    this.name = name;
  }

  fullName() {
    return this.fatherName + ' ' + this.name;
  }
}

const baby = new Child('Adnan', 'Tuba');
console.log(baby.fullName());
