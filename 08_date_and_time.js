//Date

let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(typeof myDate);

 let myCreatedDate=new Date(2023,0,18)
 console.log(myCreatedDate.toLocaleDateString());

 let dateOne=new Date(2023,0,17,5,12,40)
 console.log(dateOne.toLocaleString());

 let dateTwo=new Date("2023-01-17")
 console.log(dateTwo.toLocaleDateString());

 let dateThree=new Date("01-17-2023")
 console.log(dateThree.toLocaleDateString());

 let myTimeStamp= Date.now()
 console.log(myTimeStamp);
 // This is in millisecond.

console.log(myCreatedDate.getTime());

//conversion to second
console.log(Math.floor(myTimeStamp/1000));

 let newDate=new Date()
 console.log(newDate);
 console.log(newDate.getMonth()+1); //+1 bcoz start from 0.
 console.log(newDate.getDay()+1); 

//For modification
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))

