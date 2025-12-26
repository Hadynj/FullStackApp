const express = require('express')
const app = express ()
const path = require('path')
const db = require('./queries')
const PORT = 5500

// middleware

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

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

// UPDATE - updater data in db


// DELETE - remove data from db



// Starting Express on our PORAT
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}.`)
})