// Primitive

// 7 String, Number, Boolean, Null, Undefined, Symbol, BigInt

let name = "sushil"

let score = 33
let scoreValue = 33.45

let isLoggedIn = false

let outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

//  console.log(id == anotherId) 

const bigNumber = 143636636377373n


//Reference(Non Primitive)
 // Array, Objects, Functions

const peopleName = ["Hari", "Shyam", "Laxy", "kabo"]

let myObj = {
    name: "Sushil",
    age: 23
}

const myFunction = function(){
    console.log("Hello World!!");
}

console.log(typeof myFunction);