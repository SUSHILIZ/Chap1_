const promiseOne = new Promise(function (resolve, reject) {      //promise is created
    //Do an async task
    //DB calls,cryptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})
promiseOne.then(function () {               //promise need to be consumed
    console.log("promise consumed");
})

// -----------------------------------------------------------------------------------------

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})

// -----------------------------------------------------------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Sushil", password: 123 })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})


// -------------------------------------------------------------------------------------------------
const promiseFour = new Promise(function (resolve, reject) {
    setInterval(function () {
        let error = true
        if (!error) {
            resolve({ username: "sarala", passwor: 123 })
        } else {
            reject("Error something went wrong")
        }
    }, 1000)
})
promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log('The promise is either resolved or rejected');
})

// --------------------------------------------------------------------
const promiseFive = new Promise(function (resolve, reject) {
    setInterval(function () {
        let error = true
        if (!error) {
            resolve({ username: "javasript", passwor: 123 })
        } else {
            reject("js  went wrong")
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// --------------We will study in another class for more clarity------------

// async function getAllUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/SUSHILIZ')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUser()

// ------above expression .then() and .catch() version----------
fetch('https://api.github.com/users/SUSHILIZ')
.then(function(response){
return response.json();   
})
.then(function(data){
console.log(data);
})
.catch(function(error){
console.log(error);
})




