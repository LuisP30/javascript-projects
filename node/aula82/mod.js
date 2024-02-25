// https://medium.com/geekculture/understanding-the-difference-between-module-exports-and-exports-in-node-js-264fc500a409#:~:text=We've%20seen%20that%20module,right%20one%20for%20your%20module.
// https://pt.stackoverflow.com/questions/213910/javascript-diferen%C3%A7as-entre-import-e-require
module.exports = function(x, y){
    return x * y
}

// Variáveis internas dentro do módulo
console.log(__filename) // Nome do arquivo atual
console.log(__dirname) // Nome da pasta atual
// Para manipular caminhos há a função path
const path = require('path')
console.log(path.resolve(__dirname, '..', '..', 'arquivos')) // Mandando o path resolver o caminho que passei como argumento