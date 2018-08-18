const registerForm = require("./registrationForm")
const verification = require("./registerverification")

const loginForm = Object.create(null, {

    // clear the form
        clearForm: {
            value: () => {
                document.querySelector("#userName").value = ""
                document.querySelector("#userEmail").value = ""
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
                <button id="loginButton">Log In</button><button  id="function" onclick="buildForm()">Register</button>
                `
            }
        }
    })

    const addListener = () => {
        document.querySelector("#function")
            .addEventListener("click", renderForm)
    }

    function renderForm () {
       registerForm(buildFormTemplate())
        
    }



    // const putFormOnPage = () => {
    //     $("#registrationform").html(registerForm.buildFormTemplate())
    //     document.querySelector("#registerButton")
    //     .addEventListener("click", registerButton)

    // }

    module.exports = loginForm