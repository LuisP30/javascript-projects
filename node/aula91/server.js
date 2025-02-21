const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()
const middlewareGlobal = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(middlewareGlobal)

app.use(routes)

const porta = 3000
app.listen(porta, () => {
    console.log(`Servidor ouvindo no endereço: http://127.0.0.1:${porta}`)
})