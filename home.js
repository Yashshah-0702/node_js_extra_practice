const express = require('express')
const app1 = express.Router()

app1.get('/',(req,res)=>{
    res.send("Welcome To The Home Page")
})
module.exports=app1