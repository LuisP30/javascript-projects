const nome = 'Luis'
const sobrenome = 'Henrique'

const falaNome = () => `${nome} ${sobrenome}`

module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome


// Dessa forma irá funcionar da mesma maneira que de cima.
exports.nome = nome
this.qualquerCoisa = 'Qualquer coisa que eu queira exportar'

console.log(module.exports)

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}
exports.Pessoa = Pessoa