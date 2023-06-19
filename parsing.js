const express = require('express')
const app2 = express()
const body = require('body-parser')
const admin = require('./admin')
const home = require('./home')

app2.use(body.urlencoded({extended:false}))
app2.use(admin)

app2.use(home)

app2.use((req,res,next)=>{
    res.status(404).send("Page Not Found.")
})

app2.listen(4500)