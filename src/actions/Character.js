// Function using fetch to POST to our API endpoint
export function createCharacter(data) {
    return fetch('/.netlify/functions/create-character', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response
    })
}

export function getCharacters(userId) {
    return fetch('/.netlify/functions/get-characters', {
        method: 'GET'
    }).then(response => {
        return response
    })
}