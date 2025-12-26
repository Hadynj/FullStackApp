const express = require('express')
const app = express ()
const PORT = 5500

// Routes
app.get('/', (req, res) =>{
    // we'll do some stuff here
    res.send("Hellooooo from the server!")
})

app.get('/test', (req, res) => {
    // do something with the res

})

// CRUD
// CREATE - add data to db
// READ - get data from db
// UPDATE - updater data in db
// DELETE - remove data from db




// Starting Express on our PORAT
app.listen(PORT, () => {
    console.log(`The app is running on port ${PORT}.`)
})