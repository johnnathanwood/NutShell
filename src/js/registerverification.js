
const data = require("./registrationmanager")
const form = require("./registrationForm")


function register(){
    //values from the form when someone hits submit
console.log("register")
    let username = document.getElementById("entryUsername")

    let useremail = document.getElementById("entryEmail")

    //get users from the database
        data.getAllUsers().then(allUsers =>{
        let registeringUser = {
            userName: username,
            email: useremail
        }
        console.log("registeringUser".username)
        //loop over the users in the database and compare values from the form
        for(let i = 0; i < allUsers.length; i++){
            if(allUsers[i].userName === username || allUsers[i].userEmail === useremail){
                alert("your username AND email must be unique. We found a duplicate in your database.")
            }else{
                alert(" You're logged in!")
                //add them to the database
                APIManager.addUserToDb(registeringUser)
                .then(userThatWasAdded => {
                    sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
                })
                //change the view
            }
        }
    })

}

module.exports = register
