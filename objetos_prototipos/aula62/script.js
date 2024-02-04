// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
// Manipulando prototypes
// Sempre que chamo um objeto literal o JavaScript utiliza o new Object
const objA = {
    chaveA: 'A'
    // prototype vem aqui implicitamente em uma variável chamada __proto__
    // __proto__: Object.prototype
}
// Toda função construtora tem um prototype -> Object.prototype

const objB = {
    chaveB: 'B'
}
// Alterando o proto do objeto B
Object.setPrototypeOf(objB, objA)
// Acima os parâmetros são: Quero alterar o Prototype de objB e o objA agora será o seu prototype.
// Agora o objeto B tem as chaves e métodos de objeto A
console.log(objB.chaveA)
// Trabalhando com funções construtoras
function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}
// Os métodos serão criados dentro do prototype da função
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * percentual / 100)
}
Produto.prototype.aumentaPreco = function(percentual){
    this.preco = this.preco + (this.preco * percentual / 100)
}
const p1 = new Produto('Celular', 1400)
// Aumentando o preço em 100%
p1.aumentaPreco(100)
// Dando um desconto de 100%
p1.desconto(100)
console.log(p1)
// Manipulando o prototype de um objeto literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
// prototype de p2 agora será o mesmo da função construtora Produto()
Object.setPrototypeOf(p2, Produto.prototype)
// Aumentando o preço em 100%
p2.aumentaPreco(100)
// Dando um desconto de 100%
p2.desconto(100)
console.log(p2)
// Utilizando Object.create() para criar objetos.
// Este objeto terá o proto de Produto() e o construtor Produto será considerado o seu construtor
// Criando o objeto e setando o prototype dele. (Quem será o pai dele)
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})
// Aumentando o preço em 100%
p3.aumentaPreco(100)
console.log(p3)