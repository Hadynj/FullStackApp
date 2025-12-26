const express = require('express')
const app = express ()
const PORT = 5500

// Routes
app.get('/', (req, res) =>{
    // we'll do some stuff here
    res.send("Hellooooo from the server!")
})

// CRUD
// CREATE
// READ
// UPDATE
// DELETE




// Starting Express on our PORAT
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}.`)
})