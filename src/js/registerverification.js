
const data = require("./registrationmanager")
const form = require("./registrationForm")



function register(){
    //values from the form when someone hits submit
console.log("register")
    let username = document.getElementById("userName")

    let useremail = document.getElementById("userEmail")

    //get users from the database
        data.loadRegistration().then(getAllUsers =>{
        const registeringUser = {
            userName: username,
            email: email
        }
        console.log("registeringUser".userName)
        //loop over the users in the database and compare values from the form
        for(let i = 0; i < getAllUsers.length; i++){
            if(getAllUsers[i].userName === username || getAllUsers[i].userEmail === email){
                alert("your username AND email must be unique. We found a duplicate in your database.")
            // }else{
            //     alert(" You're logged in!")
                // add them to the database
                // data.loadRegistration(registeringUser)
                // .then(userThatWasAdded => {
                //     sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
                // })
                // change the view
            }
        }
    })

}

module.exports = register
