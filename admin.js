const express=require('express')
const app = express.Router()
const fs = require('fs')

app.get('/add-product',(req,res)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
})

app.post('/product',(req,res)=>{
    res.redirect('/')
    console.log(req.body)
})

module.exports=app