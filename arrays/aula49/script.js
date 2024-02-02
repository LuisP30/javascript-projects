// Revisão de Arrays
// Arrays são valores por referência
//              0          1        2
const nomes = ['Eduardo', 'Maria', 'Joana']
delete nomes[2]
console.log(nomes)
// Outra maneira de criar array
const nomes2 = new Array('Eduardo', 'Maria', 'Joana')
console.log(nomes2)
// Atribuindo valor por referência
const nomes3 = nomes
// Qualquer alteração que seja feita em nomes3, será refletida em nomes e virce-versa
nomes3.pop()
console.log(nomes3)
// Note que o array nomes também foi alterado
console.log(nomes)
// Espalhando elementos de um array dentro de outro
const novo = [...nomes]
/* No caso acima foi feito uma cópia de nomes para dentro do array novo.
Isso significa que eles não tem a mesma referência de valor e a alteração
de um dos arrays não irá afetar o outro */
// Pegando o tamanho do array
console.log(nomes.length)
// shift() remove o primeiro elemento do array
// push() adiciona algo no final do array
// unshift() adiciona um elemento no inicio do array
const lista = nomes2.slice(1, 3) // Passa o índice que quero começar e onde quero terminar (o índice final não é incluído)
// Convertendo uma string em um array
const meuNome = 'Luis Henrique'
// Método abaixo é para string
const listaNomes = meuNome.split(' ')
console.log(listaNomes)
// Fazendo um array se tornar uma string
console.log(listaNomes.join(' ')) // Passa o elemento que eu quero que seja o separador