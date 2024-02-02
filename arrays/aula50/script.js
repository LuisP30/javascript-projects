// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// Método splice
const nomes = ['Luis', 'Henrique', 'Queiroz', 'Pimenta']
// nomes.splice(indice, delete, elem1, elem2, elem3) passo o índice em que quero começar.
// O segundo argumento é quantos elementos quero remover do meu array
// O terceiro agumento é os elementos que quero adicionar todos separados por vírgula

// simulando o método pop() utilizando o slice()
nomes.splice(-1, 1) // (eu quero remover do último índice 1 elemento) 
// O método acima retorna 2 arrays. O array de nomes e um array com os elementos removidos
console.log(nomes) // Resultado: ['Luis', 'Henrique', 'Queiroz']
nomes.splice(1, 2) // Do elemento 1, quero remover 2 elementos
// A instrução acima irá remover 2 elementos a partir do índice 1
// Resultado: ['Luis']
console.log(nomes)
// Adicionando elementos
nomes.splice(nomes.length, 0, 'Henrique') //  A partir do índice 1, índice que quero eliminar e o valor que quero adicionar (no índice 1)
console.log(nomes) // O primeiro índice é onde irei adicionar o valor, o índice do meio é quantos elementos quero remover