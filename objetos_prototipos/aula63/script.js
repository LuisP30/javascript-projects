// Herança

// Produtos: Camiseta, caneca
// Quero ter a possibilidade de aumento e desconto de preço
// Criando molde de Produto com uma função construtora
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
// Métodos para os objetos serão criados no prototype de Produto
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}
// Cada função tem a sua propriedade prototype
function Camiseta(nome, preco, cor){
    // Com o método a baixo eu conectei minha função camiseta com a função produto
    Produto.call(this, nome, preco)
    // Camiseta tem o atributo cor mesmo que o molde de Produto não tenha
    this.cor = cor
}
// Sobreescrevendo o método dos objetos camiseta oriundos do molde de Produto
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco*(percentual / 100))
}
// Prototype de camiseta agora será o mesmo que produto
Camiseta.prototype = Object.create(Produto.prototype)
// Alterando o construtor
Camiseta.prototype.constructor = Camiseta;
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
// Função construtora para canecas
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    // Criando o atributo estoque com métodos especiais
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Esse valor não é um número')
            }
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
const caneca = new Caneca('caneca', 5, 'porcelana', 3)
// Utilizando o método set
caneca.estoque = 9
console.log(caneca)