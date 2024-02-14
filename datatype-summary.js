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






// ----------------------Memory------------------------

//stack(primitive) Heap(Non-primitive)



let myYoutubeName="Sushil"
let anotherName=myYoutubeName
anotherName="Sangam"

console.log(myYoutubeName); //Sushil
console.log(anotherName); //Sangam



let UserOne={
    email:"sushil@gmail.com",
    esewa:"user1@esewa"
}
let UserTwo=UserOne
UserTwo.email="sangam@gmail.com"

console.log(UserOne.email); //sangam@gmail.com
console.log(UserTwo.email); //sangam@gmail.com

