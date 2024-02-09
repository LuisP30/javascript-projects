// Métodos para promises

function rand(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}

function espera(msg, tmp){
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string'){
            reject('Valor inválido')
            // return // Aqui irá parar a execução da minha promise
        }
        setTimeout(()=>{
            resolve(msg)
        }, tmp)
    })
}

// Promise.all
const promecas = [
    'Primeiro valor', 
    espera('Promise 1', rand(1000, 3000)),
    espera('Promise 2', rand(1000, 3000)),
    espera('Promise 3', rand(1000, 3000)),
];
// Resolve todas as promises do array e me retorna um valor.(com esse método, se uma promise for rejeitada, todas serão)
Promise.all(promecas).then((valor)=>{console.log(valor)}).catch((erro)=>{console.log(erro)})
// Passa uma lista de promises e a primeira que resolver retorna o valor
Promise.race(promecas).then((valor)=>{console.log(valor)}).catch((erro)=>{console.log(erro)})
// O 'Primeiro valor' será sempre o primeiro entregue pois ele é o primeiro a ser resolvido
// Retornando uma Promise já resolvida
function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve('Página em cache')
    }
    else{
        return espera('Baixei a página', rand(1000, 5000))
    }
}
baixaPagina().then(dadosPagina=>{console.log(dadosPagina)}).catch((e)=>{console.log(e)})