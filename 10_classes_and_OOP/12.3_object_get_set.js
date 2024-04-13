//Object based syntax
const User={
    _email:"ss@hmail.com",
    _password:"abc",
    
    get email(){
    return this._email.toUpperCase()
    },
    
    set email(value){
    this._email=value
    },
    get password(){
    return this._password.toUpperCase()
    },
    
    set password(value){
    this._password=value
    }
    }
    
    const hero= Object.create(User)
    console.log(hero.email);
    console.log(hero.password);