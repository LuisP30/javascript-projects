// Parâmetros de função
function funcao(){
    console.log(arguments) // Quando criamos uma função utilizando a palavra function, temos a variável "arguments" disponivel
} // arguments é um objeto
funcao('Valor')
// Criando uma função que faz operações matemáticas
// Essa função recebe um operador, acumulador e números como argumento. Observe a importância da utilidade do rest operator no parâmetro números
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){      // rest operator deve ser sempre o último parâmetro
    if(operador === '+') acumulador += numero;
    else if(operador === '-') acumulador -= numero;
    else if(operador === '*') acumulador *= numero;
    else if(operador === '/') acumulador += numero;
    }
    console.log(acumulador)
}
conta('-', 29, 1, 1, 1 , 1, 1)

// Utilizando o arguments em uma arrow function. Este método é o mais recomendável
const arrowFunction = (...args) => {
    console.log(args)
};
arrowFunction(1, 2, 3)