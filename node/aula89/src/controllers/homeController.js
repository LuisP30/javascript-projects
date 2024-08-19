// Nesse arquivo crio as respostas para se a requisição for GET ou POST
exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.reqPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post')
}