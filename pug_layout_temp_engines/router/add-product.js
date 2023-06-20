const express = require('express')
const router1 = express.Router()
const product=[]

router1.get('/add-product',(req,res)=>{
    res.render('add-product')
})

router1.post('/product',(req,res)=>{
    res.redirect('/')
    product.push({title:req.body.title})
})

exports.router = router1
exports.product = product
