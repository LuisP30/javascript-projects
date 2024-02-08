// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promises
function espera(msg, tmp){
    // resolve: se tal código executou com sucesso então resolve para mim
    // reject: se deu erro no código então rejeita ele para mim
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Valor inválido') // Caso minha msg não seja uma string, estou rejeitando.
        setTimeout(()=>{
            resolve(msg) // Quando executo o resolve significa que já estou resolvendo a minha promise
        }, tmp)
    }) //.then() também posso utilizar o then aqui
}
// Irá demorar 5 segundos para executar minha mensagm
espera('Buscando dados no BD', aleatorio(1000, 3000)).then(resposta => { // then 1
    console.log(resposta)
    return espera('Tratando os dados', aleatorio(1000, 3000)).then(resposta=> { // then 2
        console.log(resposta)
        return espera(2, aleatorio(1000, 3000)).then(resposta=> { // then 3
            console.log(resposta)
        })
    })
}).catch(e => {console.log('Erro!', e)}) /* Eu fiz minha promise rejeitar valor diferente de string.
Mesmo que o meu primeiro then() e nem o segundo possuiam erros, Os métodos then() serão executados até
terminarem ou caso surja um erro em algum deles, assim serão rejeitados e o código irá para o método catch
 No catch acima printei uma mensagem de erro e o erro em si que escrevi no reject. */
 
// resolve: then é executado quando resolvo minha promise
// reject: catch é executado que vai capturar o erro

/* A função espera(msg, tmp) recebe uma mensagem e um tempo em milisegundos 
e retorna uma promise. Para quando o meu código for executado com sucesso, 
há um resolve(msg) (recebe apenas um parâmetro). O resolve pegará o argumento 
que recebeu irá executar o método then() que está recebendo uma função com um
parâmetro (o parâmetro dessa função terá o valor que resolve() recebeu como agumento)
 */


// Função que cria números aleatórios
function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min) + min)
}

console.log('Isso será executado antes de qualquer promise')
// Promises são em paralelo, portando o JS não espera as promises serem executadas para seguir com o código.
// Por isso é chamado de código assincrono