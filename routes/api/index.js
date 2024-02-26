const express = require('express')
const route = express.Router()
const auth = require('./auth')

route.use('/user', auth)


module.exports = route