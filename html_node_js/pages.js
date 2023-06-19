const express = require('express')
const app = express()
const path = require('path')
const add = require('./routers/add-product')
const shop = require('./routers/shop')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

app.use(add)

app.use(shop)

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(8700)
