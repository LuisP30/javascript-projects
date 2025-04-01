// Geralmente models não são utilizados assim, foi feito o uso dessa maneira para fins didáticos.
const HomeModel = require('../models/HomeModel') 

HomeModel.create({
    titulo: 'Meu título obrigatório',
    descricao: 'Minha descrição'
}).then(dados => console.log(dados))
.catch(e => console.log(e))

exports.paginaHomeGet = (request, response, next) => {
    response.render('index')
    console.log('Middleware para resposta')
    next()
}

exports.paginaHomePost = (request, response, next) => {
    response.send(request.body)
    next()
}