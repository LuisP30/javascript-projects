// Revisão de objetos
// Um objeto é formado por um par de chave e valor
const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique'
}
console.log(pessoa.nome)
// Também posso consultar o nome dessa forma:
console.log(pessoa['nome'])
// Acessando o sobrenome
console.log(pessoa.sobrenome)
// Acessando chave dinamicamente
const chave = 'nome'
console.log(pessoa[chave])
// Utilizando o construtor
const pessoa1 = new Object();
pessoa1.nome = 'Pimenta'
pessoa1.sobrenome = 'Queiroz'
console.log(pessoa, pessoa1)
// Deletando a chave nome de pessoa1
delete pessoa1.nome
console.log(pessoa1)
// Criando um método para pessoa
pessoa.falarNome = function(){
    console.log(`Olá, o meu nome é ${this.nome}`) // Quando utilizo a palavra this estou me referindo ao objeto
};
pessoa.falarNome()
// Iterando um objeto
for(let chave in pessoa){
    console.log(pessoa[chave])
}
// Factory function
function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('Luis', 'Henrique', 21)
console.log(p1.nomeCompleto)
// Constructor function
// Essa função irá retornar um objeto mesmo sem um return
function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome,
    // Travando a alteração do objeto de um construtor
    Object.freeze(this)
}
// A palavra new cria um objeto vazio e a palavra this se refere ao objeto criado.
// A palavra new quem é responsável por retornar o objeto criado
const p2 = new Pessoa('Luis', 'Henrique')
