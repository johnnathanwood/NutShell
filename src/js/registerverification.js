
const data = require("./registrationmanager")
const form = require("./registrationForm")


function register(){
    //values from the form when someone hits submit

    let username = document.getElementById("entryUsername")

    let useremail = document.getElementById("entryEmail")

    //get users from the database
    registrationData.getAllUsers().then(allUsers =>{
        let registeringUser = {
            userName: userName,
            email: userEmail
        }
        //loop over the users in the database and compare values from the form
        for(let i = 0; i < allUsers.length; i++){
            if(allUsers[i].userName === userName || allUsers[i].userEmail === userEmail){
                alert("your username AND email must be unique. We found a duplicate in your database.")
            }else{
                alert("woooo! you're logged in!")
                //add them to db! and theeeeeennnn
                APIManager.addUserToDb(registeringUser)
                .then(userThatWasAdded => {
                    sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
                })
                //change the view
            }
        }
    })

}

module.export = register
