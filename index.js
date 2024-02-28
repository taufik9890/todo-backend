require('dotenv').config()
const express = require('express')
const app = express()
const route = require('./routes/index')
const connectDB = require('./db/connectDB')
const cors = require('cors')
// 3sw20aYo'?Nq

connectDB()
app.use(cors())
app.use(express.json())


app.use('/', route)

let port = process.env.PORT 

app.listen(port, ()=>{
    console.log('port running');
})