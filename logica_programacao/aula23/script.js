// Avaliação de Curto-Circuito
// Valores considerados false em JavaScript:
/*
FALSY
0 - Zero
'' - String vazia
null - nulo
undefined - indefinido
NaN - Not a Number
Qualquer coisa diferente disso é True
*/
console.log('Luis' && 'Henrique' && 'Henrique') // Dessa forma será retornado o valor considerado False.
// Se todos forem considerados verdadeiros ele retorna o último valor passado

function falaOi(){
    return 'Oi';
}

const vaiExecutar = false
console.log(vaiExecutar && falaOi()); // A constante possui valor falso então é retornado false literal
console.log(0 || false || null || 'Luis' || true) // Printa 'Luis' por ser o primeiro valor verdadeiro encontrado

const corUsuario = null;
const corPadrao = corUsuario || 'Branco'

console.log(corPadrao)