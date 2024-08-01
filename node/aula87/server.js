const express = require('express')

// Inicializando o aplicativo Express
const app = express()

// Para o express tratar o body das requisições
app.use(
    express.urlencoded(
        {extended: true}
    )
)

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="post">
            Nome: <input type="text" name="nome" /> 
            <input type="submit" /> 
        </form>`)
})

// Acessando os dados recebidos de uma requisição post
app.post('/', (request, response) => {
    console.log(request.body)
    response.send(`Seu nome é ${request.body['nome']}`)
})

// Recebendo parâmetros na URL.
// (Quando coloco o interrogação ao lado do parâmetro significa que ele é opcional)
app.get('/testes/:id?', (req, res) => {
    res.send(req.params)
    console.log(req.query) // /testes/?nome=Luis&sobrenome=Henrique  (Acessando Query String)
})


const port = 3000
app.listen(port, () => {
    console.log(`Servidor ouvindo no endereço: http://127.0.0.1:${port}`) 
})
