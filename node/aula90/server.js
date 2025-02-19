// Aprendendo views
const express = require('express')
const routes = require('./routes')
const path = require('path')

// Inicializando o aplicativo Express
const app = express()

// Para o express tratar o body das requisições
app.use(express.urlencoded({extended: true}))

// Arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')))

// Informando onde estão as views da minha aplicação
app.set('views', path.resolve(__dirname, 'src', 'views'))
// Informando a engine utilizada para as views
app.set('view engine', 'ejs')

// Utilizando as rotas que separei em outro arquivo
app.use(routes)


const port = 3000
app.listen(port, () => {
    console.log(`Servidor ouvindo no endereço: http://127.0.0.1:${port}`) 
})
