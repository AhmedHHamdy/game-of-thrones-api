# Project Title

Game of Thrones Character API

## Description

This API provides information about Game of Thrones characters. It allows users to retrieve a list of all characters or fetch details about a specific character.

## API Reference

### Base URL

http://localhost:5000/api


### Get all characters

Retrieves a list of all Game of Thrones characters.

```http
GET /characters

[
  {
    "name": "Eddard Stark",
    "age": 35,
    "house": "House Stark",
    "title": "Lord of Winterfell",
    "status": "Deceased",
    "bestQuote": "Winter is coming.",
    "significantDecisions": [
      "Accepting the position of Hand of the King",
      "Revealing the truth about Joffrey's parentage"
    ]
  },
  {
    "name": "Jon Snow",
    "age": 20,
    "house": "House Stark",
    "title": "Lord Commander of the Night's Watch",
    "status": "Alive",
    "bestQuote": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.",
    "significantDecisions": [
      "Forming an alliance with the Wildlings",
      "Leading the defense against the Night King"
    ]
  },
  {
    "name": "Daenerys Targaryen",
    "age": 25,
    "house": "House Targaryen",
    "title": "Queen of the Andals and the First Men",
    "status": "Deceased",
    "bestQuote": "I am the blood of the dragon.",
    "significantDecisions": [
      "Conquering the cities of Slaver's Bay",
      "Launching an attack on King's Landing"
    ]
  }
  // ...
]
```

Get character by name
Retrieves details about a specific Game of Thrones character.
GET /characters/{name}

Replace {name} in the URL with the name of the character.

Response
```
{
  "name": "Jon Snow",
  "age": 20,
  "house": "House Stark",
  "title": "Lord Commander of the Night's Watch",
  "status": "Alive",
  "bestQuote": "When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.",
  "significantDecisions": [
    "Forming an alliance with the Wildlings",
    "Leading the defense against the Night King"
  ]
}

```

## Usage
To use this API, make HTTP requests to the provided endpoints. https://cheerful-pike-pantsuit.cyclic.app

## Authentication
This API does not require authentication. The endpoints can be accessed without an API key.

## Errors
The API may return the following error responses:

404 Not Found: When the requested resource is not found.
500 Internal Server Error: When an unexpected error occurs on the server.
Please refer to the API responses for detailed error messages.

## Conclusion
The Game of Thrones Character API provides a convenient way to access information about various characters from the Game of Thrones series. Use the provided endpoints to retrieve all characters or fetch details about a specific character. Enjoy exploring the world of Westeros through this API!

