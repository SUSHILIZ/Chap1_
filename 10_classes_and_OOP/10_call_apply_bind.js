//This was prepared by myself inorder to understand them in one program
const name = {
    firstName: "Sushil",
    lastName: "Subedi",
    fullName: function (place) {
        console.log(this.firstName + " " + this.lastName + " " + "from" + " " + place);
    }
}


name.fullName.call(name, "pokhara") //using call
name.fullName.apply(name,["pokhara"]) //using apply (similar to call but pass array as an argument)
const f=name.fullName.bind(name,"pokhara")  //using bind
f() //Ivoke the bound function