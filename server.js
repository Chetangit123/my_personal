const express = require("express");
const app = express();
const client = require("./db")

app.get('/',(req,res)=>[
    res.send("Wirking...")
])

app.get('/fetch',async(req,res)=>{
    const entries = await client.query("SELECT * FROM customers WHERE name = 'chetan'");
    console.log(entries);
})

app.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("Server is running at port 3000");
})
