// Importando o módulo express (para usar o nodemon: npx nodemon server.js)
const express = require('express')

// Inicializando o aplicativo Express
const app = express()

// Definindo uma rota para a página inicial do site
app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="post">
            Nome: <input type="text" /> 
            <input type="submit" /> 
        </form>`)
        // Envia a resposta "Hello" para o cliente quando acessa a rota raiz ('/')
})

app.post('/', (request, response) => {
    response.send(`Recebi seu formulário`)
})

// Definindo uma rota para a página de contato
app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato') // Envia a resposta "Obrigado por entrar em contato" para o cliente quando acessa a rota '/contato'
})

// Configurando o servidor para ouvir na porta 3000
const port = 3000
app.listen(port, () => {
    console.log(`Servidor ouvindo no endereço: http://127.0.0.1:${port}`) // Imprime uma mensagem informando que o servidor está ouvindo e em qual endereço
})
