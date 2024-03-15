//array

const myArray=[1,2,3,4,5]

const myHeros=["Shaktiman","Ninja Hattori","Motu Patlu"]

const myArray2= new Array(1,2,3,4,5)
// console.log(myArray2[2]);     =>3
//console.log(myArray2.length);   =>5

//Addition of 6 to array.
// myArray2.push(6)
// console.log(myArray2);

//removes last value.
// myArray2.pop()
// console.log(myArray2);

//Add to first
// myArray2.unshift(9)
// console.log(myArray2);

//Remove from first
// myArray2.shift()
// console.log(myArray2);

//shift() remove first and pop() remove last value.


// console.log(myArray2.includes(1)); =>true
// console.log(myArray2.indexOf(1)); =>0

//conversion into string.
// const newArray= myArray2.join()
// console.log(newArray);
// console.log(typeof newArray);

//slice, splice

console.log("A ",myArray2);
const myn1=myArray2.slice(1,3)
console.log(myn1);

console.log("B ",myArray2);
const myn2=myArray2.splice(1,3)
console.log("C ",myArray2);
console.log(myn2);


//diff between splice and slice

// slice=> doesn't within range and original array is not manipulated
//splice=>within range but original array is manipulated.
