// Connect to Postgres using the node-postgres package

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432,

})
// create all the functions that will be our requests handlers in our express server

// create a new link in the db
const createLinks = (request, response) => {
    // take the data the user passes us and insert it into our table
    const name = request.body.name
    const URL = request.body.URL
    pool.query('INSERT INTO links (name, URL) VALUES ($1, $2'), (name, URL)
}

// read all the data from db 
const getLinks = (request, response) => {
    // get back all the data currently in the database
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) =>{
        if(error){
            throw error
        }
        result.status(200).json(result.rows)
    })
}


    // update link in the db

    // delete link in the db

    module.exports = {
        getLinks,
        createLinks,

    }

    




