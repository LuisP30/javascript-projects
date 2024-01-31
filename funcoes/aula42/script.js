// Closures
// Closure é a habilidade da função em acessar o escopo léxico
function retornaFuncao(){
    const nome = 'Luis'
    return function(){
        return nome
    }
}
// Essa constante irá receber como valor a função anônima que retornaFuncao() está retornando
const funcao = retornaFuncao();
console.log(funcao)
// console.dir(funcao)
