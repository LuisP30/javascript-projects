// https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE
// Funções imediatas (Funções auto-invocadas)
// IIFE -> Immediately invoked function expression
// É exemplo de uma função imediata:
(function(){
    console.log('Minha função anônima está dentro de parênteses e não toca o escopo global');
    let variavel = 2; // Essa variável só é acessível neste escopo local
})();
