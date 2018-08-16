const regForm = require("./registrationForm")
const registrationData = require("./registrationmanager")
const logForm = require("./loginForm")
// targeting <div> on index to build template for form

document.querySelector("#login").innerHTML = logForm.buildLoginTemplate()
document.querySelector("#registrationForm").innerHTML = regForm.buildFormTemplate()



// targeting registerButton to add a listener when clicked
document.querySelector("#registerButton").addEventListener("click", () => {
    // get input field values from username and email
    registrationData.getAllUsers().then(allUsers =>{
        let registeringUser = {
            userName: username,
            email: email
        }
    })
})

    // send username and email to verification method 
    function register(){
        let userName = document.getElementById("entryName")
    
        let email = document.getElementById("entryName")

    // verification method needs to get all users

    // verification method needs to iderate the collection of all users and compare input field values to each one
    for(let i = 0; i < allUsers.length; i++){
        if(allUsers[i].userName === userName || allUsers[i].email === email){
            alert("your username AND email must be unique. We found a duplicate in your database.")
        }else{
            alert("woooo! you're logged in!")
            //add them to db! and theeeeeennnn
            registrationData.addUserToDb(registeringUser)
            .then(userThatWasAdded => {
                sessionStorage.setItem("activeUser", JSON.stringify(userThatWasAdded));
            })

            console.log(allUsers)

    // if username and email are unique store in API

    // if not unique alert user
        }
    }

// once username and email field are filled in. newUser holds the data until executed by the registerButton
    const newUser = {
        username: document.querySelector("#userName").value,
        email: document.querySelector("#userEmail").value,
    }

    console.log(newUser)

    // Send to API
    registrationData.saveRegistration(newUser)

    .then(() => {
        regForm.clearForm()
    })

    .then(() => {
        location.reload()
    })
    }
