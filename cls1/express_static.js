const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public/`,{
    index: "hinata.jpg"
}))

app.get('/',(req,res)=>{
    res.send("get req from home page")
})

app.post('/',(req,res)=>{
    res.send("post req from home page")
})

app.listen(3000,()=>{
    console.log("server running at port 3000")
})