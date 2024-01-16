// Valores primitivos e valores por referência
/*
Primitivos - string, number, boolean, undefined, null, bigint e symbol (Valores imutáveis)
São copiados quando passamos o valor deles para outra variável utilizando o sinal de atribuição

Referência - Array, Object e Functions (Valores mutáveis)
São valores passados por referência (local na memória/"b" referencia o mesmo valor de "a" na memória)
*/

let a ='A'
let b = a
a ='B'

console.log(a, b)

let c = [1, 2, 3]
let d = c

d.pop()
console.log(c, d)