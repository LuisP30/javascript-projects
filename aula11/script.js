// Escapando a barra.
let umaString = 'Um \\texto';
console.log(umaString)
// Strings são iteráveis!
console.log(umaString[4])
// Em que índice começa a palavra "texto"?
console.log(umaString.indexOf('texto', 2))
// Acima será procurada a palavra texto a partir do índice 2, você pode utilizar apenas um parâmetro também!
// Também existe a função lastIndexOf() que começa procurando a partir do final da string.

// Substituindo a palavra:
console.log(umaString.replace('Um', 'Outro'))
// Tamanho da string
console.log(umaString.length)
// Fatiamento (pegando apenas uma palavra da string)
console.log(umaString.slice(4, 9)) // Também posso utilizar apenas um argumento

// Separando as palavras da string a partir dos espaços (as palavras ficaram em um array).
console.log(umaString.split(' '))
// Toda minúscula:
console.log(umaString.toLowerCase())
// Toda maiúscula:
console.log(umaString.toUpperCase())