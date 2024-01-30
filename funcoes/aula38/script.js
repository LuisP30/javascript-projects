// As várias maneiras de definir funções
// Declaração de função: (Function Hoisting)
function falaOi(){
    console.log('Sou uma função normal')
}
falaOi()
// Funções são First-class objects (Objetos de primeira classe)
// Function Expression
/* As funções são dados em JavaScript. Isso quer dizer que elas
podem ser utilizadas como valor de uma variável por exemplo */
const souUmDado = function(){
// Também posso nomear a função acima. Atualmente ela está sem nome, anônima.
    console.log('Sou um dado')
}
/* Posso utilizar essa variável (souUmDado) como parâmetro de outra função e fazer
essa outra função executar a minha função souUmDado */
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado)
// Arrow Function
/* Declaração mais curta */
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()
// Posso ter uma função dentro de um objeto
const obj = {
    falar: function(){
    console.log('Estou falando')
    }
}
obj.falar()