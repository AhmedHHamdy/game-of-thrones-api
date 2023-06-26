const express = require('express')
const app = express()
const characters = require('./data')
const PORT = 5000



// Display index.html on the home page
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html')
})

// Display all API data
app.get('/api/characters', (request, response) => {
    response.json(characters)
})

// Search for a specific character
app.get('/api/characters/:name', (request, response) => {
    let paramName = request.params.name
    paramName = paramName.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
    console.log(paramName)
    const error =  {
        "name": {
            "age": "error",
            "house": "error",
            "title": "error",
            "status": "error",
            "bestQuote": "error",
            "significantDecisions": [
                "error"
            ]
        }
    }
    const character = characters.find(e => e[paramName]) || error
    // console.log(character)
    response.json(character)
})

// Create the server and listen on port 5000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})