// ---------------------------this-----------------------
const user = {
    userName: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this);  //this talks about current context and used in object only.
    }
}
// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()


// console.log(this); //=>{}
//but in browser it shows window object.

// ----------------------------------------------------------------------------

// function chai(){
//     let userName="sushil"
//     console.log(this.userName); //=>undefined  this can't be used in function
// }
// chai()


// const chai=function(){
//     let userName="sushil"
//     console.log(this.userName); //=>undefined
// }
// chai()


// -------------------------Arrow Function with this use checking-----------------------
const chai = () => {
    let userName = "sushil"
    console.log(this.userName);
}
// chai()

// ---------------Arrow Function--------------
//Basic arrow function
// const addTwo=(num1,num2)=>{
// return num1+num2
// }

//Implicit Return
// {} and return not used and used in same line

// const addTwo=(num1,num2)=> num1+num2

//if 51 confusion num1+num2 also can be wrapped in parathesis i.e. ()

// const addTwo=(num1,num2)=> (num1+num2)


// for obj return it should be wrapped in ()

const addTwo=(num1,num2)=> ({userName:"hitesh"})


console.log(addTwo(2,2));

// these arrow functions will be in use while studying loops.

// for eg
 
const myArray=[2,5,6,7,8,9]

// myArray.forEach(()=>())

// will be discussed in loop topic

