// -----High Order Array loops----

//for of

// ["","",""]
// [{},{},{}]  //common scenario

const myArray = [1, 2, 3, 4, 5]
for (const num of myArray) {
    // console.log(num);          => 1
    //                               2
    //                               3
    //                               4
    //                               5
}
const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);        
}
// Output=>H 
//         e
//         l
//         l

//         W
//         o
//         r
//         l
//         d

// Maps => unique and donot have duplicate value

/*
const map=new Map()
map.set('NP',"Nepal")
map.set('USA',"United States America")
map.set('IN',"India")
map.set('BR',"Brazil")
map.set('BR',"Brazil")
console.log(map); 
*/

/*
for (const [key, value] of map) {
    console.log(key,":-",value);
}
*/

// forof loop works for map object but not for objects.

// checking
const myObj = {
    game1: "PUBG",
    game2: "spiderman"
}
// for (const [key,value] of myObj) {
//     console.log(key,":-",value); //=> myObj is not iterable.
// }

//for in
const anotherObj = {
    js: "javascript",
    cpp: "C++",
    py: "Python"
}
for (const key in anotherObj) {
    // console.log(`fullform of ${key} is ${anotherObj[key]}`);
}

// lets check for array 

const coding = ["python", "js", "cpp", "swift"]

for (const key in coding) {
    // console.log(coding[key]);
}

const map = new Map()
map.set('NP', "Nepal")
map.set('USA', "United States America")
map.set('IN', "India")
map.set('BR', "Brazil")
map.set('BR', "Brazil")

for (const key in map) {
    // console.log(key);   // map is no iterative.
}

//for each loop
//----normal function----
// const programName=["js","cpp",'java',"php"]
// programName.forEach(function(item){
//     console.log(item);
// })
// ------arrow function----

const programName = ["js", "cpp", 'java', "php"]
// programName.forEach((item) => {
//     // console.log(item);
// }
// )

// function printMe(item){
//     console.log(item);
// }
// programName.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding=[
    {
        languagename:"javascript",
        languageFileName:"js"
    },
    {
        languagename:"python",
        languageFileName:"py"
    },
    {
        languagename:"java",
        languageFileName:"java"
    }
]
myCoding.forEach((item)=>{
console.log(item.languagename);
})











