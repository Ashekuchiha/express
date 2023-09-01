const express = require('express');
const app = express();
app.route('/')
.get((req,res)=>{
    res.send('i am get function')
})
.post((req,res)=>{
    res.send('i am post function')
})
app.route('/backend')
.get((req,res)=>{
    res.send('i am get function back')
})
.post((req,res)=>{
    res.send('i am post function back')
})

app.listen(1000,()=>{
    console.log("1000 runing")
})