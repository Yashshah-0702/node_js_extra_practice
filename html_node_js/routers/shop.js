const express = require('express')
const router1 = express.Router()
const path = require('path')

router1.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})

module.exports=router1