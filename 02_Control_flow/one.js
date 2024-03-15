// //if

// const temperature=41
// if(temperature<50){
// console.log("less than 50");
// }else{
// console.log("greater than 50");
// }

//Operator <,>,<=,>=,==,!=,===,!==

// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`power: ${power}`);
// }
// console.log(`power: ${power}`); =>scope probelem so not executed.

const balance = 2000

// if (balance>500) console.log("test"); //=>implicit scope

// if(balance<500){
//     console.log("Less than 500");
// }else if(balance>500){
// console.log("Greater than 500");
// }else{
//     console.log("Exactly 500");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}


