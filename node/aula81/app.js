// Exportando o mode1
const mode1 = require('./mode1');
// const mode1 = require('./mode1').falaNome; Eu também poderia importar só a chave falaNome dessa forma
// A função falaNome foi importada do meu módulo mode1.
// Lá existem duas constantes (nome e sobrenome).
const { nome, sobrenome } = require('./mode1')
console.log(nome, sobrenome)

// Acessando a classe que exportei de mode1
const { Pessoa } = require('./mode1')
const p1 = new Pessoa('Luis')
console.log(p1)

/* Módulos que criei requerem caminho, já módulos padrão do node
não há a necessidade de passar o caminho */
const path = require('path') // Este é um módulo padrão do node