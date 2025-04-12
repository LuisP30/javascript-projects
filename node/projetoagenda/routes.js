const express = require('express')
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const route = express.Router()

function meuMiddleware(req, res, next){
    console.log('Middleware que recebe a requisição primeiro')
    next() // next é utilizado para chamar o próximo middleware
}

// Rotas da página inicial

route.get('/', meuMiddleware, homeController.index, /* Aqui é outro middleware -> */ (req, res) => {
    console.log('Middleware para depois da requisição tratada')
})

// Rotas de login
route.get('/login', loginController.login)
route.post('/login', loginController.loginPost)
route.post('/cadastro', loginController.cadastro)
route.get('/logout', loginController.logout)

module.exports = route

// Criei três middlewares de forma diferente acima para fins didáticos.