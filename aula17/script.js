// BÁSICO SOBRE FUNÇÕES
// Definindo uma função que concatena o valor recebido de argumento com uma frase
function saudacao(nome){
   return `Bom dia ${nome}`
}
const variavel = saudacao('Luis')
console.log(variavel)
// Criando uma função de soma
function soma(x = 0, y = 0){
    const resultado = x + y
    return resultado
}
console.log(soma(2))
// Como estou passando apenas um parâmetro, que é o X nesse caso, o y permanecerá com valor de 0
// Dessa forma o valor final será 2
// Nesse exemplo abaixo a declaração de uma função será dentro de uma variável
const raiz = function (n){
    return n ** 0.5;
}; // Neste caso é necessário o ponto e vírgula
console.log(raiz(9))
//--------ARROW FUNCTION (=>)--------
// Esta é outra forma de criar função:
// Esta função irá fazer a mesma coisa que a que está acima!
/*
const raiz = (n) =>{
    return n ** 0.5;
};
Desta função eu poderia remover os parenteses do argumento (apenas quando possuo apenas um)
poderia remover a palavra chave return e as chaves sem que o resultado do meu código seja afetado
*/