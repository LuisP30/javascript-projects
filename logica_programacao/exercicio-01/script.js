// Escreva uma função que recebe 2 números e retorne o maior deles
function numMaior(num1, num2){
    // Também pode utilizar operação ternária
    if(num1>num2){
        console.log(`O número ${num1} é maior`)
        return num1
    }else if(num2>num1){
        console.log(`O número ${num2} é maior`)
        return num2
    }
    else{
        console.log(`Os números são iguais`)
        return `${num1} é igual a ${num2}`
    }
}

// A função abaixo possui a mesma funcionalidade que a de cima
const max = (x, y) => x > y ? x : y 