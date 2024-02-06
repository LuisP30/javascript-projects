// Criando classes
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // Os métodos que crio em classes já são automaticamente linkados no prototype
    // da classe que gerou o objeto
    falar(){
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}
// Classes são muito parecidas com funções construtoras
const p1 = new Pessoa('Luis Henrique', 'Henrique')
console.log(p1)
p1.falar()