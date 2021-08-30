/**
 * Student class and student object literals
 */
import Person from './person.js'
export default class Student extends Person{
    constructor(name,address){
        super(17);
        this.name=name;
        this.address=address;
    }
sayHi = () => `Hi. I am ${this.name} and ${this.age} years old`; 
}
//export default Student;
const student={
    name:"bob",
    age:26,
    hobby:"BollyBall"
}
let student1={...student}
console.log(student1)
student1.name="Redda"
student1.age=45;
student1.hobby="Swim";

console.log(student)
console.log(student1)
