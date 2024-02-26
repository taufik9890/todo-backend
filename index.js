require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes/index')
 
// 3sw20aYo'?Nq

app.use('/', route)

let port = process.env.PORT 

app.listen(port)