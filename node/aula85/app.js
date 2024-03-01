const path = require('path')
// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt')
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json')
const escreve = require('./modules/escrever') // Importando escreve do módulo escrever.js
const ler = require('./modules/ler') // Importando ler do módulo ler.js

const pessoas = [
    {nome: 'Henrique' },
    {nome: 'Luis' },
    {nome: 'Pimenta' },
]
const json = JSON.stringify(pessoas, '', 2) // Transformando objetos em Json
escreve(caminhoArquivo, json) // Escreve recebe dois parâmetros: caminho e dados

async function lerArquivo(caminho){
    const dados = await ler(caminho) // Já lndo o arquivo
    return renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val))
}

lerArquivo(caminhoArquivo)