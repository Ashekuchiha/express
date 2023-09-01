const express = require('express');
const admin = express.Router();

admin.get('/',(req,res)=>{
    res.send("admin home")
})

admin.get('/phone',(req,res)=>{
    res.send("admin phone");
})

module.exports = admin;