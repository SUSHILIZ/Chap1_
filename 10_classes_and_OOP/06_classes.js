// ES6

class user {
    constructor(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    }

    encrptPassword() {
        return `${this.password}abc`
    }
    changeUsername() {
        return `${this.userName.toUpperCase()}`
    }

}

const hero = new user("sushil", "susfb.com", "123")

console.log(hero.encrptPassword());
console.log(hero.changeUsername());

//behind the scene

function userOne(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
}

userOne.prototype.encrptPassword=function(){
    return `${this.password}abc`
}

userOne.prototype.changeUsername=function(){
    return `${this.userName.toUpperCase()}`
}

const zero = new userOne("sara", "susfb.com", "567")

console.log(zero.encrptPassword());
console.log(zero.changeUsername());