// Atribuição via desestruturação (Arrays)
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

[a, b, c] = [b, c, a]
// Lado Esquerdo do igual: Desestruturação
// Lado direito do igual: Atribuição
console.log(a)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [primeiroNumero, segundoNumero, ...resto] = numeros; // rest ou spread
console.log(primeiroNumero, segundoNumero)
console.log(resto)
// Passando valores vazios para pular índices do array
const [um, , tres] = numeros; 
console.log(um, tres)
// Desestruturação e atrubuição com Arrays dentro de um Array
const indices = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [, , [, oito ,]] = indices
console.log(oito)
