const express = require('express');
const public = express.Router();

const logger = (req,res,next)=>{
    console.log(
        `from public ${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip} `
    )
    next()
}

public.all('*',logger)

public.get('/',(req,res)=>{
    res.send("public home")
})

public.get('/phone',(req,res)=>{
    res.send("public phone");
})

public.get("/log",(req,res)=>{
    res.send("log")
    logger
})

public.post('/info',(req,res)=>{
    res.send("public info post")
})

module.exports = public;