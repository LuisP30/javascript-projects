exports.index = (req, res, next) => {
    // criando flash messages:
    // req.flash('info', 'Criando mensagem do tipo info')
    res.render('index')
    console.log('Middleware que trata a requisição')
    next()
}