const express = require("express");
const app = express();
const logWarper=(options)=>{
    return function(req,res,next){
        if(options.log){
            console.log(
                `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip} `
            )
            next()
        }else{
            throw new Error("this is a error")
        }
    }
}
const errorHandeler = (err,req,res,next)=>{
    console.log(err.message)
    res.status(200).send("server error");
}

app.use(logWarper({log:false}));
app.use(errorHandeler);

app.get("/",(req,res)=>{
    res.send("get ");
});

app.listen(2000,()=>{
    console.log("running 2000");
})