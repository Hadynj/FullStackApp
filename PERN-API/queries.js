// Connect to Postgres using the node-postgres package

const POOL = require('pg').Pool
const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432,

})

const getLinks = () => {
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) =>{
        if(error){
            throw error
        }
        result.status(200).json(result.rows)
    })

    }

// update link in the db

// delete link in the db


