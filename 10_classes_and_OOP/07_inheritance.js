class user{
constructor(userName){
this.userName=userName
}
logMe(){
    console.log(`Username is ${this.userName}`);
}
}

class Teacher extends user{
    constructor(userName,email,password){
        super(userName)   //super keyword is used in stead of call and each but only in class.
        this.email=email
        this.password=password
    }

    addCourse(){
       console.log(`A new course was added by ${this.userName}`); 
    }
}

const hero=new Teacher('Sushil',"ssu@gmail.com","132")

hero.addCourse()
hero.logMe()

const villian= new user("sarala")

villian.logMe()

console.log(hero instanceof Teacher);
console.log(hero instanceof user);

console.log(villian instanceof Teacher);


