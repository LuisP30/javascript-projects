// try e catch com finally
// try{
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('Fechei o arquivo')
// } catch{
//     console.log('Tratando o erro')
// }
// finally{
//  // Sempre executado
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância do Date')
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hours12: false
    })
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data)
    console.log(hora)
} catch (e){

} finally{
    console.log('Tenha um bom dia!')
}