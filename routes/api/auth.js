const express = require('express')
const registrationControllers = require('../../controllers/registrationControllers')
const route = express.Router()

route.get('/auth', registrationControllers)


module.exports = route