// const tinderUser=new Object()    //singeleton object

const tinderUser={}


tinderUser.id="123abc"
tinderUser.name="sushil"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"Sushil@gmail.com",
    fullname:{
        userFullName:{
            firstName:"sushil",
            lastName:"Subedi"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"} 

// const obj3={obj1,obj2}
// console.log(obj3);

// const obj3={...obj1,...obj2}
// console.log(obj3);

//anotherway
const obj3=Object.assign({},obj1,obj2)
// const obj3=Object.assign(obj1,obj2)   //same as 33
// console.log(obj3);


const users=[
    {
        id:12,
        name:"Sushil"
    },
    {
        id:13,
        name:"sarala"
    }
]
// console.log(users[0]);
// console.log(users[0].id);
// console.log(users[0].name);
// console.log(users[1].id);
// console.log(users[1].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//----------------------------De-structuring-----------------------------------------
const course={
    courseName:"Js In Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// console.log(course.courseInstructor);

const {courseInstructor}=course
const {courseInstructor:instructor}=course //same as 69 but courseInstructor is made easier with replace with instructor and can be accessed with instructor
console.log(courseInstructor); 
console.log(instructor);


//JSON API
 
// {
//     "name":"sushil",
//     "coursename":"JS In Hindi",
//     "price":"free"
// }


 [
    {},
    {},
    {}
 ]