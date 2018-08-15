const loginForm = Object.create(null, {

    // clear the form
        clearForm: {
            value: () => {
                document.querySelector("#username").value = ""
                document.querySelector("#useremail").value = ""
            }
        },

        // cont addListener = () => {
        //     document.querySelector("#register")
        //     .addEventListener("click", putFormOnPage)
        // },

    // template for the login form
        buildLoginTemplate: {
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
                <button id="loginButton">Log In</button>
                `
            }
        }
    })



    // const putFormOnPage = () => {
    //     $("#registrationform").html(registerForm.buildFormTemplate())
    //     document.querySelector("#registerButton")
    //     .addEventListener("click", registerButton)

    // }

    module.exports = loginForm