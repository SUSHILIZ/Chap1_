// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    //named IIFE
    console.log("DB CONNECTED");
})();   //; is used to stop the context.

    //Function which immediately execute is iife 

    // sometime because of pollution of global scope creates problem
    // Inorder to eliminate pollution, IIFE is used.

    // -------In Arrow Function Form-------

    ((name)=>{
        console.log(`DB CONNECTED, ${name}`);
    })("hitesh")

    //If you are writing two iife at once one should have semicolon.