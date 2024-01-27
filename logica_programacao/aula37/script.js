// setInterval e setTimeout
// Função que mostra hora atual
function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// Utilizando o setInterval. setInverval recebe dois parâmetros
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000) // A função será executada de 1 em 1 segundo
// Parando a execução da variável timer em 10 segundos
setTimeout(function(){
    clearInterval(timer)
}, 4000)
// Mostrando Olá mundo na tela após 5 segundos
setTimeout(function(){
    console.log('Olá mundo')
}, 5000)