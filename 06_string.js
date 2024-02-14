const name="Sushil"
const repoCount=33
/*
console.log(name+repoCount);
console.log(name+repoCount+"value");
//Don't use this because it is outdated.
*/
//Use this below
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName= new String('sushil-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="  sushil  "
console.log(newStringOne.trim());

const url="htpps://sushil.com/sushil20%subedi"
console.log(url.replace('20%','-'));

console.log(url.includes('sushil'));
console.log(url.includes('sarala'));


//conversion into array
console.log(gameName.split('-'));




