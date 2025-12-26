// Connect to Postgres using the node-postgres package

const POOL = require('pg').Pool
const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432,

})