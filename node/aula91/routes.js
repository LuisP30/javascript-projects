const express = require('express')

const homeController = require('./src/controllers/homeController')

const route = express.Router()

route.get('/', homeController.paginaHomeGet)

module.exports = route