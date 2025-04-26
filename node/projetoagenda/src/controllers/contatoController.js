const { userSetter } = require('core-js/es/symbol')
const Contato = require('../models/ContatoModel')

exports.contato = (req, res, next) => {
    res.render('contato', {contato: {}}) // Mandando um contato fake
}
exports.create = async (req, res, next) => {
    try{
        const contato = new Contato(req.body)
        await contato.create()
        if(contato.errors.length > 0){
            req.flash('errors', contato.errors)
            return req.session.save(() => {
                res.redirect('/contato')
            })
        }
        console.log(contato)
        req.flash('success', 'Contato cadastrado!')
        req.session.save(() => {
            res.redirect(`/contato/${contato.contato._id}`)
        })
    }catch(e){
        console.log(e)
    }
}

exports.profile = async (req, res, next) => {
    if(!req.params.id) return res.render('404')

    const user = await Contato.searchById(req.params.id)
    if(!user) return res.render('404')

    res.render('contato', {
        contato: user
    })
}