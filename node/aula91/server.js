require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()

// Fazendo conexão com o banco de dados
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
.then(
    () => {
        app.emit('dbconnected')
    } // Servidor emitindo sinal
).catch(e => console.log(e))

const middlewareGlobal = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(middlewareGlobal)

app.use(routes)

const porta = 3000
// Caso ocorra o evento de banco de dados conectado, o servidor é iniciado na porta especificada
app.on('dbconnected', () => {
    app.listen(porta, () => {
        console.log(`Servidor ouvindo no endereço: http://127.0.0.1:${porta}`)
    })
})