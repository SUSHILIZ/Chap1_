const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map((num)=>(num+10))

// console.log(newNums);

// --------------using for each--------
const modArray=[]
myNums.forEach((num)=>{
    return modArray.push(num+10)
})
// console.log(modArray);

// -------chaining----// map and filter can be used together

const newNums=myNums
              .map((num)=>(num*10))
              .map((num)=>(num+1))
              .filter((num)=>(num>40))
               
console.log(newNums);



