const inputButton = document.querySelector('#inputButton').addEventListener('click', fetchData)
 
async function fetchData() {
    const inputValue = document.querySelector('#characterName').value

    try {
        const response = await fetch(`/api/characters/${inputValue}`)
        const data = await response.json()
    
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
} 