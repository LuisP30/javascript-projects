// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// Utilizando reduce no array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador;
}, 0) // valor inicial para o meu acumulador. caso não seja passado esse valor o acumulador terá o valor do primeiro item
console.log(total)
// Retornando um array com os números pares
const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador;
}, []) // meu acumulador agora é um array
console.log(pares) // O ideal é utilizar o filter para essa operação e não o reduce
// Retornando a pessoa mais velha
const pessoas = [
    {nome: 'Luis', idade: 21},
    {nome: 'Henrique', idade: 30},
    {nome: 'Queiroz', idade: 25},
    {nome: 'Pimenta', idade: 40},
    {nome: 'Luis Henrique', idade: 72},
]
const pessoaVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; // Quando retorna valor, o valor que está no parâmetro "valor" é passado para o parâmetro acumulador
}) // acumulador 
console.log(pessoaVelha)