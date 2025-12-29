const express = require('express')
const path = require('path')
const db = require('./queries')

//const app = express ()
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

const PORT = 5500

// Routes
app.get('/links', (req, res) =>{
    // we'll do some stuff here
    //res.send("Hellooooo from the server!")
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})


app.get('/test', (req, res) => {
    // do something with the res

})

// CRUD
// CREATE - add data to db


// READ - get data from db
app.get('/links', db.getLinks)
app.post('/links', db.createLinks)

// UPDATE - updater data in db


// DELETE - remove data from db



// Starting Express on our PORAT
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}.`)
})