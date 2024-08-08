// O trabalho deste arquivo é apenas fazer o roteamento
const express = require('express')
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

const route = express.Router() // Responsável por tratar as rotas


// Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.reqPost)

// Rotas de contato
route.get('/contato', contatoController.paginaContato)

module.exports = route