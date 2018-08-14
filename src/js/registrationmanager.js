let registrationData = {}

registrationData.saveRegistration = (entry) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
    }
    registrationData.loadRegistration = () => {
        return fetch("http://localhost:8088/users")
        .then (response => response.json())
    }

    module.exports = registrationData