const express = require('express')
const app = express()
const body = require('body-parser')
const handlebar = require('express-handlebars')

app.engine('hbs',handlebar)
app.set('view engine','hbs')   
app.use(body.urlencoded({extended:false}))

app.listen(9000)