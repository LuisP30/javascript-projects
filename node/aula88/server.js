const express = require('express')
const routes = require('./routes')

// Inicializando o aplicativo Express
const app = express()

// Para o express tratar o body das requisições
app.use(express.urlencoded({extended: true}))

// Utilizando as rotas que separei em outro arquivo
app.use(routes)



const port = 3000
app.listen(port, () => {
    console.log(`Servidor ouvindo no endereço: http://127.0.0.1:${port}`) 
})
