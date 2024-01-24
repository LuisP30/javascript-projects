// Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 21,
    endereco: {
        rua: 'Rua Principal',
        numero: 45
    }
}
// Utilizando a variável com o mesmo nome das chaves do objeto
const { nome, sobrenome } = pessoa;
console.log(nome)
// Criando uma variável com nome diferente das chaves onde tem um valor padrão caso a chave esteja indefinida
const {nome: teste = 'Não existe'} = pessoa;
console.log(teste)
// Acessando innformações de um objeto dentro de outro objeto
const { endereco: {rua, numero} } = pessoa;
console.log(rua, numero)
// Criando uma variável com nome diferente das chaves
const { endereco: {rua: r = 'nao encontrado'} } = pessoa;
console.log(r)
// Utilizando o operador rest (...)
const {nome: n, ...resto} = pessoa;
// Será printado uma variável com a string Luis e a variável resto que é o restante do objeto
console.log(n, resto)
