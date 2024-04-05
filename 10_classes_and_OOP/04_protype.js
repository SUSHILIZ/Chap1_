// what to do?

// let myName="sushil     "
// let hero = "spiderman   "

// console.log(myName.truelength);


//check if given power in object, will power gone to array,onject,anything?===yes
let myHeros = ["salman", "sharukh"]

let heroPower = {
    salman: "don",
    sharukh: "acting",

    getSharukhPower: function () {
        console.log(`sharukh power is ${this.sharukh}`);
    }
}

Object.prototype.sushil = function () {
    console.log("Sushil is present in all objects");
}



heroPower.sushil()
myHeros.sushil()

//checking power given to array, will this power available in object?

Array.prototype.heySushil = function () {
    console.log("Available in all array");
}
myHeros.heySushil()
// heroPower.heySushil()

// ------from this we can learn that if we give power to Object, power will be given to All(array,object,etc)

// inheritance

const user = {
    name: "sushil",
    email: "ssubedi953@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: teachingSupport
}

Teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(teachingSupport,Teacher)

// for me to understand First access second.


let anotherName="ming    "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherName.trueLength()
"sushil".trueLength()