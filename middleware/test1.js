const express = require('express');

const logger = (req,res,next)=>{
    console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip} `
    )
    next()
}

const app = express();
const admin = express.Router();

app.use("/admin",admin);
app.use(logger)
admin.use(logger)

app.get("/",(req,res)=>{
    res.send("get ")
})

admin.get("/admin",(req,res)=>{
    res.send("admin get ")
})

app.listen(3000,()=>{
    console.log("running 3000");
})