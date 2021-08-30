/**
 * Array methods
 */
let arr=[3,6,1,8,4,9]
/**
 * double all array values 
 */
let double=arr.map(x=>2*x)
console.log(double)
/**
 *  find all even value
 */
let even=arr.filter(x=>x%2===0)
console.log(even)
/**
 * find index of 8
 */
let index=arr.findIndex(x=>x===8)
console.log(index)
let value=arr.find(x=>x===1)
console.log(value)
