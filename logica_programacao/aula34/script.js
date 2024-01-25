// break e continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// continue faz com que o laço inicie uma nova iteração
// break sai do laço
for(let numero of numeros){
    if(numero % 2!==0){
        continue;
        // Imprime apenas os números pares
    }
    if(numero===8){
        break;
        // Parando o código antes de imprimir o 8
    }
    console.log(numero)
}
