exports.middlewareGlobal = (req, res, next) => {
    console.log('Middleware global')
    res.locals.umaVariavelLocal = 'este é o valor da variável'
    next()
}

exports.middlewareChecaErroCSRF = (err, req, res, next) => {
    console.log('Middleware para verificar erros de CSRF Token')
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.send('Erro de CSRF Token')
    }
}

exports.middlewareCSRFToken = (req, res, next) => {
    console.log('Middleware para enviar CSRF Token para as páginas')
    res.locals.csrfToken = req.csrfToken()
    next()
}