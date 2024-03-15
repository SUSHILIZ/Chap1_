
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
    return `${userName} just logged In`
}

// console.log(logInUserMessage("Sushil"));
// console.log(logInUserMessage());


// POint To REMember
// after return no operation take place.


function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(100,200,300,400))
//... is a rest operator and also called spread operator too.

const user={
    name:"hitesh",
    price:199
}
function handleObj(anyobj){
console.log(`name is ${anyobj.name} and price is ${anyobj.price}`);
}
// handleObj(user)

//you can also pass object directly too.
handleObj({
    name:"Sarala",
    price:399
})

const myNewArray=[100,200,300,400]

function returnSecondvalue(secondvalue){
return secondvalue[1]
}
console.log(returnSecondvalue(myNewArray));
//Also you can pass array directly also.
console.log(returnSecondvalue([100,200,300,400]));

