const regForm = require("./registrationForm")
const registrationData = require("./registrationmanager")

// targeting <div> on index to build template for form
document.querySelector("#registrationForm").innerHTML = regForm.buildFormTemplate()

// targeting registerButton to add a listener when clicked
document.querySelector("#registerButton").addEventListener("click", () => {
    function saveFunction() {
        let n = String();
        return n
    }

    const newUser = {
        username: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
    }

    console.log(newUser)

    // Send to API
    registrationData.saveRegistration(newUser)

    .then(() => {
        FormManager.clearForm()
    })
    })
