// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Indicamos que usaremos JSON
app.use(express.json())
// Puero en que vamos a ver app: localhost:300
const port = 3000
//HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Àpi Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Lucero1"}
    const explorer2 = {id: 2, name: "Lucero2"}
    const explorer3 = {id: 3, name: "Lucero3"}
    const explorer4 = {id: 4, name: "Lucero4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Lucero"}
    res.status(200).json(explorer)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listen on port ${port}`)
})