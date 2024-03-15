const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy values
// false, 0, BigInt 0n, "",null, undefined, NaN

//truthy values
"0", 'false', " ", [], {}, function () { }

// ----To check empty array----
if (userEmail.length === 0) {
    console.log("Array is empty");
}
// -----To check empty Object------
const myObj = {}
if (Object.keys(myObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1=5??10  //=>5

// val1=null??12 //=>12

// val1=undefined??15 //=>15
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("Less than 80") : console.log("More than 80")