const userEntry = (result) => {


    return `<fieldset class="entryField">
        <h3 id="entryUsername">${result.username}</h3>
        <p id="entryEmail">${result.email}</p>
        <button id=${result.id} class="deleteButton">Delete</button>
    </fieldset>
`
}
module.exports = userEntry