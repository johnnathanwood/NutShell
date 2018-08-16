const regForm = require("./registrationForm")
const registrationData = require("./registrationmanager")
const logForm = require("./loginForm")
// targeting <div> on index to build template for form

document.querySelector("#login").innerHTML = logForm.buildLoginTemplate()
document.querySelector("#registrationForm").innerHTML = regForm.buildFormTemplate()



// targeting registerButton to add a listener when clicked
document.querySelector("#registerButton").addEventListener("click", () => {
    // get input field values from username and email

    // send username and email to verification method 

    // verification method needs to get all users

    // verification method needs to iderate the collection of all users and compare input field values to each one
    

    // if username and email are unique store in API

    // if not unique alert user
}

// once username and email field are filled in. newUser holds the data until executed by the registerButton
    const newUser = {
        username: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
    }

    console.log(newUser)

    // Send to API
    registrationData.saveRegistration(newUser)

    .then(() => {
        regForm.clearForm()
    })

    .then(
        location.reload()
    )
})


