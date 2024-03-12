
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H"); 
}

// sayMyName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumber(3,4)

//Inorder to store value at other variable

function addTwoNumber(num1,num2){
//    let result=num1+num2
    // return result
    return num1+num2 //alternative for 21 and 22.
}
const result=addTwoNumber(3,4)
// console.log("Result:",result);

//result declared inside addTwoNumber and result declared outside are completely different thing.


function logInUserMessage(userName="sam"){
    if(!userName){
        console.log("please enter a username");
        return //return is used for termination of operation
    }
    return `${userName} just loggined In`
}

// console.log(logInUserMessage("Sushil"));
console.log(logInUserMessage());


// POint To REMember
// after return no operation take place.

