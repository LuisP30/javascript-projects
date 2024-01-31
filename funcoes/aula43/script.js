// https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function
// Função de callback

// Criando uma função que gera números aleatórios entre 1000 e 3000
function rand(min = 1000, max = 3000){
    const num = Math.random() * (max-min) + min
    return Math.floor(num)
}

function f1(callback){ // Recebe uma função como parâmetro
    setTimeout(function(){
        console.log('f1')
        if(callback) callback();
    }, rand())
}
function f2(callback){ // Recebe uma função como parâmetro
    setTimeout(function(){
        console.log('f2')
        if(callback) callback();
    }, rand())
}
function f3(callback){ // Recebe uma função como parâmetro
    setTimeout(function(){
        console.log('f3')
        if(callback) callback();
    }, rand())
}

// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Olá mundo!')
//         })
//     })
// })

// Forma mais recomendada de implementar o código acima

// f1 não depende de execução de ninguém
f1(f1callback)
function f1callback(){
    f2(f2callback)
}
// f2 só executa após a execução de f1 (f1 é responsável por chamar f2)
function f2callback(){
    f3(f3callback)
}
// f3 só executa após a execução de f2 (f2 é responsável por chamar f3)
function f3callback(){
    console.log('Olá mundo')
}

// f1()
// f2()
// f3()
// console.log('Olá mundo!')