// Métodos para objetos
/* 
- Object.values
- Object.entries
- Oject.assign(des, any)
- Object.getOwnPropertyDescriptor(o, 'prop')
- ... (spread)

Métodos já estudados:
- Object.keys (retorna as chaves do objeto em um array)
- Object.freeze (congela o objeto)
- Object.defineProperties (define várias propriedades)
- Object.defineProperty (define uma propriedade)
 */
const produto = {nome: 'Caneca', preco: 1.8}
const outraCoisa = produto;
// Agora a variável outraCoisa aponta para o mesmo endereço na memória que produto
/* Fazendo com que o objeto produto seja copiado para uma variável que não aponta para
o mesmo endereço na memória que a constante produto (apenas copiando o objeto para outra variável) */ 
const objetoCopiado = {...produto}
objetoCopiado.nome = 'Garrafa'
// Agora após alterar o nome de um dos objetos, o objeto produto não foi afetado
console.log(objetoCopiado)
console.log(produto)
// Copiando tudo que há dentro de produto para o primeiro objeto passado como parâmetro:
const caneta = Object.assign({}, produto, {material: 'plástico'}) // Esse objeto literal também irá para o objeto vazio
console.log(caneta)
// Pegando o valor das propriedades da chave nome do objeto produto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// Object.values() retorna um array com os valores das chaves do objeto
console.log(Object.values(caneta))
// Object.entries() retorna um array com um array para cada par de chave e valor do objeto
console.log(Object.entries(caneta))