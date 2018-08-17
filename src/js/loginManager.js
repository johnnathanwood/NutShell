const loginData = {}


    loginData.loadLogIn = () => {
        return fetch("http://localhost:8088/users")
        .then (result => result.json())
    }

    loginData.getAllUsers = () => {
        return fetch("http://localhost:8088/users")
            .then (r => r.json())
}

    module.exports = loginData