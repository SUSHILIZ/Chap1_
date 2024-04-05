const user = {
    username: "Sushil",
    loginCount: 8,
    signedIn: true,
    getUserDetail: function () {
        console.log(`Username:${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// user.getUserDetail()

// console.log(this); //=> {}


//User Constructor Function

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting= function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 7, true)  //see removing new of both once unexpected will happen
const userTwo = new User("sarala", 8, false)
// console.log(userOne);
console.log(userOne.constructor);
// console.log(userTwo); 

