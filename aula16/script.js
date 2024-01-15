// Arrays
const alunos = ['Luis', 'Maria', 'João']
// Substituindo valor do índice
alunos[1] = 'Eduardo'
console.log(alunos)
// Mesmo que o índice 3 não exista, ele será criado com o valor que passei
alunos[3] = 'Luiza'
console.log(alunos)
// Também posso pegar o tamanho do array utilizando length
// alunos[alunos.length] = 'Fabio'
// console.log(alunos)
// Função que insere valor ao final do array
alunos.push('Henrique')
console.log(alunos)
// Adicionando valor no início
alunos.unshift('Pimenta')
console.log(alunos)
// Removendo o elemento do final do array (também poderei acessar o elemento removido caso eu crie uma variavel com valor dessa função)
alunos.pop()
console.log(alunos)
// Removendo o elemento inicial do array (também poderei acessar o elemento removido caso eu crie uma variavel com valor dessa função)
alunos.shift()
console.log(alunos)
// Comando delete
delete alunos[1]
console.log(alunos)
// Também posso utilizar o slice (fatiamente)
console.log(alunos.slice(0,4))
// Testando se é um Array
console.log(alunos instanceof Array)