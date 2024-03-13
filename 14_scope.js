// var c=300
let a=500

if(true){                  //{}=>block scope.
    let a=10
    const b=20
    var c=30
    console.log("Inner:",a);
}

//outside curly braces are global scope.

console.log(a);
// console.log(b);
// console.log(c);