// Filtrando os valores de um array
// filter, map e reduce
// Filter e map sempre retornam um array com a mesma quantidade de elementos do array original ou menos
// Retornando os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Função filter
function callbackFilter(valor, indice, array){
    console.log(valor, indice)
    return valor > 10
    // Essa função deve retornar true ou false
    // Também poderia passar uma função anônima para o filter
    // função em arrow function: valor => valor > 10
}
const numerosFiltrados = numeros.filter(callbackFilter) // recebe como argumento uma função de callback
// Não é necessário executar a função pois o método filter já faz isso
console.log(numerosFiltrados)

const pessoas = [
    {nome: 'Luis', idade: 21},
    {nome: 'Henrique', idade: 30},
    {nome: 'Queiroz', idade: 25},
    {nome: 'Pimenta', idade: 40},
    {nome: 'Luis Henrique', idade: 72},
]
// Filtrando as pessoas que tem o nome com mais de 5 letras
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length>=5)
console.log(pessoasComNomeGrande)
// Filtrando as pessoas que tem mais de 50 anos
const pessoasComMais50Anos = pessoas.filter(obj => obj.idade>=50)
console.log(pessoasComMais50Anos)
// Filtrando as pessoas cujo o nome termina com A
const pessoasComNomeTerminadoA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasComNomeTerminadoA)
