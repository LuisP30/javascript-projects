// Tratando erros com try e catch
/* 
try{
    tente executar isso
} catch(err){ err é uma variável
    execute isso caso ocorra algum erro acima
}
*/

function soma(y, x){
    if(typeof x !== 'number' || typeof y !== 'number'){
        // Levantando um erro 
        throw new Error('x e y precisam ser números')
    }
    return x + y;
}

try{
    console.log(soma(1,'1'))
    console.log(soma(1,2))
} catch(error){
    console.log('Algo mais amigável para o usuário')
}
