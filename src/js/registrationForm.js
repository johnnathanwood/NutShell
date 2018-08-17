const registerForm = Object.create(null, {

// clear the form
    clearForm: {
        value: () => {
            document.querySelector("#username").value = ""
            document.querySelector("#email").value = ""
        }
    },
    
// template for the registration form
    buildFormTemplate: {
        value: () => {
            return `
            <fieldset>
            <label for="username">Username</label>
            <input required type="text" id="username">
            </fieldset>
            <fieldset>
            <label for="email">Email</label>
            <input required type="text" id="email">
            </fieldset>
            <button id="registerButton">Sign Up</button>
            `
        }
    }
})



// const putFormOnPage = () => {
//     $("#registrationform").html(registerForm.buildFormTemplate())
//     document.querySelector("#registerButton")
//     .addEventListener("click", registerButton)

// }

module.exports = registerForm


