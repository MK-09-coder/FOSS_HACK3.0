const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password:"Dinesh18",
    host:"localhost",
    port:5432,
    database: "d_think_tank"
})

module.exports = pool;