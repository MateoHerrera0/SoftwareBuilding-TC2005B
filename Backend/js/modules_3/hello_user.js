const hello = await fetch('http://localhost:3000/api/users', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method:'GET'
})

const message = await hello.json()

function loadTable(event){
    let table = document.getElementById("table")
    for (let i = 0; i < message.length; i++) {
        const element = message[i];
        let elements = Object.values(element)
        const row = document.createElement('tr')
        for (let j = 0; j < elements.length; j++) {
            const values = elements[j];
            const column = document.createElement('td')
            column.appendChild(document.createTextNode(values))
            row.appendChild(column)
        }
        table.appendChild(row)
    }
    event.preventDefault()
}

document.getElementById("button").addEventListener("click", loadTable)