// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em sí (iteráveis, arrays ou string)

const nome = 'Luis Henrique';
/* Diferente da palavra in, o of faz com que a variável tenha o valor do índice
e não a posição do índice em sí */
for(let valor of nome){
    console.log(valor)
}
// Também funciona com arrays
const vetor = ['Luis', 'Henrique']
for(let indice of vetor){
    console.log(indice)
}
// Um método para iterar arrays:
vetor.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});
