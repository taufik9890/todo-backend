const express = require('express')
const registrationControllers = require('../../controllers/registrationControllers')
const secureApi = require('../../middleware/secureApi')
const route = express.Router()

route.get('/auth',secureApi, registrationControllers)


module.exports = route