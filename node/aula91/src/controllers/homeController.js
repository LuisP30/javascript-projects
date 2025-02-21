exports.paginaHomeGet = (request, response, next) => {
    response.render('index')
    console.log('Middleware para resposta')
    next()
}

exports.paginaHomePost = (request, response, next) => {
    response.send(request.body)
    next()
}