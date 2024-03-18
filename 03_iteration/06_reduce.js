// ---------------------reduce------------------
const myNumbs=[1,2,3,4]

// const myTotal=myNumbs.reduce((acc,curval)=>acc+curval,0)
// console.log(myTotal);

const myTotal=myNumbs.reduce((acc,curval)=>{
return acc+curval
},0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"Js Course",
        price:4999
    },
    {
        itemName:"py Course",
        price:3999
    },
    {
        itemName:"html Course",
        price:1999
    },
    {
        itemName:"css Course",
        price:2999
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);