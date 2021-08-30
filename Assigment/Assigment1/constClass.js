/**
 * Student class
 */
class Student{
    constructor(name,age,address){
     this.name=name;
     this.age=age;
     this.address=address;
    } 
    getFullAddress(){
        return this.name+" "+this.age+" "+this.address   
    }  
 }
 
const stu=new Student("Redda",30,'127 Fairfield')
console.log(stu.getFullAddress())