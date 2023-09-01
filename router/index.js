const express = require('express');
const app = express();

const logger = (req,res,next)=>{
    console.log(
        `from index ${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip} `
    )
    next()
}

const public=require('./public');
const admin = require('./admin');

app.use('/admin',admin);
app.use('/public',public);
app.use(logger);

app.get('/',(req,res)=>{
    res.send("index get")
});

app.listen(5000,()=>{
    console.log("5000 running")
})