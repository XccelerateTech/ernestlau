class Person {
    constructor({age,name}) {
        this.age = age;
        this.name = name;
    }
    info () {
        return `The person is called ${this.name} and is ${this.age} years old.`;
    }
}

class Student {
    constructor({age,name,gpa}){
        this.basic = new Person({age,name})
        this.gpa = gpa;
    }
    info () {
        return this.basic.info() + ` He has an overall GPA of ${this.gpa} in the university.`;
    }
}

const student1 = new Student({age: 44, name: 'Tom', gpa: 3});
console.log(student1.info())// The person is called Tom and is 44 years old