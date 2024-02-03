// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// defineProperty e defineProperties
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave estoque. Caso eu não queira mostrar essa chave é só colocar false
        value: estoque, // valor da chave
        writable: false, // pode ou não alterar o valor
        configurable: true // pode reconfigurar a chave ou não
        // com configurable true eu posso criar outro defineProperty e reconfigurar a chave estoque
        // configurable como false não permite apagar a chave
    })
    /* Com o método abaixo eu posso trabalhar com mais de uma propriedade diferente do método
    utilizado acima */
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    })
}
const p1 = new Produto('Camiseta', 22, 4)
console.log(p1)
// Vendo as chaves desse objeto em um array
console.log(Object.keys(p1))