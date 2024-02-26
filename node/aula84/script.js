const fs = require('fs').promises // Requerimento do módulo 'fs' para operações assíncronas de sistema de arquivos
const path = require('path') // Requerimento do módulo 'path' para manipulação de caminhos de arquivos

async function readdir(rootDir){
    // Se nenhum diretório raiz for fornecido, assume o diretório atual do arquivo que está sendo executado
    rootDir = rootDir || path.resolve(__dirname)
    
    // Lista os arquivos no diretório fornecido
    const files = await fs.readdir(rootDir)
    
    // Chama a função 'walk' passando a lista de arquivos e o diretório raiz
    walk(files, rootDir)
}

async function walk(files, rootDir){
    // Itera sobre os arquivos
    for(let file of files){
        // Resolve o caminho completo do arquivo
        const fileFullPath = path.resolve(rootDir, file) 
        
        // Obtém estatísticas do arquivo usando 'fs.stat'
        const stats = await fs.stat(fileFullPath)
        
        // Verifica se o arquivo está dentro de um diretório .git ou node_modules, e se estiver, continua para o próximo arquivo
        if(/\.git/g.test(fileFullPath)) continue
        if(/node_modules/g.test(fileFullPath)) continue
        
        // Verifica se o arquivo é um diretório
        if(stats.isDirectory()){
            // Se for, chama recursivamente 'readdir' para percorrer os arquivos desse diretório
            readdir(fileFullPath);
            continue
        }
        
        // Verifica se o arquivo é um arquivo .css
        if(!/\.css$/g.test(fileFullPath)) continue
        
        // Se o arquivo for um arquivo .css, imprime o caminho completo do arquivo
        console.log(fileFullPath)
    }
}

// Chama a função 'readdir' passando o caminho do diretório como argumento
readdir('C:/Users/User/Desktop/javascript-projects')
