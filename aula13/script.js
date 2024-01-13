let num1 = 9;
let num2 = 2.5;
let num3 = 12.5765464554;

// A função toString serve para transformar o valor da variável em string
// Abaixo ele está sendo concatenado com o valor de num2
console.log(num1.toString() + num2)
console.log(typeof(num1))
// Representação binária de um número:
console.log(num1.toString(2))
// Arredondando números: (parâmetro é quantas casas decimais eu quero após a vírgula)
console.log(num3.toFixed(2))
// Checando se é inteiro:
console.log(Number.isInteger(num1))
// Testando se uma conta retorna NaN:
let temp = num1 * '-'
console.log(Number.isNaN(temp)) // Espera-se true
// Corrigindo imprecisão em números flutuantes
let numero1 = 0.7
let numero2 = 0.1
resultadoImpreciso = numero1 + numero2
console.log(resultadoImpreciso)
// Resultado correto abaixo:
resultadoPreciso = parseFloat(resultadoImpreciso.toFixed(2))
console.log(resultadoPreciso)
// Outra maneira de corrigir imprecisão:
let conta = ((numero1*100) + (numero2*100)) /100
console.log(conta)