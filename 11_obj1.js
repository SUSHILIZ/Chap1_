//singleton
//object.create => Constructor Method

// object literals

const mySym=Symbol("Key1") 

const JsUser={
    name:"Hitesh",
    "Full Name":"Sushil Subedi",
    age:18,
    [mySym]:"mykey1",
    location:"Pokhara",
    email:"pokhara@google.com",
    isLoggedIn:false,
    lastLoginDaysa:["Monday","Saturday"]
}
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email="pokhara@chatgpt.com"
// console.log(JsUser);

// Object.freeze(JsUser)
JsUser.email="pokhara@facebook.com"
// console.log(JsUser);

JsUser.greeting=function(){
console.log("Hello Js User");
}
JsUser.greeting();

JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
    }
JsUser.greetingTwo();
