const registerForm = Object.create(null, {

// clear the form
    clearForm: {
        value: () => {
            document.querySelector("#userName").value = ""
            document.querySelector("#userEmail").value = ""
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
            <button id="registerButton">Register</button>
            `
        }
    }
})


module.exports = registerForm


