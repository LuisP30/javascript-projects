// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// Async e Await

function rand(min=1000, max=4000){
    return Math.floor(Math.random() * (max-min) + min)
}

function espera(msg, tmp){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject('Valor inválido')
            }
            // Esse valor será recebido no then()
            resolve(msg)
        }, tmp)
    })
}

espera('Fase 1', rand())
    .then(fase=>{
        console.log(fase)
        return espera('Fase 2', rand());
    })
    .then(fase=>{
        console.log(fase)
        return espera('Fase 3', rand());
    })
    .then(fase=>{
        console.log(fase);
        return executa()
    })
    .catch(e => {
        console.log(e)
    })

// Utilizando as palavras async e await. Permitem que utilize promises dentro do corpo da função como
// se essas promises fossem de forma sincrona.
async function executa(){
    // Minha função irá pausar em cada await, aguardar a promise ser resolvida ou rejeitada para dar continuidade
    /* Para tratar erros posso colocar um catch em cada um ou envolver tudo em um try-catch */
    try{
        const fase4 = await espera('Fase 4', rand()) // Quando eu chamar a função o código pausa aqui até que o valor seja resolvido ou rejeitado
        console.log(fase4)
        const fase5 = await espera('Fase 5', rand()) // Quando eu chamar a função o código pausa aqui até que o valor seja resolvido ou rejeitado
        console.log(fase5)
        const fase6 = await espera(1, rand()) // Quando eu chamar a função o código pausa aqui até que o valor seja resolvido ou rejeitado
        console.log(fase6)  
    }catch(e){
        // Quando o interpretador encontrar um await com erro cairá aqui no catch
        console.log(e)
    }
}

// pending -> pendente
// fullfield -> resolvido
// rejected -> rejeitada