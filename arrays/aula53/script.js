// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Mapeando o array com map
// Map retorna um array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobroNumeros = numeros.map(valor => valor*2 ); // recebe uma função de callback 
// (diferente do filter essa função não necessita retornar true ou false)
console.log(dobroNumeros)
// Utilizando map com objetos
const pessoas = [
    {nome: 'Luis', idade: 21},
    {nome: 'Henrique', idade: 30},
    {nome: 'Queiroz', idade: 25},
    {nome: 'Pimenta', idade: 40},
    {nome: 'Luis Henrique', idade: 72},
]
// Retornando apenas uma string com o nome da pessoa
const nomePessoa = pessoas.map(obj => obj.nome)
console.log(nomePessoa)
// Remova apenas a chave "nome" do objeto
const idadePessoa = pessoas.map(obj => obj = {idade: obj.idade})
console.log(idadePessoa)
// Adicione uma chave id em cada objeto
const idPessoa = pessoas.map(function(obj, indice){
    obj.id = indice+1
    return obj;
})
console.log(idPessoa)