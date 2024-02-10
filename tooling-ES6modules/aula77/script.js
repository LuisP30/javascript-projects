// Iniciando o gerenciador de pacote do Node:
// npm init -y
// instalando o babel:
// npm install --save-dev @babel/cli @babel/preset-env @babel/core

const nome = 'Luis'
const obj = { nome }
const novoObj = { ...obj }
console.log(novoObj)

// Utilizando o babel deixar o script em mais moderno ou mais antigo:
// npx babel script.js -o bundle.js --presets=@babel/env
// bundle é o nome do novo arquivo gerado pelo babel

// Este comando abaixo deixa o babel assistindo o script.js e atualiza o bundle.js
// de acordo com as atuailizações identificadas no script.js (este arquivo)
// npm run babel