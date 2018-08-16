const registrationData = {}


registrationData.saveRegistration = (entry) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(result => result.json())
    }
    registrationData.loadRegistration = () => {
        return fetch("http://localhost:8088/users")
        .then (result => result.json())
    }

    module.exports = registrationData