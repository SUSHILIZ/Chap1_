// getter setter new syntax
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
         this._email=value
    }

    get password() {
        return `${this._password}sushil`;
    }

    set password(value) {
        this._password = value;
    }
}

const hero = new User("ss@hmail.com", "abc");
console.log(hero.password);
console.log(hero.email);

