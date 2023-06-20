const express = require('express')
const app = express()
const body = require('body-parser')
const addPro = require('./router/add-product')
const home = require('./router/home')

app.set('view engine','pug')
app.set('views','views')
app.use(body.urlencoded({extended:false}))
app.use(addPro.router)
app.use(home)
app.use((req,res)=>{
    res.render('error')
})

app.listen(6500)
