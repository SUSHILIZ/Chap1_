// static property

class User{
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`Username:${this.userName}`);
    }

    static createId(){
        return `123`
    }
}

const sushil= new User("sushil")
console.log(sushil.createId())

class Teacher extends User{
    constructor(userName,email){
    super(userName)
    this.email=email

    }
}

const sarala= new Teacher("sarala","sar@gmial.com")

console.log(sarala.createId())


//static keyword donot give access.

