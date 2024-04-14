// Lexical scoping and Closure


//Lexical scoping
function outer(){
    let username="sushil"
    // console.log(secret);
    function inner() {
        let secret="123"
        console.log("inner",username);
    }
    function innerTwo(){
        console.log("innerTwo",username);
        // console.log(secret);
    }
    inner()
    innerTwo()
}
outer()

// ------------------for understanding sano ley thula sanga magna sakxa thulo ley sano sanga magna sakdaina and sano ley sano sangai pani magna sakdaina-------


//Closure
function makeFunc(){
    const name="hero"
    function displayName() {
        console.log(name);
    }
    return displayName; // whole lexical scope will be returned.
}
const myFunc=makeFunc()
myFunc()


// ------After learning this you can have a look at real life example in another slide-----