// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);


const sushil={
    name:"sushil",
    class:12,
    isAvailable:true,
 
    todayComing:function(){
 console.log("today he is no coming");
    }
 }
 
 console.log(Object.getOwnPropertyDescriptor(sushil,"name"));
 
  Object.defineProperty(sushil,"name",{
         // writable:false,
         enumerable:false
      })
  console.log(Object.getOwnPropertyDescriptor(sushil,"name"));
 
 for (let [key,value] of Object.entries(sushil)) {
     if(typeof value !=='function'){
     console.log(`${key}:${value}`);
 }
 }
 
 // can we Change the value of pi into 5?
 const myObj= Object.getOwnPropertyDescriptor(Math,"PI")
 console.log(myObj);
 
 Object.defineProperty(Math,"PI",{
    value:5,
    writable:true
 })
 
 console.log(Math.PI);
 /*
 In summary, the attempts to modify Math.PI will not succeed because properties of the Math object, such as Math.PI, are read-only and cannot be modified.
 */
 
 
 