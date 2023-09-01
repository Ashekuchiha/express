const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send("get req from home page")
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send("post req from home page")
})

app.listen(3000,()=>{
    console.log("server running at port 3000")
})