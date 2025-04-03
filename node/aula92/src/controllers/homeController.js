exports.paginaHomeGet = (req, res, next) => {
    // criando flash messages:
    // req.flash('info', 'Criando mensagem do tipo info')
    res.render('index')
    console.log('Middleware para resposta')
    next()
}

exports.paginaHomePost = (req, res, next) => {
    res.send(req.body)
    next()
}