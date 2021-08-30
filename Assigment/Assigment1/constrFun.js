/**
 * Function constructor
 * @param {String} name 
 * @param {Number} age 
 * @param {String} address 
 */
function Student(name,age,address){
  this.name=name;
  this.age=age;
  this.address=address;
  this.getFullAddress=function(){
      return this.name+" "+this.age+" "+this.address
  }
}

const stu=new Student("Redda",30,'127 Fairfield')
console.log(stu.getFullAddress())




