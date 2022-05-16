"use strict"

import express from 'express'
import fs from 'fs'

const app =  express()
const port = 3000

app.use(express.json())
app.use('/css', express.static('./css'))
app.use('/js', express.static('./js'))

app.get('/', (req, res) => {
    fs.readFile('./html/helloWorld.html', 'utf-8', 
    (err, html) => {
        if (err) {
            res.status(500).send('There was an error '+ err)
        }

        res.send(html)
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})