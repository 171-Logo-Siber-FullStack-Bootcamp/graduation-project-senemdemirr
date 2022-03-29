const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'projedb',
    password: 'senemdemir',
    port: 5432
})

module.exports = pool;


