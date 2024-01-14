// Objeto Math
let num1 = 9.45528
// Arredondando o número para baixo
let num2 = Math.floor(num1)
console.log(num2) // 9
// Arredondando o número para cima
num2 = Math.ceil(num1)
console.log(num2); // 10
// Arredondando para o número mais próximo
num2 = Math.round(num1)
console.log(num2); // 10
// Encontrando o maior número de uma sequência
console.log(Math.max(1, 2, 3, 4, 5)) // 5
// Gerando números aleatórios entre 0 e 1
console.log(Math.random())
// Gerando números aleatórios entre 10 e 5
const aleatorio = Math.random() * (10-5) + 5
console.log(aleatorio)
// Valor de PI
console.log(Math.PI)
// Descobrindo a raiz quadrada de um número
let numero = 9
console.log(numero ** (1/2))