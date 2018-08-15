const regForm = require("./registrationForm")
const registrationData = require("./registrationmanager")
const logForm = require("./loginForm")
// targeting <div> on index to build template for form
document.querySelector("#registrationForm").innerHTML = regForm.buildFormTemplate()

document.querySelector("#login").innerHTML = logForm.buildLoginTemplate()

// targeting registerButton to add a listener when clicked
document.querySelector("#registerButton").addEventListener("click", () => {
    function saveFunction() {
        let n = String();
        return n
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
