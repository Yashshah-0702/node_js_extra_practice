const express = require('express')
const router = express.Router()
const add_pro = require('./add-product')

router.get('/',(req,res)=>{
    const pro=add_pro.product
    res.render('home',{prod:pro})
    console.log('product',pro) 
})

module.exports=router