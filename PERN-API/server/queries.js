// Connect to Postgres using the node-postgres package

const POOL = require('pg').Pool
const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432,

})
// create all the functions that will be our requests handlers in our express server

// create a new link in the db

// read all the data from db 
const getLinks = () => {
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) =>{
        if(error){
            throw error;
        }
        result.status(200).json(result.rows)
    })
}

    // update link in the db

    // delete link in the db

    module.exports = {

    }

    




