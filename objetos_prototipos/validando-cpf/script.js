// Validação de CPFs
// CPFs: 705.484.450-52, 070.987.720-03

/* Fórmula:
   7x 0x 5x 4x 8x 4x 4x 5x 0x
   10 9  8  7  6  5  4  3  2 = 237

   11 - (237 % 11) = 5 (Primeiro dígito)
   
   7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
   11 10 9  8  7  6  5  4  3  2 = 284

   11 - (284 % 11) = 2 (Segundo dígito)

   - Receber o CPF em uma função como string
   - Utilizar map e reduce
*/
// CPFs a serem utilizados
const cpf1 = '705.484.450-52'
const cpf2 = '070.987.720-03'
// Limpando o ponto final dos CPFs
const cpfLimpo1 = cpf1.replace(/\D+/g, '');
const cpfLimpo2 = cpf2.replace(/\D+/g, '');
// Colocando os números do CPF em um array
const cpfArray1 = Array.from(cpfLimpo1)
const cpfArray2 = Array.from(cpfLimpo2)
// Função que valida CPF
function validaCPF(cpf){
    // Multiplicando números do CPF para primeiro dígito (Mutiplicação de 10 a 2)
    // Criei um array para colocar o resultado dos valores multiplicados do CPF
    let arrayNumerosMultiplicados = []
    let indiceArrayCPF = 0; // Criei essa variável para ir incrementando ela de 1 em 1 para acessar os indices do array de CPF
    // laço for que conta regressivamente do 10 ao 2
    for(let i = 10; i>=2; i--){
        // Adicionando o valor da multiplicação do valor de i e o valor do determinado indice do array do CPF
        arrayNumerosMultiplicados.push(Number(cpf[indiceArrayCPF]) * i)
        // Incrementando indiceArrayCPF para ir acessando os indices
        indiceArrayCPF++;
    }
    // Somando os números do array do resultado da multiplicação (Primeiro dígito) (arrayNumerosMultiplicados)
    const somaNumeros = arrayNumerosMultiplicados.reduce(function(acumulador, valor){
    acumulador += Number(valor)
    return acumulador;
    }, 0)
    // Obtendo o primeiro digito por operação ternária
    const primeiroDigito = 11 - (somaNumeros % 11) <=9 ?11 - (somaNumeros % 11):0
    // Multiplicando números do CPF para segunda dígito
    // Criei um array para colocar o resultado dos valores multiplicados do CPF
    let arrayNumerosMultiplicados2 = []
    let indiceArrayCPF2 = 0; // Criei essa variável para ir incrementando ela de 1 em 1 para acessar os indices do array de CPF
    // laço for que conta regressivamente do 10 ao 2
    for(let i = 11; i>=2; i--){
        // Adicionando o valor da multiplicação do valor de i e o valor do determinado indice do array do CPF
        arrayNumerosMultiplicados2.push(Number(cpf[indiceArrayCPF2]) * i)
        // Incrementando indiceArrayCPF para ir acessando os indices
        indiceArrayCPF2++;
    }
    // Somando os números do array do resultado da multiplicação (Segundo dígito) (arrayNumerosMultiplicados2)
    const somaNumeros2 = arrayNumerosMultiplicados2.reduce(function(acumulador, valor){
        acumulador += Number(valor)
        return acumulador;
        }, 0)
        // Obtendo o primeiro digito por operação ternária
        const segundoDigito = 11 - (somaNumeros2 % 11) <=9 ?11 - (somaNumeros2 % 11):0
    if(primeiroDigito===Number(cpf[9]) && segundoDigito===Number(cpf[10])) return true;
    else return false;
    
}
// Chamando a função validaCPF que recebe um Array como argumento
console.log(validaCPF(cpfArray1))
