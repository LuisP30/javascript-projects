// Operação ternária: ? :
// ?Valor para verdadeiro:Valor para falso
const pontuacaoUsuario = 999;

// if(pontuacaoUsuario>=1000){
//     console.log('Usuário VIP')
// } else{
//     console.log('Usuário comum')
// }

// A lógica de cima está representada abaixo com operação ternária
const nivelUsuario = pontuacaoUsuario >= 1000 ?'Usuário VIP':'Usuário comum'
console.log(nivelUsuario)