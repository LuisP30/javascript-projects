// Funções recursivas (funções que chamam a si mesmas)
function recursiva(max){
    if(max>10) return;
    console.log(max)
    max++;
    recursiva(max) // Função chamando a si mesma
}
recursiva(0)