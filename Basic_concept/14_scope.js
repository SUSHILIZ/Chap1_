// var c=300
let a=500

if(true){                  //{}=>block scope.
    let a=10
    const b=20
    var c=30
    // console.log("Inner:",a);
}

//outside curly braces are global scope.

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="hitesh"
    function two(){
        const website="Youtube"
       console.log(username); 
    }
    // console.log(website);
    two()
}
// one() 


if(true){
    const username="sushil"
    if (username==="sushil") {
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


//+++++++++++++++++++interesting+++++++++++++++
//there are two way of function decleration 

//first one and this can be accessed before declaration of function
console.log(addOne(2));
function addOne(num){
    return num+1
}

//second one and cannot be accessed before decleration
console.log(addTwo(2));
const addTwo=function(num){
    return num+2
}
