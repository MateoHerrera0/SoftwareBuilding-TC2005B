"use strict"

import express from 'express'
import fs from 'fs'
import mysql from 'mysql2/promise'

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

app.get('/api/hello', (req, res) => {
    console.log(req.query)
    if (req.query.hasOwnProperty('name')) {
        res.send(`${req.query.name}`)
    } else {
        res.send('hello')
    }
})

app.get('/api/users', async (req, res) => {
    
    let connection = null;

    try
    {
        connection = await mysql.createConnection(
        {
            host:'172.29.192.1', 
            user:'web1', 
            password:'memelTacoDeSalchicha12', 
            database: 'api_game_db'
        })
        
        console.log("Connection stablished!")

        const [rows, fields] = await connection.execute('select * from users');
        
        console.log(Object.keys(rows[0]))

        for (const r of rows)
        {
            console.log(Object.values(r))
        }

        // console.log(rows)
        res.json(rows)
    }
    catch(error)
    {
        console.log(error)
    }
    finally
    {
        if(connection!==null) 
        {
            connection.end()
            console.log("Connection closed succesfully!")
        }
    }
    })
//
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})