const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.send("you are in home page and get request")
})
app.listen(5000,()=>{
    console.log("server is runing at poet 5000")
})