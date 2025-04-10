const Login = require('../models/LoginModel')

exports.login = (req, res, next) => {
    res.render('login')
}

exports.cadastro = async (req, res, next) => {
    try {
        const login = new Login(req.body)
        await login.cadastro()
        if(login.errors.length > 0){
            req.flash('errors', login.errors)
            req.session.save(() => {
                return res.redirect('login')
            })
            return
        }
        req.flash('success', 'Usuário criado com sucesso')
        req.session.save(() => {
            return res.redirect('login')
        })
        return
    } catch (error) {
        console.log(error)
        return res.render('404')
    }
}