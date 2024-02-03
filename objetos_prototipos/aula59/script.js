// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/set
// Getters e Setters
/* São métodos para proteger propriedades de um objeto */
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        // O trabalho do Getter é apenas mostrar o valor
        get: () => estoquePrivado,
        // Setter altera o valor
        set: function(valor){
            // Caso o valor passado para estoque não seja um number
            if(typeof valor !== 'number'){
                console.log('Você precisa fornecer um número')
                return;
            }
            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('Camiseta', 22, 3);
p1.estoque = 'Olá'
console.log(p1.estoque);
// Função que cria produtos
function criaProduto(nome){
    // Utilizando métodos Get e Set em uma Facotry Function
    // Factory Function sempre retorna um objeto
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            // Quero substituir uma palavra por uma string vazia
            valor = valor.replace('coisa', '')
            nome = valor;
        }
    }
}
const produto = criaProduto('Produto')
console.log(produto.nome)
