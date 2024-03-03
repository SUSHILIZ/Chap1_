const myArr=[1,2,3]
const myArr1=[6,7,8]
// myArr.push(myArr1)
// console.log(myArr);

const newArray=myArr.concat(myArr1)
// console.log(newArray);

//spread concept glass..
const allNum=[...myArr,...myArr1]
// console.log(allNum);


const aArray=[1,2,3,4,[5,6],7,8,[9,6,[5,4]]]
const usableArray=aArray.flat(Infinity)
// console.log(usableArray);

//isArray used for question asking.
console.log(Array.isArray("Hitesh"));

//from used for conversion into array
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"})); //interesting case

let score1=200
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3));