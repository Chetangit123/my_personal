const { Client } = require('pg');
const client = require('pg').Client;

const pool = new client({
    user:"postgres",
    host:"localhost",
    database:"testdb",
    password:"Chetan@123",
    port:5432,
});

pool.connect((err,res)=>{
    if(err) console.log(err);
    else console.log("db connected");
})


module.exports = pool