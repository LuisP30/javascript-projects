const contato = require('../models/ContatoModel')

exports.index = async (req, res, next) => {
    const listaContatos = await contato.searchContatos()
    console.log(listaContatos)
    res.render('index', { listaContatos })
    // console.log('Middleware que trata a requisição')
    next()
}