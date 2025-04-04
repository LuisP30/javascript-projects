const express = require('express')
const homeController = require('./src/controllers/homeController')
const route = express.Router()

function meuMiddleware(req, res, next){
    console.log('Middleware para antes da resposta')
    next() // next é utilizado para chamar o próximo middleware
}

route.get('/', meuMiddleware, homeController.paginaHomeGet, (req, res) => {
    console.log('Middleware para depois da resposta')
    console.log(req.session)
})

route.post('/', homeController.paginaHomePost)

module.exports = route

// Criei dois middlewares de forma diferente acima para fins didáticos.