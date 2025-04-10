const mongoose = require('mongoose')
const validator = require('validator')

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login{
    constructor(body){
        this.body = body
        this.errors = []
        this.user = null
    }
    async cadastro(){
        this.valida()
        if(this.errors.length > 0) return
        try {
            this.user = await LoginModel.create(this.body)
        } catch (error) {
            console.log(error)
        }
        
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }
        this.body = {
            email: this.body.emailCadastro,
            password: this.body.passwordCadastro
        }
    }
    valida(){
        // Validação
        this.cleanUp()
        // Validando e-mail
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')
        // Validando senha
        if(this.body.password.length < 3 || this.body.password.length > 50) this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
    }
}


module.exports = Login