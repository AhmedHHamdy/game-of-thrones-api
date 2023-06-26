const inputButton = document.querySelector('#inputButton').addEventListener('click', fetchData)
const name = document.querySelector('#name')
const age = document.querySelector('#age')
const house = document.querySelector('#house')
const title = document.querySelector('#title')
const bestQuote = document.querySelector('#bestQuote')
const status = document.querySelector('#status')
const significantDecisions = document.querySelector('#significantDecisions')



async function fetchData() {
    const inputValue = document.querySelector('#characterName').value
    name.innerText = 'Name:'
    age.innerText = 'Age:'
    house.innerText = 'House:'
    title.innerText = 'Title:'
    bestQuote.innerText = 'bestQuote:'
    status.innerText = 'Status:'
    significantDecisions.innerText = 'significantDecisions:'
    try {
        const response = await fetch(`https://cheerful-pike-pantsuit.cyclic.app/api/characters/${inputValue}`)
        const data = await response.json()
    
        // console.log(data)
        name.innerText += ' '+ inputValue.toLowerCase().split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
        age.innerText += ' '+ data[Object.keys(data)[0]].age
        house.innerText += ' '+ data[Object.keys(data)[0]].house
        title.innerText += ' '+ data[Object.keys(data)[0]].title
        bestQuote.innerText += ' '+ data[Object.keys(data)[0]].bestQuote
        status.innerText += ' '+ data[Object.keys(data)[0]].status
        significantDecisions.innerText += ' '+ data[Object.keys(data)[0]].significantDecisions[0]
    } catch (error) {
        console.log(error)
    }
} 