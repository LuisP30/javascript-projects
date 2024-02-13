// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export

// Acessando importação de app.js
import { nome as nomeApp, sobrenome, soma } from './app.js' // utilizar a extensão js é opcional. Utilizado AS para renomear a variável
console.log(nomeApp, sobrenome)
console.log(soma(10, 20))

// Importando o padrão:
// import qualquerNome from './app.js'
// qualquerNome()

// Sempre que importa sem chave significa que está importando o valor padrão
import padrao from './app.js'
console.log(padrao) // É o sobrenome
