/*

Precedência:

1- ()
2- **
3- * / %
4- + -

A prioridade em que a conta é resolvida

Operador de Incremento:

let contador = 1;
contador++;
++contador;

contador--
--contador

Quando o operador está ao lado direito ele incrementa/decrementa na linha seguinte apenas
Quando o operador está ao lado esquerdo ele incrementa/decrementa imediatamente
*/

let numero = '5'
numero = parseInt(numero)
// Convertendo a variável para o tipo inteiro.
// Pode-se utilizar outras funções, como parseFloat
console.log(typeof(numero))