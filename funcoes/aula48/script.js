// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*
// Funções geradoras
function* geradora1(){
    yield 'Valor 1' 
    yield 'Valor 2' 
    yield 'Valor 3' 
}
const g1 = geradora1() // g1 terá um objeto como valor
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
// Função com loop infinito
function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
// Deleguei para a função geradora3 fazer 0, 1, 2.
function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4() // g4 terá um objeto como valor
for(let valor of g4){
    console.log(valor)
}