function mouseMovement(event) {
    const mouse_position = document.getElementById("mousePosition")
    mouse_position.textContent = `Posición del mouse: ${event.clientX} - ${event.clientY}`
}

function getFormvalue(event) {
    const form = document.getElementById("form1")
    const fname = form.elements[0].value
    const lname = form.elements[1].value
    document.getElementById("fullName").textContent = `${fname} ${lname}`
    event.preventDefault();
}

function addRow(event) {
    const table = document.getElementById("sampleTable")
    const numberRow = table.getElementsByTagName("tr").length+1
    const numberColumns = document.getElementById("oneRow").getElementsByTagName("td").length
    const newRow = document.createElement("tr")
    for (let i = 1; i <= numberColumns; i++) {
        let column = document.createElement("td")
        column.appendChild(document.createTextNode(`Row ${numberRow} column ${i}`))
        newRow.appendChild(column)      
    }
    table.appendChild(newRow)
}

function addColumn(event) {
    const table = document.getElementById("sampleTable")
    const numberColumns = document.getElementById("oneRow").getElementsByTagName("td").length+1
    const rows = table.getElementsByTagName("tr")
    let counter = 1
    for (let row of rows) {
        let column = document.createElement("td")
        column.appendChild(document.createTextNode(`Row ${counter} column ${numberColumns}`))
        row.appendChild(column)
        counter++; 
    }
}

function changeContent(event) {
    const table = document.getElementById("myTable")
    const form = document.getElementById("form2")
    const rpos = form.elements[0].value
    const cpos = form.elements[1].value
    const text = form.elements[2].value
    const cell = table.getElementsByTagName("tr")[rpos-1].getElementsByTagName("td")[cpos-1]
    cell.textContent = text

}

function addColor(event) {
    const options = document.getElementById("colorSelect")
    const colorWheel = ["Yellow", "Orange", "Purple", "Blue", "Deep Red", "Pink", "Beige", "Green"]
    const color = colorWheel[Math.floor(Math.random() * colorWheel.length)]
    const newOption = document.createElement("option")
    newOption.appendChild(document.createTextNode(color))
    options.appendChild(newOption)
}

function removeColor(event) {
    const options = document.getElementById("colorSelect")
    const colors = options.getElementsByTagName("option")
    const randomNumber = Math.floor(Math.random() * options.getElementsByTagName("option").length)
    options.removeChild(colors[randomNumber])

}

function changeImage(event) {
    const image = document.getElementById("image")
    const randomHeight = Math.random() * (300) + 300
    const randomWidth = Math.random() * (300) + 300
    const randomNumber = Math.floor(Math.random()*3+1)
    image.setAttribute("src", `../images/cat${randomNumber}.jpg`)
    image.setAttribute("height", `${randomHeight}px`)
    image.setAttribute("width", `${randomWidth}px`)
}

document.addEventListener("mousemove", mouseMovement)

document.getElementById("form1").addEventListener("submit", getFormvalue)

document.getElementById("row").addEventListener("click", addRow)

document.getElementById("column").addEventListener("click", addColumn)

document.getElementById("changeCell").addEventListener("click", changeContent)

document.getElementById("addOption").addEventListener("click", addColor)

document.getElementById("removeOption").addEventListener("click", removeColor)

document.getElementById("image").addEventListener("mouseover", changeImage)