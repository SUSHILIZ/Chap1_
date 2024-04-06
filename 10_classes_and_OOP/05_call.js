function setUserName(username) {
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    setUserName.call(this,username)  //.call==>for reference hold
    this.email=email
    this.password=password
}

const hero= new createUser("sushil","ssubedi13@fb.com","123")
console.log(hero);