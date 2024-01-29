// Esta função
function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
 // Pegando elementos do HTML
const marcador = document.querySelector('.marcador')
marcador.innerHTML = '00:00:00'

// Depois de simplificar a forma de pegar os eventos, não é mais necessário selecionar os elementos
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')

let segundos = 0;
let timer;

// Iniciando o relógio
function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        marcador.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

// A forma de capturar eventos abaixo é mais detalhada

// Possiveis eventos do timer e instruções para cada evento
// iniciar.addEventListener('click', function(event){
//     marcador.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio();
// })
// pausar.addEventListener('click', function(event){
//     marcador.classList.add('pausado')
//     clearInterval(timer)
// })
// zerar.addEventListener('click', function(event){
//     clearInterval(timer)
//     segundos = 0;
//     marcador.innerHTML = criaHoraDosSegundos(segundos)
// })

// Recebendo o evento dos elementos de forma mais simplificada
document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('iniciar')){
        marcador.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio();
    }
    else if(el.classList.contains('pausar')){
        marcador.classList.add('pausado')
        clearInterval(timer)
    }
    else if(el.classList.contains('zerar')){
        marcador.classList.remove('pausado')
        clearInterval(timer)
        segundos = 0;
        marcador.innerHTML = criaHoraDosSegundos(segundos)
    }
})