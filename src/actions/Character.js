// Function using fetch to POST to our API endpoint
export function createCharacter(data) {
    return fetch('/.netlify/functions/create-character', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.text()
    })
}

export function getCharacters(userId) {
    return fetch(`/.netlify/functions/get-characters?id=${userId}`, {
        method: 'GET'
    }).then(response => {
        return response.text()
    })
}